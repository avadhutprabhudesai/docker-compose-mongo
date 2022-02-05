const arrays = async (restaurants) => {
  // Match the first element of an array with $
  await restaurants.updateOne(
    { name: "Alhambra", "userReviews.rating": { $gt: 1 } },
    { $set: { "userReviews.$.rating": 3 } }
  );
  // Match all elements of an array with $[]
  await restaurants.updateOne(
    { hasBar: true, hasDelivery: false },
    { $set: { "userReviews.$[].rating": 5 } }
  );
  // Match specific elements of an array with $[filterItem]
  await restaurants.updateOne(
    { cuisines: { $in: ["Thai", "Chinese"] } },
    { $set: { "userReviews.$[positive].rating": 5 } },
    {
      arrayFilters: [
        {
          "positive.rating": { $gt: 3 },
        },
      ],
    }
  );
};

module.exports = arrays;
