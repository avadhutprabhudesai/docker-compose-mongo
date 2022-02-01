const arrayEmbeddedDocs = async (profiles) => {
  /**
   *  - Entire embedded document
   *  - Field of an embedded document
   *  - Array index
   *  - Single embedded doc satisfying criteria
   *  - Single field having multiple criteria
   *  - Multiple fields having single criteria
   */
  console.log(
    "\n\n============== query/array-embedded-docs.js => Entire embedded document =============="
  );
  const mgmtSkill = await profiles
    .find({
      skills: { skillName: "Management", endorsementCount: 47 },
    })
    .toArray();
  console.log(mgmtSkill);
  console.log(
    "\n\n============== query/array-embedded-docs.js => Entire embedded document =============="
  );

  console.log(
    "\n\n============== query/array-embedded-docs.js => Field of an embedded document =============="
  );
  const exceptionalSkills = await profiles
    .find({
      "skills.endorsementCount": { $gt: 80 },
    })
    .toArray();
  console.log(exceptionalSkills);
  console.log(
    "\n\n============== query/array-embedded-docs.js => Field of an embedded document =============="
  );

  console.log(
    "\n\n============== query/array-embedded-docs.js => Array index =============="
  );
  const moreThanAYear = await profiles
    .find({
      "experiences.0.durationInDays": { $lt: 365 },
    })
    .toArray();
  console.log(moreThanAYear);
  console.log(
    "\n\n============== query/array-embedded-docs.js => Array index =============="
  );

  console.log(
    "\n\n============== query/array-embedded-docs.js => Single embedded docuent that satisfies criteria =============="
  );
  const mismatch = await profiles
    .find({
      education: {
        $elemMatch: {
          schoolName: "London School of Economics",
          fieldOfStudy: "Literature",
        },
      },
    })
    .toArray();
  console.log(mismatch);
  console.log(
    "\n\n============== query/array-embedded-docs.js => Single embedded docuent that satisfies criteria =============="
  );

  console.log(
    "\n\n============== query/array-embedded-docs.js => Single field having multiple criterias =============="
  );
  const lessThan1 = await profiles
    .find({
      "experiences.durationInDays": { $gt: 365, $lt: 500 },
    })
    .toArray();
  console.log(lessThan1);
  console.log(
    "\n\n============== query/array-embedded-docs.js => Single field having multiple criterias =============="
  );
};

module.exports = arrayEmbeddedDocs;
