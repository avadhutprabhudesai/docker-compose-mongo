const projection = async ({ profiles }) => {
  /**
   *  - Specified field and _id
   *  - Supress _id
   *  - Return all but excluded fields
   *  - Specific fields in embedded docs
   *  - Projection on fields of embedded doc in Array
   *  - Projection specific fields in the Array
   */
  console.log(
    "\n\n============== projection/index.js => Specified field and _id =============="
  );
  console.log(
    await profiles
      .find({})
      .project({
        profile: 1,
        skills: 1,
        experiences: 1,
      })
      .toArray()
  );
  console.log(
    "\n\n============== projection/index.js => Specified field and _id =============="
  );

  console.log(
    "\n\n============== projection/index.js => Suppress _id =============="
  );
  console.log(
    await profiles
      .find({})
      .project({
        profile: 1,
        skills: 1,
        experiences: 1,
        _id: 0,
      })
      .toArray()
  );
  console.log(
    "\n\n============== projection/index.js => Suppress _id =============="
  );

  console.log(
    "\n\n============== projection/index.js => Exclude fields =============="
  );
  console.log(
    await profiles
      .find({})
      .project({
        volunteerExperiences: 0,
        education: 0,
        _id: 0,
      })
      .toArray()
  );
  console.log(
    "\n\n============== projection/index.js => Exclude fields =============="
  );

  console.log(
    "\n\n============== projection/index.js => Return specific fields from Embdedded document =============="
  );
  console.log(
    JSON.stringify(
      await profiles
        .find({})
        .project({
          profiles: 1,
          experiences: {
            title: 1,
            company: 1,
          },
        })
        .limit(1)
        .toArray()
    )
  );
  console.log(
    "\n\n============== projection/index.js => Return specific fields from Embdedded document =============="
  );

  console.log(
    "\n\n============== projection/index.js => Suppress specific fields from Embdedded document =============="
  );
  console.log(
    JSON.stringify(
      await profiles
        .find({})
        .project({
          experiences: {
            title: 0,
            company: 0,
          },
        })
        .limit(1)
        .toArray()
    )
  );
  console.log(
    "\n\n============== projection/index.js => Suppress specific fields from Embdedded document =============="
  );

  console.log(
    "\n\n============== projection/index.js => Project specific elements in the returned array =============="
  );
  console.log(
    await profiles
      .find({})
      .project({
        experiences: {
          $slice: 1,
        },
      })
      .limit(1)
      .toArray()
  );
  console.log(
    "\n\n============== projection/index.js => Project specific elements in the returned array =============="
  );
};

module.exports = projection;
