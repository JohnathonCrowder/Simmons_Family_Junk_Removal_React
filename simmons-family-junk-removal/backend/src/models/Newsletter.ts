import mongoose, { Document, Schema } from 'mongoose';

export interface INewsletter extends Document {
  email: string;
  date: Date;
}

const NewsletterSchema: Schema = new Schema({
  email: { 
    type: String, 
    required: true, 
    unique: true,
    validate: {
      validator: function(v: string) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: (props: { value: string }) => `${props.value} is not a valid email!`
    }
  },
  date: { type: Date, default: Date.now }
});

export default mongoose.model<INewsletter>('Newsletter', NewsletterSchema);