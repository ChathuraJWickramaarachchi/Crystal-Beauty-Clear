import express from 'express'; //import expresss
import bodyParser from 'body-parser'; //import body-parser
import mongoose from 'mongoose'; //import mongoose
import User from './models/user.js';

//initializ the backend software to a variable
const app = express();

//mongodb connection setup 
mongoose.connect("mongodb+srv://chathura:chathura123@cluster0.eeqbvtb.mongodb.net/?appName=Cluster0").then(
    ()=>{
    console.log("Successfully connected with database");
    }
).catch(
    ()=>{
        console.log("Database connection failed");
    }
    
)

//declaring a middleware
app.use(bodyParser.json());

//handling get httpRequests
app.get("/",(req,res)=>{
    //geting saved user list
    User.find().then(
        (user)=>{
            res.json(user)
        }).catch(
            (req,res) =>{
                res.json({
                    "message": "Error occured!"
                })
            })
})

//handling post httpRequests
app.post("/",(req,res)=>{
 

    //declaring new user
    const user = new User(req.body);

    //saving user
    user.save().then(
        ()=>{
            res.json({
                "message": "user data saved successfully"
            })
        }
    ).catch(
            ()=>{
                res.json({
                    "message": "user data saving is failed"
                })
            }
        )
    })





//handling put httpRequests
app.put("/",(req,res)=>{
    console.log(res);
    console.log("Put request recieved");
    res.json({
        "message": "This is a put request."
    });
})

//handling delete httpRequests
app.delete("/",(req,res)=>{
    console.log(res);
    console.log("Delete request recieved.");
    res.json({
        "message": "This is a delete request."
    });
})

//starting with initialzing port
app.listen(3000, ()=>{
    console.log("Server running on port 3000");
})