const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const tweetRoutes = require('./routes/tweetRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', tweetRoutes);

// Test Route
app.get('/', (req, res) => {
  res.send('AI Tweet Generator API is running...');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
