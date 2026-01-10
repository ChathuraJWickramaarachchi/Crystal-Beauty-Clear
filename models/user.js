   import mongoose from 'mongoose'; //import mongoose

   //saving user data to db
    const userSchema = new mongoose.Schema({
        name: String,
        age: Number,
        city : String
    })
    //declaring new  model
    const userModel = new mongoose.model("user",userSchema);

    //export userModel
    export default userModel;
