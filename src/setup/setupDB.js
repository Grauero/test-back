const mongoose = require('mongoose');

const { mongoURI, mongoOptions } = require('../config');

(async () => {
  try {
    await mongoose.connect(mongoURI, mongoOptions);
  } catch (err) {
    throw new Error('Connection to DB failed');
  }
})();
