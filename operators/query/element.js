const element = async ({
  restaurants,
  nobles,
  profiles,
  students,
  addressBook,
}) => {
  /**
   *  - $exists
   *  - $type
   */
  console.log(
    "\n\n============== operators/element.js => $exists =============="
  );
  /**
   * Missing field
   * Null field
   *
   */
  console.log("--------------------------- Missing field");
  console.log(
    await students
      .find({
        credits: { $exists: true },
      })
      .toArray()
  );
  console.log("--------------------------- Null field");
  console.log(
    await students
      .find({
        SAT: { $exists: true },
      })
      .toArray()
  );
  console.log(
    "\n\n============== operators/element.js => $exists =============="
  );

  console.log(
    "\n\n============== operators/element.js => $type =============="
  );
  /**
   * A field which is of the mentioned type
   * A field is an array which contains the field of the mentioned type
   *
   */
  console.log(
    await addressBook
      .find({
        zipCode: { $type: "string" },
      })
      .toArray()
  );
  console.log(
    "\n\n============== operators/element.js => $type =============="
  );
};

module.exports = element;
