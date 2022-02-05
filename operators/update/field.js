const fieldUpdateOperators = async ({ restaurants }) => {
  /**
   *    - $currentDate
   *    - $inc
   *    - $set
   *    - $unset
   *    - $setOnInsert
   *    - $mul
   *    - $min
   *    - $max
   *    - $rename
   *    - $remove
   */

  console.log(
    "\n\n===================== operators/update/field.js $currentDate ====================="
  );
  await restaurants.updateMany(
    {},
    {
      $currentDate: {
        lastUpdated: { $type: "date" },
        lastInspected: { $type: "timestamp" },
      },
    }
  );
  console.log(
    "\n\n===================== operators/update/field.js $inc ====================="
  );
  await restaurants.updateMany(
    { name: "Alhambra" },
    {
      $inc: {
        "editorRating.overall": 2,
        "editorRating.safety": 2,
      },
    }
  );

  console.log(
    "\n\n===================== operators/update/field.js $min $max ====================="
  );
  await restaurants.updateMany(
    { name: "Alhambra" },
    {
      $min: {
        costForTwo: 500,
      },
      $max: {
        deliveryRadius: 5,
      },
    }
  );

  console.log(
    "\n\n===================== operators/update/field.js $mul ====================="
  );
  await restaurants.updateMany(
    { name: "Alhambra" },
    {
      $mul: {
        costForTwo: 2,
      },
    }
  );

  console.log(
    "\n\n===================== operators/update/field.js $rename ====================="
  );
  await restaurants.updateMany(
    {},
    {
      $rename: {
        phone: "contact",
      },
    }
  );

  console.log(
    "\n\n===================== operators/update/field.js $set ====================="
  );
  await restaurants.updateMany(
    { name: "Alhambra" },
    {
      $set: {
        phone: "123-456",
        mobile: "+1-111999888",
        "editorRating.overall": 3,
        "userReviews.0.rating": 2,
      },
    }
  );

  console.log(
    "\n\n===================== operators/update/field.js $setOnInsert ====================="
  );
  await restaurants.updateMany(
    { name: "Hyatt" },
    {
      $setOnInsert: {
        phone: "123-456",
        mobile: "+1-111999888",
        "editorRating.overall": 3,
        "userReviews.0.rating": 2,
      },
    },
    { upsert: true }
  );
};

module.exports = fieldUpdateOperators;
