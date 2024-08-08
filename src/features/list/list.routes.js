import { Router } from "express";
import ListController from "./list.controller.js";
const ListRouter=new Router();
ListRouter.get('/',ListController.get)
ListRouter.post('/byid',ListController.getById);//here we are responding with the tem found from the id
ListRouter.put('/',ListController.add)
ListRouter.delete('/',ListController.delete);
ListRouter.post('/',ListController.update);
ListRouter.post('/imp',ListController.addToImportant);
ListRouter.put('/imp',ListController.checkImp);
ListRouter.get('/tags',ListController.getTags);
export default ListRouter