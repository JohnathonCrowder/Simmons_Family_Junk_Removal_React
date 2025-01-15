import mongoose, { Document, Schema } from 'mongoose';

export interface IContact extends Document {
  name: string;
  email: string;
  topic: string;
  message: string;
  date: Date;
}

const ContactSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { 
    type: String, 
    required: true,
    validate: {
      validator: function(v: string) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: (props: { value: string }) => `${props.value} is not a valid email!`
    }
  },
  topic: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

export default mongoose.model<IContact>('Contact', ContactSchema);