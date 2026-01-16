import mongoose from 'mongoose'; //import mongoose
//create a schema
const itemShema = mongoose.Schema({
    name: String,
    value: Number,
    description: String
})

//declarinng new model
const Item = mongoose.modeel("Item", itemShema);

//export the model
export default Item;