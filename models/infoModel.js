const mongoose = require('mongoose');

const infoSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add the name'],
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model('Info', infoSchema);
