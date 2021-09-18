const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  host: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  description: {
    type: String,
    required: true
  },
  eventLink: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true
  },
  startTime: {
    type: String,
    required: true
  },
  endTime: {
    type: String,
    required: true
  },
  slots: {
    type: Number,
    required: true
  },
  participants: []
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;