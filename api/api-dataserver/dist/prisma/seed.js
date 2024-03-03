"use strict";
// https://www.prisma.io/docs/orm/prisma-migrate/workflows/seeding
// npx prisma db seed
// npx prisma migrate dev --name init
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_server_1 = require("../src/utils/db.server");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield Promise.all(getUserSeed().map((user) => {
            db_server_1.db.user.upsert({
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
        }));
    });
}
function addUserSeed() {
    return __awaiter(this, void 0, void 0, function* () {
        yield Promise.all(getUserSeed().map((user) => {
            return db_server_1.db.user.upsert({
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
        }));
    });
}
function addTeamSeed() {
    return __awaiter(this, void 0, void 0, function* () {
        yield Promise.all(getTeamSeed().map((team) => {
            return db_server_1.db.team.upsert({
                where: { id: 1 },
                update: {
                    title: team.title,
                },
                create: {
                    title: team.title,
                },
            });
        }));
    });
}
addTeamSeed()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    yield db_server_1.db.$disconnect();
}))
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.error(e);
    yield db_server_1.db.$disconnect();
    process.exit(1);
}));
function getUserSeed() {
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
function getTeamSeed() {
    return [
        {
            title: "Developer team",
        },
    ];
}
