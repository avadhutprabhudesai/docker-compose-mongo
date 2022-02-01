const { faker } = require("@faker-js/faker");

const cuisines = [
  "Thai",
  "Continental",
  "Medeterian",
  "Chinese",
  "Korean",
  "Indian",
  "South Indian",
  "Mongolian",
  "Sea food",
  "Vegan",
  "Barbequeue",
  "Vegetarian",
  "Bakery",
  "Italian",
  "Fast food",
  "Desserts",
];

const getRandomRating = (upperLimit) => {
  return Number((Math.random() * upperLimit).toPrecision(2));
};

const createRestaurants = (count) =>
  Array(count)
    .fill(1)
    .map(() => ({
      name: faker.address.cityName(),
      address: {
        street: faker.address.streetName(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        zip: faker.address.zipCode(),
        country: faker.address.country(),
        lat: faker.address.latitude(),
        long: faker.address.longitude(),
      },
      phone: faker.phone.phoneNumber(),
      cuisines: faker.random.arrayElements(cuisines),
      currency: faker.finance.currencyName(),
      costForTwo: faker.datatype.number(),
      hasBar: faker.datatype.boolean(),
      hasDelivery: faker.datatype.boolean(),
      deliveryRadius: Number((Math.random() * 10).toPrecision(2)),
      editorRating: {
        food: getRandomRating(5),
        service: getRandomRating(5),
        ambience: getRandomRating(5),
        overall: getRandomRating(5),
      },
      userReviews: [
        {
          name: faker.name.findName(),
          rating: getRandomRating(5),
          review: faker.lorem.sentences(3),
          comments: [
            {
              name: "John",
              comment: faker.lorem.sentence(),
              comments: [
                {
                  name: "Bob",
                  comment: faker.lorem.sentence(),
                },
                {
                  name: "Sully",
                  comment: faker.lorem.sentence(),
                },
              ],
            },
            {
              name: "Smith",
              comment: faker.lorem.sentence(),
              comments: [
                {
                  name: "Tony",
                  comment: faker.lorem.sentence(),
                },
              ],
            },
            {
              name: "Sam",
              comment: faker.lorem.sentence(),
              comments: [
                {
                  name: "Lewis",
                  comment: faker.lorem.sentence(),
                  comments: [
                    {
                      name: "Sam",
                      comment: faker.lorem.sentence(),
                    },
                    {
                      name: faker.name.firstName(),
                      comment: faker.lorem.sentence(),
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: faker.name.findName(),
          rating: getRandomRating(5),
          review: faker.lorem.sentences(2),
          comments: [
            {
              name: "John",
              comment: faker.lorem.sentence(),
            },
            {
              name: faker.name.firstName(),
              comment: faker.lorem.sentence(),
              comments: [
                {
                  name: "Bob",
                  comment: faker.lorem.sentence(),
                },
                {
                  name: "Sully",
                  comment: faker.lorem.sentence(),
                },
                {
                  name: "Tony",
                  comment: faker.lorem.sentence(),
                },
              ],
            },
            {
              name: "Sam",
              comment: faker.lorem.sentence(),
              comments: [
                {
                  name: "Lewis",
                  comment: faker.lorem.sentence(),
                  comments: [
                    {
                      name: faker.name.firstName(),
                      comment: faker.lorem.sentence(),
                    },
                  ],
                },
                {
                  name: "Sam",
                  comment: faker.lorem.sentence(),
                },
              ],
            },
          ],
        },
      ],
    }));

module.exports = {
  createRestaurants,
};
