const primitives = async (restaurants) => {
  await restaurants.updateOne(
    { name: "Conrad" },
    { $set: { name: "Lake Charles", costForTwo: 500 } }
  );

  await restaurants.updateMany(
    { hasDelivery: false },
    { $set: { deliveryRadius: 0.0 } }
  );
};

module.exports = primitives;
