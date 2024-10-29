const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // cross origin resource sharing
// const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
dotenv.config(); // Load .env file
const swaggerConfig = require('./swagger');

const app = express();

// Middleware
app.use(cors({
  origin: ['https://www.cyberonicseos.com', 'https://vercel.com/api/toolbar/link/cybersonic-mern-po2v.vercel.app?via=project-dashboard-alias-list&p=1&page=/'], // Allow your frontend domain
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Add necessary methods
  credentials: true,
}));

app.use(express.json()); // To parse incoming request bodies

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/auth', authRoutes); // Routes for auth actions

swaggerConfig(app);

// Root route
app.get('/', (req, res) => {
  res.send('Hello, Ali! Your server is running.');
});

app.post('/auth', (req, res) => {const{name, email, password}=req.body;
RegisterModel.findOne({email: email})
.then(user=> {
  if(user){
    res.json("Account already exits")
  } else{
    RegisterModel.create({name: name, email: email, password: password})
    .then(result=> res.json(result))
    .catch(err => res.json(err))
  }
}).catch(err => res.json(err))
})

const PORT = process.env.PORT || 5000; // Use PORT from .env or default to 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
