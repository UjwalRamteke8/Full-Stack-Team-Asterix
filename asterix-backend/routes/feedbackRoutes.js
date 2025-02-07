// External Modules
const express = require("express");
const feedbackRouter = express.Router();

// Local Modules
const feedbackController = require("../controllers/feedbackController");

// Routes
feedbackRouter.post("/", feedbackController.postFeedback);

module.exports = feedbackRouter;
