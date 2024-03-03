"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.teamRouter = void 0;
const express_1 = __importDefault(require("express"));
exports.teamRouter = express_1.default.Router();
const db_server_1 = require("../utils/db.server");
/**
 * @swagger
 * components:
 *   schemas:
 *     team:
 *       type: object
 *       required:
 *         - title
 *         - author
 *         - finished
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the team
 *         title:
 *           type: string
 *           description: The title of your team
 *         author:
 *           type: string
 *           description: The team author
 *         finished:
 *           type: boolean
 *           description: Whether you have finished reading the team
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the team was added
 *       example:
 *         id: d5fE_asz
 *         title: The New Turing Omnibus
 *         author: Alexander K. Dewdney
 *         finished: false
 *         createdAt: 2020-03-10T04:05:06.157Z
 */
/**
 * @swagger
 * tags:
 *   name: teams
 *   description: The teams managing API
 * /api/v1/teams:
 *   get:
 *     summary: Lists all the teams
 *     tags: [teams]
 *     responses:
 *       200:
 *         description: The list of the teams
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/team'
 *   post:
 *     summary: Create a new team
 *     tags: [teams]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/team'
 *     responses:
 *       200:
 *         description: The created team.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/team'
 *       500:
 *         description: Some server error
 * /api/v1/teams/{id}:
 *   get:
 *     summary: Get the team by id
 *     tags: [teams]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The team id
 *     responses:
 *       200:
 *         description: The team response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/team'
 *       404:
 *         description: The team was not found
 *   put:
 *    summary: Update the team by the id
 *    tags: [teams]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The team id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/team'
 *    responses:
 *      200:
 *        description: The team was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/team'
 *      404:
 *        description: The team was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the team by id
 *     tags: [teams]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The team id
 *
 *     responses:
 *       200:
 *         description: The team was deleted
 *       404:
 *         description: The team was not found
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     team:
 *       type: object
 *       required:
 *         - title
 *         - author
 *         - finished
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the team
 *         title:
 *           type: string
 *           description: The title of your team
 *         author:
 *           type: string
 *           description: The team author
 *         finished:
 *           type: boolean
 *           description: Whether you have finished reading the team
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the team was added
 *       example:
 *         id: d5fE_asz
 *         title: The New Turing Omnibus
 *         author: Alexander K. Dewdney
 *         finished: false
 *         createdAt: 2020-03-10T04:05:06.157Z
 */
/**
 * @swagger
 * tags:
 *   name: teams
 *   description: The teams managing API
 * /api/v1/teams:
 *   get:
 *     summary: Lists all the teams
 *     tags: [teams]
 *     responses:
 *       200:
 *         description: The list of the teams
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/team'
 *   post:
 *     summary: Create a new team
 *     tags: [teams]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/team'
 *     responses:
 *       200:
 *         description: The created team.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/team'
 *       500:
 *         description: Some server error
 * /api/v1/teams/{id}:
 *   get:
 *     summary: Get the team by id
 *     tags: [teams]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The team id
 *     responses:
 *       200:
 *         description: The team response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/team'
 *       404:
 *         description: The team was not found
 *   put:
 *    summary: Update the team by the id
 *    tags: [teams]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The team id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/team'
 *    responses:
 *      200:
 *        description: The team was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/team'
 *      404:
 *        description: The team was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the team by id
 *     tags: [teams]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The team id
 *
 *     responses:
 *       200:
 *         description: The team was deleted
 *       404:
 *         description: The team was not found
 */
exports.teamRouter.get("/", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const list = yield db_server_1.db.team.findMany({
            select: {
                id: true,
                title: true,
            },
        });
        res.status(200).json(list);
    });
});
exports.teamRouter.get("/:id", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let obj = yield db_server_1.db.team.findUnique({
            where: {
                id: Number(req.params.id),
            },
        });
        obj ? res.status(200).json(obj) : res.sendStatus(404);
    });
});
exports.teamRouter.post("/", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { title, description } = req.body;
        const obj = yield db_server_1.db.team.create({
            data: {
                title,
                description,
                createdAt: new Date(),
            },
        });
        res.status(201).json(obj);
    });
});
