
import express from 'express';
import mongoose from 'mongoose';
import axios from 'axios';
import  dotenv from 'dotenv';
import {Ticker} from "./model.js"
dotenv.config();

const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Fetch top 10 tickers from WazirX API and store them in the database
const fetchAndStoreTickers = async () => {
  try {
    const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
    const tickers = Object.values(response.data).slice(0, 15); // Get top 15 results

    // Clear existing data
    await Ticker.deleteMany({});

    // Store each ticker in the database
    for (let ticker of tickers) {
      const { name, last, buy, sell,high,low, volume,quote_unit, base_unit } = ticker;
      const newTicker = new Ticker({ name, last, buy, sell,high,low, volume,quote_unit, base_unit });
      await newTicker.save();
    }

    console.log('Tickers stored in the database');
  } catch (error) {
    console.error('Error fetching data from WazirX API:', error.message);
  }
};

// Fetch data when the server starts
fetchAndStoreTickers();

// API route to get stored tickers from MongoDB
app.get('/api/tickers', async (req, res) => {
  try {
    const tickers = await Ticker.find();
    res.json(tickers);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving data' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
