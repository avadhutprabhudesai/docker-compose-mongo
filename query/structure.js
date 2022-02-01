const structure = async (laureates) => {
  /**
   *  - Find all
   *  - Single equality
   *  - Multiple equality
   */
  //  Find all
  const all = await laureates.find({}).toArray();
  console.log(
    "\n\n============== query/structure.js => Find all =============="
  );
  console.log(all);
  console.log("============== query/structure.js => Find all ==============");

  //  Single Equality
  const singleEq = await laureates
    .find({ bornCountry: "United Kingdom" })
    .toArray();
  console.log(
    "\n\n============== query/structure.js  => Single Equality =============="
  );
  console.log(singleEq);
  console.log(
    "============== query/structure.js => Single Equality =============="
  );

  //  Multiple Equality: AND operation
  const multiEq = await laureates
    .find({ bornCountry: "United Kingdom", gender: "male" })
    .toArray();
  console.log(
    "\n\n============== query/structure.js  => Multiple Equality =============="
  );
  console.log(multiEq);
  console.log(
    "============== query/structure.js => Multiple Equality =============="
  );
};

module.exports = structure;
