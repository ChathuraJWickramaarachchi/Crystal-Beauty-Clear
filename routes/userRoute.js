import express from 'express'; //import express
const userRoute = express.Router(); //creating new router object

//get requests handler
userRoute.get("/",(req,res)=>{
    //response
    res.json({
        "message": "Get request found."
    })
})

//post requests handler
userRoute.post("/",(req,res)=>{
    //response
    res.json({
        "message": "post request found."
    })
})

//export userRoute
export default userRoute;