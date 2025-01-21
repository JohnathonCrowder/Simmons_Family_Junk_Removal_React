// File: Contact.ts
// Path: simmons-family-junk-removal/backend/src/models/Contact.ts

import mongoose, { Document, Schema } from 'mongoose';

export interface IContact extends Document {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  items: string[];
  pickupDate: Date;
  pickupTime: string;
  city: string;
  instructions?: string;
  date: Date;
}

const ContactSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { 
    type: String, 
    required: true,
    validate: {
      validator: function (v: string) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: (props: { value: string }) => `${props.value} is not a valid email!`
    }
  },
  phone: { 
    type: String, 
    required: true,
    validate: {
      validator: function (v: string) {
        return /^\+?[1-9]\d{1,14}$/.test(v); // E.164 format
      },
      message: (props: { value: string }) => `${props.value} is not a valid phone number!`
    }
  },
  serviceType: { type: String, required: true, enum: ['Residential', 'Commercial'] },
  items: { type: [String], required: true },
  pickupDate: { type: Date, required: true },
  pickupTime: { type: String, required: true },
  city: { 
    type: String, 
    required: true,
    enum: [
      'Springfield',
      'Nixa',
      'Ozark',
      'Republic',
      'Rogersville',
      'Battlefield',
      'Strafford',
      'Willard',
      'Clever',
      'Highlandville',
      'Marionville',
      'Ash Grove',
      'Bolivar',
    ], // Predefined list of valid cities
  },
  instructions: { type: String },
  date: { type: Date, default: Date.now },
});

export default mongoose.model<IContact>('Contact', ContactSchema);
