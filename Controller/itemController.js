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
                "message": "Item data saved successfully."
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

export function goodItems(req,res){
    res.json({
        "message": "Good Item"
    })
}

//search Items by name
export function searchItems(req,res){
    //const itemName = req.body.name;
    //getting name by url
    const itemName = req.params.name;
    Item.find(
        {
            name : itemName
        }
    ).then(
        (items)=>{
            res.json(items)
        }
    ).catch(
        ()=>{
            res.json({
                "message": "Error"
            })
        }
    )

}