import { Router } from "express";
import UserController from "./users.controller.js";
const UserRouter=new Router();
UserRouter.get('/',UserController.getRegister);
UserRouter.put('/',UserController.addUser);// this will sign up the user 
UserRouter.get('/login',UserController.getLogin);
UserRouter.post('/login',UserController.signin);
UserRouter.post('/update',UserController.updateUser);
export default UserRouter;