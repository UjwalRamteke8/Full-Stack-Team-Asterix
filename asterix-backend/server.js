const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
const { mongoConnect } = require("./pathutils/dataBaseUtil");

// Routes
const feedbackRouter = require("./routes/feedbackRoutes"); // Ensure this file exists

app.use("/feedback", feedbackRouter); // Use lowercase endpoint
app.post("/feedback", async (req, res) => {
  try {
    // console.log(req.body); // Debugging: Check if data is received
    res.status(200).json({ message: "Feedback received!" });
  } catch (error) {
    console.error("Error handling feedback:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Handle undefined routes
app.use((req, res, next) => {
  res.status(404).json({ message: "Page Not Found" });
});

// Global error handler (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

// Start the server
const PORT = process.env.PORT || 3000;

mongoConnect(() => {
  app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
  });
});
