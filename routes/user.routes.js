import {Router} from 'express';
import {getUser, getUsers} from "../controllers/user.controller.js";
import authorize from "../middlewares/auth.middlewares.js";

const userRoutes = Router();

userRoutes.get('/', getUsers);

userRoutes.get('/:id', authorize, getUser);

userRoutes.post('/', (req, res) => res.send({title: "create the user"}));

userRoutes.put('/:id', (req, res) => res.send({title: "changes the user"}));

userRoutes.delete('/:id', (req, res) => res.send({title: "deletes the user"}));

export default userRoutes;