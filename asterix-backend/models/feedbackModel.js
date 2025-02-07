const { getDB } = require("../pathutils/dataBaseUtil");

module.exports = class Feedback {
  constructor(
    userFeedback,
    firstName,
    lastName,
    email,
    country,
    city,
    state,
    region,
    postalCode
  ) {
    this.userFeedback = userFeedback;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.country = country;
    this.city = city;
    this.state = state;
    this.region = region;
    this.postalCode = postalCode;
  }

  // For inserting the data in the database
  save() {
    const db = getDB();
    if (!db) {
      console.error("Database connection is not available.");
      return Promise.reject("Database connection failed.");
    }

    return db
      .collection("Feedback") // Fixed typo: 'colllection' → 'collection'
      .insertOne(this)
      .then((result) => {
        console.log("Feedback inserted successfully:", result);
        return result;
      })
      .catch((err) => {
        console.error("Error inserting feedback:", err);
        throw err;
      });
  }

  // For fetching all feedback entries
  // static fetchAll() {
  //   const db = getDB();
  //   if (!db) {
  //     console.error("Database connection is not available.");
  //     return Promise.reject("Database connection failed.");
  //   }

  //   return db
  //     .collection("Feedback") // Fixed typo
  //     .find()
  //     .toArray()
  //     .then((feedbackList) => {
  //       console.log("Fetched feedback:", feedbackList);
  //       return feedbackList;
  //     })
  //     .catch((err) => {
  //       console.error("Error fetching feedback:", err);
  //       throw err;
  //     });
  // }
};
