const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); //cross origin resourse sharing
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');

dotenv.config(); // Load .env file

const app = express();

// Middleware
const corsOptions = {
  origin: 'https://www.cyberonicseos.com', // allow your frontend origin
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));


app.use(bodyParser.json()); // To parse incoming request bodies

// picking MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRoutes); // Routes for auth actions

const PORT = process.env.PORT || 5000; // Use PORT from .env or default to 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
