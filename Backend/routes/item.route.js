import express from "express";

import { postitem,getitem,putitem,deleteitem } from "../controllers/item.controller.js";
import fileUpload from "express-fileupload";

const router= express.Router();

 router.post("/",fileUpload(),postitem);
 
 router.get("/",getitem);
 
 router.put("/:id",fileUpload(),putitem);
 
 router.delete("/:id",deleteitem);

export default router;