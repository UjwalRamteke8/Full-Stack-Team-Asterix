// const { MongoClient } = require("mongodb"); // Correct import from mongodb

// const MONGO_URL =
//   "mongodb+srv://nikitaramteke693:Nikita%401234@Cluster0.jmw8k.mongodb.net/FullStackTeamAsterix?retryWrites=true&w=majority";

// let _db;

// const mongoConnect = (callback) => {
//   MongoClient.connect(MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//     .then((client) => {
//       console.log("Connected to MongoDB successfully!");
//       _db = client.db("Asterix"); // Name of the database
//       callback();
//     })
//     .catch((err) => {
//       console.error("Error while connecting to MongoDB:", err);
//       throw err; // Optionally rethrow the error
//     });
// };

// const getDB = () => {
//   if (!_db) {
//     throw new Error("No database found! Please connect to MongoDB first.");
//   }
//   return _db;
// };

// module.exports = { mongoConnect, getDB };
