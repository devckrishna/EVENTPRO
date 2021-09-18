const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const mongoose = require("mongoose")
const userRoutes = require('./routes/userRoutes.js');
const eventRoutes = require("./routes/eventRoutes");
const uploadRoutes = require('./routes/uploadRoutes.js');
const { errorHandler, notFound } = require('./utils/errorUtil');
const path = require("path");

dotenv.config({ path: './config.env' });

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB connection successful!'));

const app = express();
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/event/', eventRoutes);
app.use('/api/upload', uploadRoutes);

// app.get(`/api/config/paypal`, (req, res) => res.send(process.env.PAYPAL_CLIENT_ID));

// const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')));

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')));
} else {
  app.get('/', (req, res) => {
    res.send('API is running');
  });
}
app.use(notFound);

app.use(errorHandler);

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on Port:${PORT}`));
