// File: contact.ts
// Path: simmons-family-junk-removal/backend/src/routes/contact.ts

import express from 'express';
import Contact from '../models/Contact';
import { authMiddleware } from '../middleware/auth';
import sendEmail from "../utils/sendEmail";


const router = express.Router();

// List of valid cities
const validCities = [
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
];

// Submit contact form
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, serviceType, items, pickupDate, pickupTime, city, instructions } = req.body;

    // Save the form submission to the database
    const contact = new Contact({
      name,
      email,
      phone,
      serviceType,
      items: Array.isArray(items) ? items : [items],
      pickupDate,
      pickupTime,
      city,
      instructions,
    });
    await contact.save();

    // Email content
    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Service Type:</strong> ${serviceType}</p>
      <p><strong>City:</strong> ${city}</p>
      <p><strong>Pickup Date:</strong> ${pickupDate}</p>
      <p><strong>Pickup Time:</strong> ${pickupTime}</p>
      <p><strong>Items:</strong> ${items?.join(", ") || "No items listed"}</p>
      <p><strong>Instructions:</strong> ${instructions || "None"}</p>
    `;

    // Send email notification
    await sendEmail(process.env.NOTIFICATION_EMAIL!, "New Contact Form Submission", emailContent);

    res.status(201).json({ message: "Contact form submitted successfully" });
  } catch (error) {
    console.error("Contact form submission error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Get all contact submissions (protected route)
router.get('/', authMiddleware, async (_req, res) => {
  try {
    const contacts = await Contact.find().sort({ pickupDate: -1 });
    res.json(contacts);
  } catch (error) {
    console.error('Error fetching contact submissions:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: 'Message not found' });
    }
    res.json({ message: 'Message deleted successfully' });
  } catch (error) {
    console.error('Error deleting message:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
