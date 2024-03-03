"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const body_parser_1 = __importDefault(require("body-parser"));
const user_routes_1 = require("./routes/user-routes");
const team_routes_1 = require("./routes/team-routes");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.urlencoded({
    extended: true,
}));
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
app.use("/api/v1/users", user_routes_1.userRouter);
app.use("/api/v1/teams", team_routes_1.teamRouter);
//https://blog.logrocket.com/documenting-express-js-api-swagger/
const options = {
    definition: {
        openapi: "3.1.0",
        info: {
            title: "Load-cache Doc manager API with Swagger",
            version: "0.1.0",
            description: "This is a simple CRUD API",
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
const specs = (0, swagger_jsdoc_1.default)(options);
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(specs, {
    explorer: true,
    // customCssUrl:
    //   "https://cdn.jsdelivr.net/npm/swagger-ui-themes@3.0.0/themes/3.x/theme-newspaper.css",
}));
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
