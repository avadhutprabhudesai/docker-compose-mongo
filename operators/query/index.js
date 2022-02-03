const comparison = require("./comparison");
const logical = require("./logical");
const element = require("./element");
const evaluation = require("./evaluation");
const geospatial = require("./geospatial");
const arrays = require("./arrays");
const projection = require("./projection");

const queryOperators = async (collections) => {
  // comparison(collections);
  // logical(collections);
  // element(collections);
  // evaluation(collections);
  // geospatial(collections);
  arrays(collections);
  // projection(collections);
};

module.exports = queryOperators;
