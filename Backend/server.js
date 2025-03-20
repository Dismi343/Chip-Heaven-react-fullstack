import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import itemRoutes from "./routes/item.route.js";   
import cors from "cors";



dotenv.config();
const app= express();

app.use(express.json());

app.use(cors());

app.use("/api/items", itemRoutes);
//console.log(process.env.MONGO_URL)


app.get("/api/items", (req, res) => {
    res.json({ message: "CORS is working!" });
});


const PORT= process.env.PORT || 5000;
app.listen(PORT,()=>{
    connectDB();
    console.log("Server started at http://localhost:"+PORT);
});


//chip-he
//31J9W9bVv1Dg7WCf

//test
//KbR0jRL22dT8Bc4p