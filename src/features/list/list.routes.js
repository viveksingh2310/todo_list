import { Router } from "express";
import ListController from "./list.controller.js";
const ListRouter=new Router();
ListRouter.get('/',ListController.get)
ListRouter.put('/',ListController.add)
ListRouter.delete('/',ListController.delete);
ListRouter.post('/',ListController.update);
ListRouter.post('/imp',ListController.addToImportant);
ListRouter.put('/imp',ListController.checkImp);
export default ListRouter