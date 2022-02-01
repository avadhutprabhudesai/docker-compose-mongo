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

function createExperiences() {
  return Array(
    faker.datatype.number({
      min: 0,
      max: 5,
    })
  )
    .fill(1)
    .map(() => ({
      title: faker.name.jobTitle(),
      company: faker.company.companyName(),
      location: {
        city: faker.address.city(),
        province: faker.address.state(),
        country: faker.address.country(),
      },
      startDate: faker.date.past(),
      endDate: faker.date.past(),
      durationInDays: faker.datatype.number({
        min: 1,
        max: 1000,
      }),
    }));
}

const schools = [
  "Massachusetts Institute of Technology",
  "Helsinki Universty",
  "London School of Economics",
  "Stanford School of Medicine",
  "Cambridge Institute of Technology",
];

const degrees = [
  "Bachelor of Science",
  "Bachelor of Arts",
  "Bachelor of Management",
  "Bachelor of Commerce",
  "Master of Science",
  "Master of Arts",
  "Master of Management",
  "Master of Commerce",
];

const fieldOfStudy = [
  "Medicine",
  "Computer Science",
  "Economics",
  "Politics",
  "Sports",
  "Literature",
];

function createEducation() {
  return Array(
    faker.datatype.number({
      min: 0,
      max: 3,
    })
  )
    .fill(1)
    .map(() => ({
      schoolName: faker.random.arrayElement(schools),
      degreeName: faker.random.arrayElement(degrees),
      fieldOfStudy: faker.random.arrayElement(fieldOfStudy),
      startDate: faker.date.past,
      endDate: faker.date.past,
      durationInDays: faker.datatype.number({
        min: 365,
        max: 900,
      }),
    }));
}

const skills = [
  {
    skillName: "Mobile Applications",
    endorsementCount: faker.datatype.number({
      min: 0,
      max: 100,
    }),
  },
  {
    skillName: "Software Development",
    endorsementCount: faker.datatype.number({
      min: 0,
      max: 100,
    }),
  },
  {
    skillName: "Cloud Computing",
    endorsementCount: faker.datatype.number({
      min: 0,
      max: 100,
    }),
  },
  {
    skillName: "Software Engineering",
    endorsementCount: faker.datatype.number({
      min: 0,
      max: 100,
    }),
  },
  {
    skillName: "Start-ups",
    endorsementCount: faker.datatype.number({
      min: 0,
      max: 100,
    }),
  },
  {
    skillName: "Agile Methodologies",
    endorsementCount: faker.datatype.number({
      min: 0,
      max: 100,
    }),
  },
  {
    skillName: "Product Management",
    endorsementCount: faker.datatype.number({
      min: 0,
      max: 100,
    }),
  },
  {
    skillName: "Web Applications",
    endorsementCount: faker.datatype.number({
      min: 0,
      max: 100,
    }),
  },
  {
    skillName: "Web Services",
    endorsementCount: faker.datatype.number({
      min: 0,
      max: 100,
    }),
  },
  {
    skillName: "Entrepreneurship",
    endorsementCount: faker.datatype.number({
      min: 0,
      max: 100,
    }),
  },
  {
    skillName: "User Experience",
    endorsementCount: faker.datatype.number({
      min: 0,
      max: 100,
    }),
  },
  {
    skillName: "Startups",
    endorsementCount: faker.datatype.number({
      min: 0,
      max: 100,
    }),
  },
  {
    skillName: "Strategy",
    endorsementCount: faker.datatype.number({
      min: 0,
      max: 100,
    }),
  },
  {
    skillName: "SaaS",
    endorsementCount: faker.datatype.number({
      min: 0,
      max: 100,
    }),
  },
  {
    skillName: "Open Source",
    endorsementCount: faker.datatype.number({
      min: 0,
      max: 100,
    }),
  },
  {
    skillName: "Linux",
    endorsementCount: faker.datatype.number({
      min: 0,
      max: 100,
    }),
  },
  {
    skillName: "C#",
    endorsementCount: faker.datatype.number({
      min: 0,
      max: 100,
    }),
  },
  {
    skillName: "Git",
    endorsementCount: faker.datatype.number({
      min: 0,
      max: 100,
    }),
  },
  {
    skillName: "AJAX",
    endorsementCount: faker.datatype.number({
      min: 0,
      max: 100,
    }),
  },
  {
    skillName: "jQuery",
    endorsementCount: faker.datatype.number({
      min: 0,
      max: 100,
    }),
  },
  {
    skillName: "Ruby",
    endorsementCount: faker.datatype.number({
      min: 0,
      max: 100,
    }),
  },
  {
    skillName: "Strategic Partnerships",
    endorsementCount: faker.datatype.number({
      min: 0,
      max: 100,
    }),
  },
  {
    skillName: "Leadership",
    endorsementCount: faker.datatype.number({
      min: 0,
      max: 100,
    }),
  },
  {
    skillName: "Management",
    endorsementCount: faker.datatype.number({
      min: 0,
      max: 100,
    }),
  },
];

function createProfiles(count) {
  return Array(count)
    .fill(1)
    .map(() => {
      return {
        profile: {
          fullName: faker.name.findName(),
          title: faker.name.jobTitle(),
          location: {
            city: faker.address.city(),
            province: faker.address.state(),
            country: faker.address.country(),
          },
        },
        experiences: createExperiences(),
        education: createEducation(),
        volunteerExperiences: [],
        skills: faker.random.arrayElements(skills, 5),
      };
    });
}

module.exports = { createProfiles };
