import mongoose, { Document, Schema } from 'mongoose';

export interface IReview extends Document {
  name: string;
  review: string;
  city: string;
  reviewSite: string;
  date: Date;
}

const ReviewSchema: Schema = new Schema({
  name: { type: String, required: true },
  review: { type: String, required: true },
  city: { type: String, required: true },
  reviewSite: { 
    type: String, 
    required: true,
    enum: ['yelp', 'facebook', 'google']
  },
  date: { type: Date, default: Date.now }
});

export default mongoose.model<IReview>('Review', ReviewSchema);