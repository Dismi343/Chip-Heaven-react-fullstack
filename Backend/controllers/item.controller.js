import mongoose from "mongoose";
import Item from "../models/item.model.js";

export const postitem= async (req,res)=>{
    const item =req.body;
 if(!item.itemid || !item.title||!item.price || !item.discription || !item.category ){
     return res.status(400).json({success:false, message:"please provide all feilds"})
 }
 const newItem= new Item(item);
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

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false, message:"invalide data"});
    }

    try{
        const updatedproduct =  await Item.findByIdAndUpdate(id, item, {new:true});
     res.status(200).json({success:true,data:updatedproduct});
    }catch(error){
        res.status(500).json({success:false,message:error});
    }
    };

    export const deleteitem=async(req,res)=>{
     
             const{id}= req.params;
     
             try{
                 await Item.findByIdAndDelete(id);
                 res.status(200).json({success:true, message:"Product deleted succefully"});
             }
             catch(error){
                 res.status(400).json({success:false,message: error});
             }
     };