import express from 'express';
import axios from 'axios';

const router = express.Router();

const GOOGLE_PLACE_ID = 'c77f7caeefdcbd0!8m2!3d36.961589!4d-93.254587!16s%2Fg%2F11ks490f2g'; // Replace with your actual Place ID
const API_KEY = process.env.GOOGLE_API_KEY;

router.get('/', async (_req, res) => {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${GOOGLE_PLACE_ID}&fields=reviews&key=${API_KEY}`
    );

    const reviews = response.data.result.reviews;
    res.json(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ message: 'Error fetching reviews' });
  }
});

export default router;