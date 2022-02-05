const embedded = async (restaurants) => {
  await restaurants.updateMany(
    { hasBar: true },
    {
      $set: {
        "address.state": "Hawaii",
      },
    }
  );
  await restaurants.updateOne(
    { name: "Lake Charles" },
    {
      $set: {
        "userReviews.0.name": "Bob Marsh",
      },
    }
  );
};

module.exports = embedded;
