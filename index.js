const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const analyticsRoutes = require('./controllers/analytics');
// const { mongoURI } = require('./config');
const cors = require('cors');

dotenv.config();
mongoose.connect(process.env.mongoURI);
const app = express();
app.use(cors());

app.use(express.json());
app.use(bodyParser.json({
    extended: true
}));

mongoose.connect(process.env.mongoURI);

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api', analyticsRoutes); // Analytics route

const PORT = process.env.PORT || 1000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
