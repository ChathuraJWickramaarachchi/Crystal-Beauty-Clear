import express from 'express'; //import expresss
import bodyParser from 'body-parser'; //import body-parser
import mongoose from 'mongoose'; //import mongoose
//import User from './models/user.js';
import userRoute from './routes/userRoute.js';

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

//connecting new router to the app
app.use("/user",userRoute);

//starting with initialzing port
app.listen(3000, ()=>{
    console.log("Server running on port 3000");
})