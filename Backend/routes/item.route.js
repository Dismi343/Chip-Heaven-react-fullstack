import express from "express";

import { postitem,getitem,putitem,deleteitem } from "../controllers/item.controller.js";


const router= express.Router();

 router.post("/",postitem);
 
 router.get("/",getitem);
 
 router.put("/:id",putitem);
 
 router.delete("/:id",deleteitem);

export default router;