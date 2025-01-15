import mongoose, { Document, Schema } from 'mongoose';

export interface IPost extends Document {
  title: string;
  excerpt: string;
  content: string;
  image?: {
    data: Buffer,
    contentType: string
  };
  date: Date;
  category?: string;  // Added category field
  tags?: string[];    // Added tags field
}

const PostSchema: Schema = new Schema({
  title: { type: String, required: true },
  excerpt: { type: String, required: true },
  content: { type: String, required: true },
  image: {
    data: Buffer,
    contentType: String
  },
  date: { type: Date, default: Date.now },
  category: { type: String },  // Added category field
  tags: [String],             // Added tags field
});

export default mongoose.model<IPost>('Post', PostSchema);