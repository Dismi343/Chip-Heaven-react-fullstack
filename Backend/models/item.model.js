import mongoose, { mongo } from "mongoose";

const itemschema= new mongoose.Schema({
    itemid:{
      type:Number,
      required:true  
    },
    title:{
        type: String,
        required:true
    },  
    price:{
        type: Number,
        required:true
    },
    discription: {
        type: String,
        required:true
    },
    category:{
        type: String,
        required:true
    },
    img:{
        type: String,
        required:true
    },
    subcategories:{
        type:[String],
        required:true
    },
    stock:{
        type:Number,
        required:true
    }
});

const Item= mongoose.model('Item',itemschema);
export default Item;