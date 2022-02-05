const comparison = require("./comparison");
const logical = require("./logical");
const element = require("./element");
const arrays = require("./arrays");

const queryOperators = async (collections) => {
  // comparison(collections);
  // logical(collections);
  // element(collections);
  arrays(collections);
};

module.exports = queryOperators;
