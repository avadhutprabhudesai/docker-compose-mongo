const arrays = async ({ restaurants, profiles, students }) => {
  /**
   *  - $all
   *  - $elemMatch
   *  - $size
   */
  console.log("\n\n============== operators/arrays.js => $all  ==============");
  /**
   * $all
   *    - equality with $and
   *    - when a value is a nested array
   *    - with $elemMatch
   */

  // equality with $and
  console.log("------------------------- Order insensitive ");
  console.log(
    await students
      .find({
        minors: { $all: ["Spanish", "History"] }, // order doesn't matter. Field must contain all the elements.
      })
      .toArray()
  );

  console.log(
    "------------------------- rewriting same query as above with $and "
  );
  console.log(
    await students
      .find({
        $and: [{ minors: "History" }, { minors: "Spanish" }], // yield same result as $all
      })
      .toArray()
  );

  console.log("------------------------- with $elemMatch ");
  console.log(
    await restaurants
      .find({
        userReviews: {
          $all: [
            { $elemMatch: { rating: 2.9 } },
            { $elemMatch: { rating: 3 } },
          ],
        },
      })
      .toArray()
  );
  console.log("------------------------- with subdoc ");
  console.log(
    await restaurants
      .find({
        userReviews: {
          $all: [{ rating: { $gt: 4 } }],
        },
      })
      .toArray()
  );

  console.log("\n\n============== operators/arrays.js => $all  ==============");

  console.log(
    "\n\n============== operators/arrays.js => $elemMatch  =============="
  );
  console.log(
    await profiles
      .find({
        experiences: {
          $elemMatch: {
            durationInDays: { $gt: 700 },
            title: { $regex: /^National/ },
          },
        },
      })
      .toArray()
  );

  console.log(
    "\n\n============== operators/arrays.js => $elemMatch  =============="
  );
};

module.exports = arrays;
