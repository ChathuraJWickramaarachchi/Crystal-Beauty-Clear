import express from 'express'; //import expresss
import bodyParser from 'body-parser'; //impport body-parser


//initializ the backend software to a variable
let app = express();

//declaring a middleware
app.use(bodyParser.json());

//handling get httpRequests
app.get("/",(req,res)=>{
    console.log(res);
    console.log("Get request recieved");
    res.json({
        "message": "Success"
    });
})

//handling post httpRequests
app.post("/",(req,res)=>{
    console.log(res)
    console.log("Post request recieved");
    res.json({
        "message": "This is a post httpRequest."
    });
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