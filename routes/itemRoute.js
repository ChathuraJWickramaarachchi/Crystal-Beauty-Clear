import express from 'express'; //import express
import { getItem, goodItems, saveItem, searchItems } from '../Controller/itemController.js';
import Item from '../models/item.js';

//create new router object
const itemRouter = express.Router();

itemRouter.get("/",getItem);
itemRouter.post("/",saveItem);
itemRouter.get("/good",goodItems);
itemRouter.get("/:name",searchItems);

//export itemRouter
export default itemRouter;