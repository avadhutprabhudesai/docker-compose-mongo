const { MongoClient, Int32, Long } = require("mongodb");
const { createRestaurants } = require("./restaurant-data");
const { createStudents } = require("./student-data");
const { createProfiles } = require("./profile-data");
const laureatesData = require("./laurets");
const nobelsData = require("./nobels");

console.log("=================== Node started ==================");

const URL = "mongodb://mongodb:27017";

const client = new MongoClient(URL);

let testdb, restaurants, students, laureates, nobels, addressBook;

const initDB = async () => {
  try {
    await client.connect();

    testdb = client.db("test");

    restaurants = testdb.collection("restaurants");
    students = testdb.collection("students");
    laureates = testdb.collection("laureates");
    nobels = testdb.collection("nobels");
    profiles = testdb.collection("profiles");
    addressBook = testdb.collection("addressBook");

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

    if (!(await addressBook?.estimatedDocumentCount())) {
      console.log("Inserting addressBook...");
      await addressBook.insertMany([
        { _id: 1, address: "2030 Martian Way", zipCode: "90698345" },
        { _id: 2, address: "156 Lunar Place", zipCode: 43339374 },
        { _id: 3, address: "2324 Pluto Place", zipCode: Long(3921412) },
        { _id: 4, address: "55 Saturn Ring", zipCode: Int32(88602117) },
        {
          _id: 5,
          address: "104 Venus Drive",
          zipCode: ["834847278", "1893289032"],
        },
      ]);
    }

    console.log("DB connection successful!!");
    return {
      db: testdb,
      restaurants,
      students,
      laureates,
      nobels,
      profiles,
      addressBook,
    };
  } catch (error) {
    console.log("Error connecting to the database");
    console.log(error);
  }
};

module.exports = {
  initDB,
};
