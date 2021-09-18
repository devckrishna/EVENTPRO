const express = require("express");
const eventController = require("../controllers/EventController");
const { protect, admin } = require('../utils/authUtil');

const router = express.Router();

router.route("/").get(eventController.getAllEvents);
router.route("/register").post(protect, eventController.registerForEvent);
router.route('/create').post(protect, eventController.createEvent);

module.exports = router;