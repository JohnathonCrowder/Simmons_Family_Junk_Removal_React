import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts';
import adminRoutes from './routes/admin';
import newsletterRoutes from './routes/newsletter';
import contactRoutes from './routes/contact';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: [
    'https://simmonsfamilyjunkremoval-frontend.onrender.com/',
    'http://localhost:5173',
    'http://localhost:3000'
  ],
  credentials: true
}));
app.use(express.json());

// Updated MongoDB connection
mongoose.connect(process.env.MONGODB_URI!)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/posts', postRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/newsletter', newsletterRoutes);
app.use('/api/contact', contactRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;