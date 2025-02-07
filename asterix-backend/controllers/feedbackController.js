const Feedback = require("../models/feedbackModel");

exports.postFeedback = (req, res, next) => {
  const {
    userFeedback, // Corrected from 'userFeedback' to match the model's constructor
    firstName,
    lastName,
    email,
    country,
    city,
    state,
    region,
    postalCode,
  } = req.body;
  console.log(req.body);

  const newFeedback = new Feedback(
    userFeedback, // Ensure this variable name matches the frontend form
    firstName,
    lastName,
    email,
    country,
    city,
    state,
    region,
    postalCode
  );

  newFeedback
    .save()
    .then(() => {
      console.log("Team Asterix Feedback Saved Successfully");
      res.status(201).json({ message: "Feedback submitted successfully!" });
    })
    .catch((err) => {
      console.error("Error saving feedback:", err);
      res.status(500).json({ message: "Failed to save feedback.", error: err });
    });
};
