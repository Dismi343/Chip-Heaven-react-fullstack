import mongoose from "mongoose";
import Item from "../models/item.model.js";
import { v4 as uuidv4 } from 'uuid';
// const {putObejct} = require("../util/putObject.js");
import { putObject } from "../util/putObject.js";

export const postitem= async (req,res)=>{
   // const item =req.body;
    const {itemid, title, price, discription, category, stock, subcategories}= req.body;
    const file= req.files;
    const fileName = "/"+uuidv4();
    if(!req.files || !req.files.img){
        return res.status(400).json({success:false, message:"please provide all feilds"})
    }



 //let url,key;
// object cloud upload
console.log('Received body:', req.body);
console.log('Received file:', req.files);
const {url,key} = await putObject(file,fileName);

const s3Response = await s3.upload(params).promise();
const imgurl = s3Response.Location;

//  


if(!imgurl ){
    return res.status(400).json({
        sucess:false,
        message:"Image is not uploaded"
    });
}

//  const newItem= new Item(item);

const CreateNewItem= 
{
    itemid: req.body.itemid,
    title: req.body.title,
    price: req.body.price,
    description: req.body.discription,
    category: req.body.category,
    stock: req.body.stock,
    subcategories: req.body.subcategories,
    imgurl,  // Store the URL of the image
};

const newItem=await Item.create(CreateNewItem);

 try{
     await newItem.save();
     res.status(201).json({success:true, data:newItem});
 }
 catch(error){
     console.log("Error in creattin item", error.message);
     res.status(500).json({success:false ,message:"server error"});
 }
 };

 export const getitem= async (req,res)=>{
     try {
      const items=await Item.find({});
      res.status(200).json({success:true,data:items});
      }catch(error){
          res.status(500).json({success:false,message:error});
      }
  
  };

  export const putitem=async(req,res)=>{
    const {id}=req.params;
    const item=req.body;
    const {file}= req.files;

    

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false, message:"invalide data"});
    }

    let data;
    // update files
    //

    try{
        const updatedproduct =  await Item.findByIdAndUpdate(id, item, {img:data.url,new:true});
     res.status(200).json({success:true,data:updatedproduct});
    }catch(error){
        res.status(500).json({success:false,message:error});
    }
    };

    export const deleteitem=async(req,res)=>{
     
             const{id}= req.params;
             if(!mongoose.Types.ObjectId.isValid(id)){
                return res.status(404).json({success:false, message:"Item not available"});
            }
             try{
                 await Item.findByIdAndDelete(id);
                 res.status(200).json({success:true, message:"Product deleted succefully"});

                 // Delete object from cloud



                 //
               
             }
             catch(error){
                 res.status(500).json({success:false,message: error});
             }
     };