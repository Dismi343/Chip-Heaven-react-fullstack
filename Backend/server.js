import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import itemRoutes from "./routes/item.route.js";   


dotenv.config();
const app= express();

app.use(express.json());


app.use("/api/items", itemRoutes);
//console.log(process.env.MONGO_URL)

app.listen(5000,()=>{
    connectDB();
    console.log("Server started at http://localhost:5000")
});

//chip-he
//31J9W9bVv1Dg7WCf

//test
//KbR0jRL22dT8Bc4p