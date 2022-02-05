const arrays = require("./arrays");
const embedded = require("./embedded");
const primitives = require("./primitives");

/**
 * Update
 *    primitives
 *    embedded docs
 *    arrays
 *    update options
 */

const update = ({ laureates, nobels, restaurants, students, profiles }) => {
  // primitives(restaurants);
  // embedded(restaurants);
  arrays(restaurants);
};

module.exports = update;
