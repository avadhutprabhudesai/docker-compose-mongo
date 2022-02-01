const embedded = async (restaurants) => {
  /**
   *  - Embedded document match
   *  - Nested document match
   *    - Single equality
   *    - Multiple equality
   *
   */
  //  Embedded document match: Exact match, order of fields also considered in the match
  console.log(
    "\n\n============== query/embedded.js => Embedded document match =============="
  );
  const lowestRatings = await restaurants
    .find({
      editorRating: {
        food: 0.72,
        service: 1.6,
        ambience: 2.1,
        overall: 0.36,
      },
    })
    .toArray();
  console.log(lowestRatings);
  console.log(
    "============== query/embedded.js => Embedded document match =============="
  );

  //  Single equality nested
  console.log(
    "\n\n============== query/embedded.js => Single equality nested =============="
  );
  const singleNested = await restaurants
    .find({
      "address.state": "Kentucky",
    })
    .toArray();
  console.log(singleNested);
  console.log(
    "============== query/embedded.js => Single equality nested =============="
  );

  //  Multiple equality nested: AND condition
  console.log(
    "\n\n============== query/embedded.js => Multiple equality nested =============="
  );
  const multipleNested = await restaurants
    .find({
      "address.state": "Kentucky",
      "editorRating.food": 0.72,
    })
    .toArray();
  console.log(multipleNested);
  console.log(
    "============== query/embedded.js => Multiple equality nested =============="
  );
};

module.exports = embedded;
