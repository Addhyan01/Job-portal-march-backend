const express = require('express');
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const analyticsRoutes = require('./controllers/analytics');
const { mongoURI } = require('./config');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(cors());

app.use(express.json());

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api', analyticsRoutes); // Analytics route

const PORT = process.env.PORT || 1000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
