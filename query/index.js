const structure = require("./structure");
const embedded = require("./embedded");
const arrays = require("./arrays");
const arrayEmbeddedDocs = require("./array-embedded-docs");

/**
 * Query
 *    Query structure
 *    Query embedded/nested documents
 *    Query arrays
 *    Query embedded/nested documents in arrays
 *    Query projections
 *    Query operators
 *
 */

const query = ({ laureates, nobels, restaurants, students, profiles }) => {
  // structure(laureates);
  // embedded(restaurants);
  // arrays(students);
  arrayEmbeddedDocs(profiles);
};

module.exports = query;
