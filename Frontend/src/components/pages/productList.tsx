import { Item } from "../Data/ProductType"; 
import { useEffect, useState } from "react";
import {fetchItems} from "../Utils/api";

//import { ListItem } from "@mui/material";



const ProductList: React.FC = () => {

    
       const [items, setItems] = useState<Item[]>([])    
        const[isOpen,setIsOpen]=useState(false);
        const [selectedCategory,setSelectedCategory]=useState<string | null>(null);
        const categories= Array.from(new Set(items.map(item => item.category)));
        const [textVisible,setTextvisible]=useState(false);
        const [error, setError] = useState<string | null>(null);
  

        useEffect(()=>{
            const loadItem = async ()=>{
                try{
                   
                    const data = await fetchItems();
                    setItems(Array.isArray(data) ? data : Object.values(data.data));
                    console.log(items);
                  
                } catch (error){ 
                    setError("Failed to fetch data");
                    console.error(error);
                }
            };
            loadItem();
        },[]);
           

        useEffect(()=>{
            
            const textVisible=setTimeout(()=>{
                setTextvisible(true);
                return textVisible;
            },);
        },[]);
    
        const filteredProducts=selectedCategory
       ? items.filter(product=>product.category===selectedCategory):items;
        
    
        useEffect(()=>{
            const handleMouseMove=(event:MouseEvent)=>{
             
                if(event.clientX<300 && event.clientY>100){
                    setIsOpen(true);
                }
                else {
                    setIsOpen(false);
                }
            };
                document.addEventListener("mousemove",handleMouseMove);
            return()=>{
                document.removeEventListener("mousemove",handleMouseMove);
            };
        },[]);



        

    return(
        <>
    
           
            <div className={`grid grid-cols-3 grid-flow-row gap-20 transform  duration-1000 delay-500 ${textVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} `}>
                {filteredProducts.map((product) =>(
                    <div key={product.itemid} className=" container  font-sans1 gap-3 border border-solid rounded-2xl p-2 w-80 h-96 flex justify-center items-center flex-col shadow-xl  hover:shadow-2xl hover:scale-[1.02] transition-all duration-300  ">
                    <span className="size-3/5 bg-white rounded-xl p-2">
                    <img src={product.img} alt={product.title} className="size-[100%]" loading="lazy"/>
                    </span>
                    <span className="size-2/5 text-center "> 
                    <h3 className="text-xl font-bold">{product.title}</h3>

                    <p >{product.price}</p>
                    <p>{product.discription}</p>
                    <button type="submit" onClick={()=>console.log(product.itemid)} className=" bg-slate-900 text-white w-[110px] h-8 rounded-full mt-3 hover:bg-cyan-900 ">Add to Cart </button>
                    </span>

                    </div>
                ))}
               
            </div>
            
    <div className= {`fixed top-0 left-0 inset-0 bg-neutral-800 opacity-50 w-96 transition-all duration-500 ease-in-out transform z-40  ${isOpen ? 'translate-x-0' : '-translate-x-full delay-500 '}`}>
    </div>
      
      <div className={`fixed top-0 left-0 h-full  shadow-lg transition-transform duration-500 delay-300 ease-in-out transform 
       ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-96 z-40`}>
        
       
        <div className="pt-16 px-4 ">
          <h2 className={`text-2xl font-bold mb-6 text-gray-800  text-center text-white tranform transition-all duration-500 delay-300 ease-in-out ${isOpen ? 'delay=500  opacity-100 ' : '  opacity-0 delay=500    '}`} >Categories</h2>
         
         
           <div
              className={`p-4 mt-20 cursor-pointer rounded hover:bg-cyan-900 mb-1 text-white font-bold ${selectedCategory===null ? 'bg-cyan-900 text-white':''} tranform transition-all ease-in-out ${isOpen ? '  opacity-100   ' : ' opacity-0  '}`}
             
              onClick={() => setSelectedCategory(null)}                                                 
              >
                All Products
            </div>

            {categories.map((category)=>(
                <div
                key={category}
                className={`p-4 cursor-pointer rounded text-white tranform transition-all  ease-in-out  ${isOpen ? '  opacity-100  ' : ' opacity-0  '}
                    ${selectedCategory === category ? 'bg-cyan-900  text-white':''} `}
                    
                onClick={()=>setSelectedCategory(category)}
                >
                        {category}
                </div>
            ))}
            </div>

            </div>

       


        </>
    );
};

export default ProductList;