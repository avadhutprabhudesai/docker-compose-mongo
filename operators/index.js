const queryOperators = require("./query");
const updateOperators = require("./update");

const operators = (collections) => {
  // queryOperators(collections);
  updateOperators(collections);
};

module.exports = operators;
