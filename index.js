const { initDB } = require("./mongoutil");

const query = require("./query");
const projection = require("./projection");
const operators = require("./operators");
const update = require("./update");

initDB().then((collections) => {
  console.log("Database initialsed");

  // query(collections);
  // projection(collections);
  // update(collections);
  operators(collections);
});
