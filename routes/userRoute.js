import express from 'express'; //import express
const userRoute = express.Router(); //creating new router object

//get requests handler
userRoute.get("/",getUser);

//post requests handler
userRoute.post("/",postUser);

//put requests handler
userRoute.put("/",putUser);

//delete requests handler
userRoute.delete("/",deleteUser);

//export userRoute
export default userRoute;