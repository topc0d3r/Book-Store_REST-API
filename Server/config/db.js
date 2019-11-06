const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');
const url = 'mongodb://127.0.0.1:27017/book-api'
const connectDB = async () => {
  try {
    await mongoose.connect(
      db,
      {
        useNewUrlparser: true
      }
    );

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;