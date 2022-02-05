const fieldUpdateOperators = require("./field");
const arrayUpdateOperators = require("./array");

const updateOperators = (collections) => {
  fieldUpdateOperators(collections);
  arrayUpdateOperators(collections);
};

module.exports = updateOperators;
