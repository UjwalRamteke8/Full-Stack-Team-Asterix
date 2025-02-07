const { MongoClient } = require("mongodb");

const MONGO_URL =
  "mongodb+srv://ujwalramteke293:Ujwal%408739@mern.7wvav.mongodb.net/mydatabase?retryWrites=true&w=majority";

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(MONGO_URL)
    .then((client) => {
      console.log("Connected to MongoDB successfully!");
      _db = client.db("Team_Asterix");
      callback();
    })
    .catch((err) => {
      console.error("Error while connecting to MongoDB:", err);
      throw err; // Optionally rethrow the error
    });
};

const getDB = () => {
  if (!_db) {
    throw new Error("No database found! Please connect to MongoDB first.");
  }
  console.log(_db);
  return _db;
};

module.exports = { mongoConnect, getDB };
