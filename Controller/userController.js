import User from "../models/user"

//get requests hanler
export function getUser(req,res){
    //response
    res.json({
        "message": "Read user details."
    })
}

//post requests hanler
export function postUser(req,res){
    User.find().then(
        (User) =>{
            res.json(User);
        }
    ).catch(
        ()=>{
            res.json({
                "message": "Error occured while retriving user  data."
            })
        }
    )
}

//put requests hanler
export function putUser(req,res){
    //create new user object
    const newUser = new User(req.body);
    //save user data to db
   User.save().then(
   ()=>{
    res.json({
        "message": "User details are saved successfully."
    })
    }).catch(
        ()=>{
            res.json({
                "message": "error occured while saving user data."
            })
        }
    )
   }
   


//delete requests hanler
export function deleteUser(req,res){
    //response
    res.json({
        "message": "deleted user details."
    })
}