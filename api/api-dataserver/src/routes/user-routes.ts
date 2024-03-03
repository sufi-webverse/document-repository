import express, { Express, Request, Response } from "express";
export const userRouter = express.Router();
import { db } from "../utils/db.server";
import { Users } from "../utils/data";

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

userRouter.get("/", async function (req, res) {
    const users = await db.user.findMany({
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true
      }
    })
    res.status(200).json(users);
});

userRouter.get("/:id", function (req, res) {
  let User = Users.find(function (item: any) {
    return item.id == req.params.id;
  });

  User ? res.status(200).json(User) : res.sendStatus(404);
});

userRouter.post("/", function (req, res) {
  const { title, author, finished } = req.body;

  let User = {
    id: Users.length + 1,
    title: title,
    author: author,
    finished: finished !== undefined ? finished : false,
    createdAt: new Date(),
  };

  Users.push(User);

  res.status(201).json(User);
});

userRouter.put("/:id", function (req, res) {
  let User = Users.find(function (item: any) {
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

    Users.splice(Users.indexOf(User), 1, updated);

    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
});

userRouter.delete("/:id", function (req, res) {
  let User = Users.find(function (item: any) {
    return item.id == req.params.id;
  });

  if (User) {
    Users.splice(Users.indexOf(User), 1);
  } else {
    return res.sendStatus(404);
  }

  res.sendStatus(204);
});
