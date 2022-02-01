const { faker } = require("@faker-js/faker");

const subjects = [
  "History",
  "Maths",
  "Science",
  "Economics",
  "Geography",
  "French",
  "Spanish",
];

const departments = [
  "Engineering",
  "Management",
  "Commerce",
  "Fine arts",
  "Literature",
];

function createStudents(count) {
  return Array(count)
    .fill(1)
    .map(() => {
      return {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        majors: faker.random.arrayElements(subjects, 4),
        minors: faker.random.arrayElements(subjects, 2),
        department: faker.random.arrayElement(departments),
        city: faker.address.city(),
        username: faker.internet.userName(),
        country: faker.address.countryCode(),
        score: Number((Math.random() * 100).toPrecision(3)),
        examScores: [
          faker.datatype.number({ min: 10, max: 100 }),
          faker.datatype.number({ min: 10, max: 100 }),
          faker.datatype.number({ min: 10, max: 100 }),
          faker.datatype.number({ min: 10, max: 100 }),
          faker.datatype.number({ min: 10, max: 100 }),
        ],
      };
    });
}

module.exports = { createStudents };
