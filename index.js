const { initDB } = require("./mongoutil");

const query = require("./query");

initDB().then((collections) => {
  console.log("Database initialsed");

  query(collections);
});
