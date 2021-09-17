const Event = require("../models/EventModel");
const asyncHandler = require('express-async-handler');
const User = require("../models/userModel");

const createEvent = asyncHandler(async (req, res) => {
  const {
    name,
    price,
    description,
    eventLink,
    date,
    startTime,
    endTime,
    slots
  } = req.body;

  const eventDate = new Date(date);

  const event = await Event.create({
    name: name,
    price: price,
    host: req.user._id,
    description: description,
    eventLink: eventLink,
    date: eventDate,
    startTime: startTime,
    endTime: endTime,
    slots: slots
  });

  res.status(201).json({
    data: event
  });
});

const getAllEvents = asyncHandler(async (req, res) => {
  const events = await Event.find();
  res.status(201).json({
    data: events
  });
});

const registerForEvent = asyncHandler(async (req, res) => {
  const { eventId } = req.body;
  const event = await Event.findById(eventId);
  const user = await User.findById(req.user._id);
  if (event != null) {
    event.participants.push(req.user._id);
    user.events.push(eventId);
    user.save();
    event.save();
    res.status(200).json({
      status: "success"
    })
  } else {
    res.status(400).json({
      status: "failed"
    });
    throw new Error('Event not found');
  }
});

module.exports = { createEvent, getAllEvents, registerForEvent };