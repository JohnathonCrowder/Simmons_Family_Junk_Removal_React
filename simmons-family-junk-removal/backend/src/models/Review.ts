import mongoose, { Document, Schema } from 'mongoose';

export interface IReview extends Document {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  profile_photo_url: string;
}

const ReviewSchema: Schema = new Schema({
  author_name: { type: String, required: true },
  rating: { type: Number, required: true },
  text: { type: String, required: true },
  time: { type: Number, required: true },
  profile_photo_url: { type: String, required: true },
});

export default mongoose.model<IReview>('Review', ReviewSchema);