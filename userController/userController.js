//get requests hanler
export function getUser(req,res){
    //response
    res.json({
        "message": "Read user details."
    })
}

//post requests hanler
export function postUser(req,res){
    //response
    res.json({
        "message": "saved user details."
    })
}

//put requests hanler
export function putUser(req,res){
    //response
    res.json({
        "message": "updated user details."
    })
}

//delete requests hanler
export function deleteUser(req,res){
    //response
    res.json({
        "message": "deleted user details."
    })
}