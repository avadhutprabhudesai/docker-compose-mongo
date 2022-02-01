const arrays = async (students) => {
  /**
   *  - Exact array match
   *  - At least one element match
   *  - Multiple elements satisfy one or more conditions
   *  - Single element satisfies all conditions
   *  - By index
   *  - By size
   *
   */
  //  Exact array match, order is considered as part of matching process too
  console.log(
    "\n\n============== query/arrays.js => Exact array match in same order =============="
  );
  const ecoHistory = await students
    .find({
      minors: ["Economics", "History"],
    })
    .toArray();

  console.log(ecoHistory);
  console.log(
    "\n\n============== query/arrays.js => Exact array match in same order =============="
  );

  //  At least one element exact match
  console.log(
    "\n\n============== query/arrays.js => At least one element exact match =============="
  );
  const mathMinors = await students
    .find({
      minors: "Maths",
    })
    .toArray();

  console.log(mathMinors);
  console.log(
    "\n\n============== query/arrays.js => At least one element exact match =============="
  );

  //  Multiple elements satisfy one or more conditions
  console.log(
    "\n\n============== query/arrays.js => Multiple elements satisfy one or more conditions =============="
  );
  const gradeb = await students
    .find({
      examScores: { $gt: 50, $lt: 80 },
    })
    .toArray();

  console.log(gradeb);
  console.log(
    "\n\n============== query/arrays.js => Multiple elements satisfy one or more conditions =============="
  );

  //  Single element satisfies all criteria
  console.log(
    "\n\n============== query/arrays.js => Single element satisfies all criteria =============="
  );
  const gradeD = await students
    .find({
      examScores: { $elemMatch: { $gt: 5, $lt: 15 } },
    })
    .toArray();

  console.log(gradeD);
  console.log(
    "\n\n============== query/arrays.js => Single element satisfies all criteria =============="
  );

  //  By index
  console.log("\n\n============== query/arrays.js => By index ==============");
  const spanishMajors = await students
    .find({
      "majors.0": "Spanish",
    })
    .toArray();

  console.log(spanishMajors);
  console.log("\n\n============== query/arrays.js => By index ==============");

  //  By size
  console.log("\n\n============== query/arrays.js => By size ==============");
  const twoMinors = await students
    .find({
      minors: { $size: 2 },
    })
    .toArray();

  console.log(twoMinors);
  console.log("\n\n============== query/arrays.js => By size ==============");
};

module.exports = arrays;
