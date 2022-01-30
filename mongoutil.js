const { MongoClient } = require("mongodb");
const { createRestaurants } = require("./data");

console.log("=================== Node started ==================");

const URL = "mongodb://mongodb:27017";

const client = new MongoClient(URL);

let testdb, restaurants, students, profiles, books;

const initDB = async () => {
  try {
    await client.connect();

    testdb = client.db("test");

    restaurants = testdb.collection("restaurants");
    students = testdb.collection("students");

    await restaurants.insertMany(createRestaurants(100));
    await students.insertOne({
      name: "John",
    });

    console.log("DB connection successful!!");
  } catch (error) {
    console.log("Error connecting to the database");
    console.log(error);
  } finally {
    client.close();
  }
};

const getDB = () => {
  return database;
};

const getCollections = () => {
  return [restaurants];
};

module.exports = {
  initDB,
  getDB,
  getCollections,
};
