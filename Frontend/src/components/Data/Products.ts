import ddr34 from "../../assets/prodcutimg/DDR3 4gb.jpeg";
import { Product } from "./ProductType";
import ddr44 from "../../assets/prodcutimg/DDR44.jpg";

export const Products: Product[] =[
    {
        id:1,
        title:"DDR3 4GB",
        price:1400,
        discription: "cxvv",
        category:"DDR3 RAM",
        img:ddr34,
        subcategories:["DDR3","4GB"]
    },
    {
        id:2,
        title:"DDR4 4GB",
        price:3200,
        discription: "cxvv",
        category:"DDR4 RAM",
        img:ddr44,
        subcategories:['DDR3','8GB']
    },
    {
        id:3,
        title:"DDR4 8GB",
        price:3200,
        discription: "cxvv",
        category:"DDR4 RAM",
        img:ddr44,
        subcategories:['DDR3','4GB']
    },
    {
        id:4,
        title:"DDR3 8GB",
        price:3200,
        discription: "cxvv",
        category:"DDR3 RAM",
        img:ddr44,
        subcategories:['DDR3','4GB']
    },
    {
        id:5,
        title:"4th Gen i3",
        price:3200,
        discription: "cxvv",
        category:"Processor",
        img:ddr44,
        subcategories:['DDR3','4GB']
    },
    {
        id:6,
        title:"3rd Gen i3",
        price:3200,
        discription: "cxvv",
        category:"Processor",
        img:ddr44,
        subcategories:['DDR3','4GB']
    },
]