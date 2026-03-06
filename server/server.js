// server/server.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Enhanced Connection Logic
const dbURI = process.env.MONGO_URI;

if (!dbURI) {
  console.error('ERROR: MONGO_URI is not defined in your .env file!');
} else {
  mongoose.connect(dbURI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err.message));
}

app.get('/api/health', (req, res) => {
  res.json({ message: 'FitTracker Server is healthy!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});