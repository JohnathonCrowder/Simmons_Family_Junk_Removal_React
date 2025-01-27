



const PLACE_ID = 'c77f7caeefdcbd0!8m2!3d36.961589!4d-93.254587!16s%2Fg%2F11ks490f2g'; // Replace with your actual Place ID

import express from 'express';
import axios from 'axios';
import Review, { IReview } from '../models/Review';

const router = express.Router();

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

const updateReviews = async () => {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json`,
      {
        params: {
          place_id: PLACE_ID,
          fields: 'reviews',
          key: GOOGLE_API_KEY
        }
      }
    );

    if (response.data.status === 'OK' && response.data.result.reviews) {
      await Review.deleteMany({});
      await Review.insertMany(response.data.result.reviews);
    } else {
      console.error('Google Places API error:', response.data.status);
    }
  } catch (error) {
    console.error('Error updating reviews:', error);
  }
};

router.get('/', async (_req, res) => {
  try {
    let reviews: IReview[] = await Review.find().sort({ time: -1 });
    const lastUpdate = reviews.length > 0 
      ? Math.max(...reviews.map((r: IReview) => r.time))
      : 0;

    const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours
    if (
      reviews.length === 0 || 
      Date.now() - (lastUpdate * 1000) > CACHE_DURATION
    ) {
      await updateReviews();
      reviews = await Review.find().sort({ time: -1 });
    }

    res.json(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ message: 'Error fetching reviews' });
  }
});

export default router;