const { MongoClient } = require("mongodb");
const { createRestaurants } = require("./restaurant-data");
const { createStudents } = require("./student-data");
const { createProfiles } = require("./profile-data");
const laureatesData = require("./laurets");
const nobelsData = require("./nobels");

console.log("=================== Node started ==================");

const URL = "mongodb://mongodb:27017";

const client = new MongoClient(URL);

let testdb, restaurants, students, laureates, nobels;

const initDB = async () => {
  try {
    await client.connect();

    testdb = client.db("test");

    restaurants = testdb.collection("restaurants");
    students = testdb.collection("students");
    laureates = testdb.collection("laureates");
    nobels = testdb.collection("nobels");
    profiles = testdb.collection("profiles");

    if (!(await restaurants?.estimatedDocumentCount())) {
      console.log("Inserting restaurants...");
      await restaurants.insertMany(createRestaurants(10));
    }
    if (!(await students?.estimatedDocumentCount())) {
      console.log("Inserting students...");
      await students.insertMany(createStudents(100));
    }
    if (!(await laureates?.estimatedDocumentCount())) {
      console.log("Inserting laurets...");
      await laureates.insertMany(laureatesData);
    }

    if (!(await nobels?.estimatedDocumentCount())) {
      console.log("Inserting nobel prizes...");
      await nobels.insertMany(nobelsData);
    }

    if (!(await profiles?.estimatedDocumentCount())) {
      console.log("Inserting profiles...");
      await profiles.insertMany(createProfiles(10));
    }

    console.log("DB connection successful!!");
    return {
      db: testdb,
      restaurants,
      students,
      laureates,
      nobels,
      profiles,
    };
  } catch (error) {
    console.log("Error connecting to the database");
    console.log(error);
  }
};

module.exports = {
  initDB,
};
