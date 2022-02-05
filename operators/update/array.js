const arrayUpdateOperators = async ({ profiles, students, positions }) => {
  /**
   *    - $addToSet
   *    - $pop
   *    - $pull
   *    - $push
   *    - $pullAll
   *    - $each
   *    - $position
   *    - $slice
   *    - $sort
   */

  /**
   * $addToSet
   *    - field does not exist
   *    - field is not an array
   *    - value exists already
   *    - value is an array
   *    - value is a document: If a document with same field and same order exists, then skip, else add
   *    - with $each modifier
   *
   */
  console.log(
    "\n\n===================== operators/update/array.js $addToSet ====================="
  );
  console.log("-------------- field does not exist");
  await students.updateMany(
    {},
    {
      $addToSet: {
        friends: "John",
      },
    }
  );
  console.log("-------------- value exists already");
  await students.updateMany(
    {},
    {
      $addToSet: {
        friends: "John",
      },
    }
  );
  console.log("-------------- value is an array");

  await students.updateMany(
    {},
    {
      $addToSet: {
        friends: { $each: ["Smith", "Bob"] },
      },
    }
  );

  console.log("-------------- with $each modified");

  await students.updateMany(
    {},
    {
      $addToSet: {
        friends: { $each: ["Sam", "Brian"] },
      },
    }
  );

  console.log(
    "\n\n===================== operators/update/array.js $pop ====================="
  );

  await students.updateMany(
    {},
    {
      $pop: {
        friends: 1,
      },
    }
  );

  await students.updateMany(
    {},
    {
      $pop: {
        friends: -1,
      },
    }
  );
  console.log(
    "\n\n===================== operators/update/array.js $pull ====================="
  );
  // Remove all elements that match a value
  await students.updateOne(
    { firstName: "Ronaldo" },
    {
      $pull: {
        majors: "Spanish",
      },
    }
  );
  // Remove all elements that match a condition
  await students.updateOne(
    { firstName: "Ronaldo" },
    {
      $pull: {
        examScores: { $lt: 30 },
      },
    }
  );
  // Remove items from array of documents
  await profiles.updateOne(
    { "profile.fullName": "Kendra Ullrich" },
    {
      $pull: {
        skills: { skillName: "Management", endorsementCount: 47 }, // There should a single elememt in an array that matches all conditions
      },
    }
  );
  // Remove items from nested arrays
  await positions.updateMany(
    { position: "Angular developer" },
    {
      $pull: { profiles: { companies: { $elemMatch: { $eq: "Linkbuzz" } } } },
    }
  );

  console.log(
    "\n\n===================== operators/update/array.js $push ====================="
  );

  // append a value to an array
  await students.updateOne(
    {},
    {
      $push: { minors: "Chemistry" },
    }
  );

  // $push with $each, $sort, $slice
  await profiles.updateOne(
    {},
    {
      $push: {
        skills: {
          $each: [
            { skillName: "NodeJS", endorsementCount: 100 },
            { skillName: "ReactJS", endorsementCount: 99 },
          ],
          $sort: {
            endorsementCount: -1,
          },
          $slice: 3,
        },
      },
    }
  );
  console.log(
    "\n\n===================== operators/update/array.js $pullAll ====================="
  );
  await students.updateOne(
    {},
    {
      $pullAll: { examScores: [22, 100] },
    }
  );
  console.log(
    "\n\n===================== operators/update/array.js $each ====================="
  );
  // with $addToSet
  await students.updateOne(
    {},
    {
      $addToSet: { examScores: { $each: [33, 56, 24] } },
    }
  );
  await students.updateOne(
    {},
    {
      $push: { examScores: { $each: [100, 100] } },
    }
  );
  // with $push
  console.log(
    "\n\n===================== operators/update/array.js $position ====================="
  );
  // with $push
  await students.updateOne(
    {},
    {
      $push: { examScores: { $each: [500], $position: 0 } },
    }
  );

  console.log(
    "\n\n===================== operators/update/array.js $slice ====================="
  );
  // with $each blank
  await students.updateOne(
    {},
    {
      $push: { majors: { $each: [], $slice: 3 } },
    }
  );

  // with $each
  await students.updateOne(
    {},
    {
      $push: {
        majors: { $each: ["German", "Japanese"], $position: 0, $slice: 3 },
      },
    }
  );

  console.log(
    "\n\n===================== operators/update/array.js $sort ====================="
  );
  // primitives
  await students.updateOne(
    {},
    {
      $push: {
        friends: { $each: ["Robin", "Steve"], $sort: 1 },
      },
    }
  );
  // sort by entire document
  await profiles.updateOne(
    {},
    {
      $push: {
        skills: { $each: [], $sort: 1 },
      },
    }
  );
  // sort by a field in the document
  await profiles.updateOne(
    { "profile.fullName": "Michelle Goyette" },
    {
      $push: {
        skills: { $each: [], $sort: { endorsementCount: 1 } },
      },
    }
  );
};

module.exports = arrayUpdateOperators;
