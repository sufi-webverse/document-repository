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
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
exports.userRouter = express_1.default.Router();
const db_server_1 = require("../utils/db.server");
const data_1 = require("../utils/data");
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - title
 *         - author
 *         - finished
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the User
 *         title:
 *           type: string
 *           description: The title of your User
 *         author:
 *           type: string
 *           description: The User author
 *         finished:
 *           type: boolean
 *           description: Whether you have finished reading the User
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the User was added
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
 *   name: Users
 *   description: The Users managing API
 * /Users:
 *   get:
 *     summary: Lists all the Users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: The list of the Users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *   post:
 *     summary: Create a new User
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: The created User.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 * /Users/{id}:
 *   get:
 *     summary: Get the User by id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The User id
 *     responses:
 *       200:
 *         description: The User response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: The User was not found
 *   put:
 *    summary: Update the User by the id
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The User id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/User'
 *    responses:
 *      200:
 *        description: The User was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      404:
 *        description: The User was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the User by id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The User id
 *
 *     responses:
 *       200:
 *         description: The User was deleted
 *       404:
 *         description: The User was not found
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - title
 *         - author
 *         - finished
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the User
 *         title:
 *           type: string
 *           description: The title of your User
 *         author:
 *           type: string
 *           description: The User author
 *         finished:
 *           type: boolean
 *           description: Whether you have finished reading the User
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the User was added
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
 *   name: Users
 *   description: The Users managing API
 * /Users:
 *   get:
 *     summary: Lists all the Users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: The list of the Users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *   post:
 *     summary: Create a new User
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: The created User.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 * /Users/{id}:
 *   get:
 *     summary: Get the User by id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The User id
 *     responses:
 *       200:
 *         description: The User response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: The User was not found
 *   put:
 *    summary: Update the User by the id
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The User id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/User'
 *    responses:
 *      200:
 *        description: The User was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      404:
 *        description: The User was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the User by id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The User id
 *
 *     responses:
 *       200:
 *         description: The User was deleted
 *       404:
 *         description: The User was not found
 */
exports.userRouter.get("/", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield db_server_1.db.user.findMany({
            select: {
                id: true,
                firstName: true,
                lastName: true,
                email: true
            }
        });
        res.status(200).json(users);
    });
});
exports.userRouter.get("/:id", function (req, res) {
    let User = data_1.Users.find(function (item) {
        return item.id == req.params.id;
    });
    User ? res.status(200).json(User) : res.sendStatus(404);
});
exports.userRouter.post("/", function (req, res) {
    const { title, author, finished } = req.body;
    let User = {
        id: data_1.Users.length + 1,
        title: title,
        author: author,
        finished: finished !== undefined ? finished : false,
        createdAt: new Date(),
    };
    data_1.Users.push(User);
    res.status(201).json(User);
});
exports.userRouter.put("/:id", function (req, res) {
    let User = data_1.Users.find(function (item) {
        return item.id == req.params.id;
    });
    if (User) {
        const { title, author, finished } = req.body;
        let updated = {
            id: User.id,
            title: title !== undefined ? title : User.title,
            author: author !== undefined ? author : User.author,
            finished: finished !== undefined ? finished : User.finished,
            createdAt: User.createdAt,
        };
        data_1.Users.splice(data_1.Users.indexOf(User), 1, updated);
        res.sendStatus(204);
    }
    else {
        res.sendStatus(404);
    }
});
exports.userRouter.delete("/:id", function (req, res) {
    let User = data_1.Users.find(function (item) {
        return item.id == req.params.id;
    });
    if (User) {
        data_1.Users.splice(data_1.Users.indexOf(User), 1);
    }
    else {
        return res.sendStatus(404);
    }
    res.sendStatus(204);
});
