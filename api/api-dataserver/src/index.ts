import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import bodyParser from "body-parser";
import { userRouter } from "./routes/user-routes";
import { teamRouter } from "./routes/team-routes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(express.json());
app.use("/api/v1/users", userRouter);
app.use("/api/v1/teams", teamRouter);

//https://blog.logrocket.com/documenting-express-js-api-swagger/
const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Load-cache Doc manager API with Swagger",
      version: "0.1.0",
      description:
        "This is a simple CRUD API",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Loadcache",
        url: "https://loadcache.com",
        email: "loadcache@email.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./src/routes/*.ts"],
};

const specs = swaggerJSDoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, {
    explorer: true,
    // customCssUrl:
    //   "https://cdn.jsdelivr.net/npm/swagger-ui-themes@3.0.0/themes/3.x/theme-newspaper.css",
  })
);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});