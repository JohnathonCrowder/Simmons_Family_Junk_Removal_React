import express from 'express';
import Newsletter from '../models/Newsletter';
import { authMiddleware } from '../middleware/auth';

const router = express.Router();

// Subscribe route
router.post('/subscribe', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    const existingSubscription = await Newsletter.findOne({ email });
    if (existingSubscription) {
      return res.status(400).json({ message: 'Email already subscribed' });
    }

    const subscription = new Newsletter({ email });
    await subscription.save();

    res.status(201).json({ message: 'Successfully subscribed to newsletter' });
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === 'ValidationError') {
        return res.status(400).json({ message: 'Invalid email format' });
      }
      console.error('Newsletter subscription error:', error.message);
    } else {
      console.error('Newsletter subscription error:', error);
    }
    res.status(500).json({ message: 'Error subscribing to newsletter' });
  }
});

// Get all subscriptions route
router.get('/', authMiddleware, async (_req, res) => {
  try {
    const subscriptions = await Newsletter.find().sort({ date: -1 });
    res.json(subscriptions);
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error fetching newsletter subscriptions:', error.message);
    } else {
      console.error('Error fetching newsletter subscriptions:', error);
    }
    res.status(500).json({ message: 'Error fetching subscriptions' });
  }
});

// Delete subscription route
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const subscription = await Newsletter.findByIdAndDelete(req.params.id);
    if (!subscription) {
      return res.status(404).json({ message: 'Subscription not found' });
    }
    res.json({ message: 'Subscription deleted successfully' });
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error deleting subscription:', error.message);
    } else {
      console.error('Error deleting subscription:', error);
    }
    res.status(500).json({ message: 'Error deleting subscription' });
  }
});

export default router;