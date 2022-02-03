const comparison = async ({ profiles, restaurants, nobels, students }) => {
  /**
   *  - $eq/$ne
   *  - $gt/$lt/$gte/$lte
   *  - $in/$nin
   */

  console.log(
    "\n\n============== operators/comparison.js =>  $eq =============="
  );
  /**
   *  - String
   *  - Field in embedded document
   *  - Array
   *  - Regex
   */

  // String
  console.log(
    await restaurants
      .find({
        name: { $eq: "Lake Charles" },
      })
      .toArray()
  );

  console.log(
    await restaurants
      .find({
        "address.state": { $eq: "Arkansas" },
      })
      .toArray()
  );

  console.log(
    await students
      .find({
        minors: { $eq: ["Economics", "Maths"] },
      })
      .toArray()
  );

  console.log(
    await nobels
      .find({
        year: { $eq: /^20/ }, // This tries to match if a regex type value for year, such as {..., year: /^20/}, which yields no results as year field contains string value
      })
      .toArray()
  );
  console.log(
    "\n\n============== operators/comparison.js =>  $eq =============="
  );

  console.log(
    "\n\n============== operators/comparison.js =>  $gt =============="
  );
  console.log(
    await students
      .find({
        score: { $gt: 97 },
      })
      .toArray()
  );
  console.log(
    "\n\n============== operators/comparison.js =>  $gt =============="
  );

  console.log(
    "\n\n============== operators/comparison.js =>  $in =============="
  );
  console.log(
    await students
      .find({
        majors: { $in: ["Spanish", "French"] },
      })
      .toArray()
  );

  console.log(
    await profiles
      .find({
        "profile.title": { $in: [/Supervisor$/, /Executive$/] },
      })
      .toArray()
  );
  console.log(
    "\n\n============== operators/comparison.js =>  $in =============="
  );
};

module.exports = comparison;
