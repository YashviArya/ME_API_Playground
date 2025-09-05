require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const profileRoutes = require('./routes/profile'); // Routes file

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// Use routes
app.use('/api/profiles', profileRoutes); // router


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const listEndpoints = require('express-list-endpoints');
console.log(listEndpoints(app));


// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
