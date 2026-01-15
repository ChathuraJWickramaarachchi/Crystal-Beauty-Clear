import express from 'express'; //import express
import { deleteUser, getUser, postUser, putUser } from '../userController/userController'; //importing  the functions in conroller files
const userRoute = express.Router(); //creating new router object

//get requests handler
userRoute.get("/",getUserser);

//post requests handler
userRoute.post("/",postUsertUser);

//put requests handler
userRoute.put("/",putUser);

//delete requests handler
userRoute.delete("/",deleteUser);

//export userRoute
export default userRoute;