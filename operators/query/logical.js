const logical = async ({ profiles, nobels, restaurants, students }) => {
  /**
   *  - $and
   *  - $or
   *  - $not
   *  - $nor
   */
  console.log(
    "\n\n============== operators/logical.js => $and  =============="
  );
  /**
   * - array of fields
   *   - Same fields with diff conditions
   *   - Different fields with diff conditions
   * - array of expression
   */
  // array of fields: Same field with diff conditions
  console.log("--------------------Score between 90 and 100");
  console.log(
    await students
      .find({
        $and: [{ score: { $gt: 90 } }, { score: { $lt: 100 } }],
      })
      .toArray()
  );
  console.log("--------------------Score between 90 and 100");
  console.log(
    await students
      .find({
        score: { $gt: 90, $lt: 100 },
      })
      .toArray()
  );
  console.log(
    "--------------------Score between 95 and 100 with Maths and Physics majors"
  );
  console.log(
    await students
      .find({
        $and: [
          { majors: { $in: ["Maths", "Physics"] } },
          { score: { $gt: 95, $lt: 100 } },
        ],
      })
      .toArray()
  );
  console.log(
    "\n\n============== operators/logical.js => $and  =============="
  );

  console.log("\n\n============== operators/logical.js => $or  ==============");
  console.log(
    await profiles
      .find({
        $or: [
          { "skills.skillName": { $in: ["Open Source", "Linux"] } },
          { "experiences.title": /Developer$/ },
        ],
      })
      .toArray()
  );
  console.log("\n\n============== operators/logical.js => $or  ==============");
};

module.exports = logical;
