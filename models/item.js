import mongoose from 'mongoose'; //import mongoose
//create a schema
const itemSchema = mongoose.Schema({
    name: String,
    value: Number,
    description: String
})

//declarinng new model
const Item = mongoose.model("Item", itemSchema);

//export the model
export default Item;