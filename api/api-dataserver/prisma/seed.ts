// https://www.prisma.io/docs/orm/prisma-migrate/workflows/seeding
// npx prisma db seed
// npx prisma migrate dev --name init

import { db } from "../src/utils/db.server";
import { Team } from "./models/Team";
import { User } from "./models/User";

async function main() {
  await Promise.all(
    getUserSeed().map((user) => {
      db.user.upsert({
        where: { email: user.email },
        update: {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          mobileNumber: user.mobileNumber,
          countryCode: user.countryCode,
          gender: user.gender,
        },
        create: {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          mobileNumber: user.mobileNumber,
          countryCode: user.countryCode,
          gender: user.gender,
        },
      });
    })
  );
}

async function addUserSeed() {
  await Promise.all(
    getUserSeed().map((user) => {
      return db.user.upsert({
        where: { email: user.email },
        update: {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          mobileNumber: user.mobileNumber,
          countryCode: user.countryCode,
          gender: user.gender,
        },
        create: {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          mobileNumber: user.mobileNumber,
          countryCode: user.countryCode,
          gender: user.gender,
        },
      });
    })
  );
}
async function addTeamSeed() {
  await Promise.all(
    getTeamSeed().map((team) => {
      return db.team.upsert({
        where: { id: 1 },
        update: {
          title: team.title,
        },
        create: {
          title: team.title,
        },
      });
    })
  );
}
addTeamSeed()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
function getUserSeed(): Array<User> {
  return [
    {
      firstName: "Sarma",
      lastName: "Oruganti",
      email: "sarma-oruganti@lc.com",
      countryCode: "+91",
      mobileNumber: "8987878787",
    },
    {
      firstName: "Sufiyan",
      lastName: "Budye",
      email: "sufiyan-budye@lc.com",
      countryCode: "+91",
      mobileNumber: "8987878787",
    },
    {
      firstName: "Vishwa",
      lastName: "",
      email: "vishwa@lc.com",
      countryCode: "+91",
      mobileNumber: "8987878787",
    },
  ];
}

function getTeamSeed(): Array<Team> {
  return [
    {
      title: "Developer team",
    },
  ];
}
