import Item from "../models/item.js";

//get requests hanler
export function getItem(req,res){
    Item.find().then(
        (Item)=>{
            res.json(Item);
        }   
     ).catch(
        ()=>{
            res.json({
                "message": "Error occured while retriving item data."
            })
        }
     )
}

//post requests hanler
export function saveItem(req,res){
    //create new saveable item object
    const item = new Item(req,res);

    //save the item data in db
    item.save().then(
        () =>{
            res.json({
                "message": "Item  data saved successfully."
            })
        }
    ).catch(
        ()=>{
            res.json({
                "message": "Error occured while saving ite data."
        })
        }
    )
} 