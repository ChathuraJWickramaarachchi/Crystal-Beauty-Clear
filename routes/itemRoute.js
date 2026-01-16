import express from 'express'; //import express
import { getItem, saveItem } from '../Controller/itemController';

//create new router object
const itemRouter = express.Router();

itemRouter.get("/",getItem);
itemRouter.post("/",saveItem);

//export itemRouter
export default itemRouter;