import { useEffect, useState } from "react";
import {fetchItems} from "../components/Utils/api";
import { Item } from "../components/Data/ProductType";

//import { ListItem } from "@mui/material";



const ProductList: React.FC = () => {

    
       const [items, setItems] = useState<Item[]>([])    
        const[isOpen,setIsOpen]=useState(false);
        const [selectedCategory,setSelectedCategory]=useState<string | null>(null);
        const categories= Array.from(new Set(items.map(item => item.category)));
        const [textVisible,setTextvisible]=useState(false);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const [error, setError] = useState<string | null>(null);
  

        useEffect(()=>{
            const loadItem = async ()=>{
                try{
                   
                    const data = await fetchItems();
                    setItems(Array.isArray(data) ? data : Object.values(data.data));
                  // console.log(items);
                  
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

              
                    if(event.clientX<300 && event.clientY>100 ){
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
    
    <div className= {`hidden md:block fixed top-0 left-0 inset-0 bg-neutral-800 opacity-50 md:w-96 transition-all duration-500 ease-in-out transform z-40  ${isOpen ? 'translate-x-0' : '-translate-x-full delay-500 '}`}>
    </div>
      
      <div className={`    hidden md:block fixed top-0 left-0 h-full  transition-transform duration-500 delay-300 ease-in-out transform z-30
       ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-96 z-40`}>
        
       
        <div className="pt-16 px-4 ">
          <h2 className={`text-2xl font-bold mb-6 text-gray-800  text-center text-white tranform transition-all duration-500 delay-300 ease-in-out ${isOpen ? 'delay=500  opacity-100 ' : '  opacity-0 delay=500    '}`} >Categories</h2>
         
         
           <div
              className={`p-4 mt-20 cursor-pointer rounded hover:bg-darker mb-1 text-white font-bold ${selectedCategory===null ? 'bg-darker text-white':''} tranform transition-all ease-in-out ${isOpen ? '  opacity-100   ' : ' opacity-0  '}`}
             
              onClick={() => setSelectedCategory(null)}                                                 
              >
                All Products
            </div>

            {categories.map((category)=>(
                <div
                key={category}
                className={`p-4 cursor-pointer rounded text-white tranform transition-all  ease-in-out  ${isOpen ? '  opacity-100  ' : ' opacity-0  '}
                    ${selectedCategory === category ? 'bg-darker  text-white':''} `}
                    
                onClick={()=>setSelectedCategory(category)}
                >
                        {category}
                </div>
            ))}
            </div>

            </div>

           

            <div className={`relative z-20 flex justify-center grid sm:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-20 bg-white transform  duration-1000 delay-500 ${textVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} `}>
                {filteredProducts.map((product) =>(
                    <div key={product.itemid} className=" container  font-sans1 gap-3 border border-solid rounded-2xl p-2 lg:w-80 h-96 w-60 flex justify-center items-center flex-col shadow-xl  hover:shadow-2xl hover:scale-[1.02] transition-all duration-300  ">
                    <span className="size-3/5 bg-white rounded-xl p-2">
                    <img src={product.img} alt={product.title} className="size-[100%] " loading="lazy"/>
                    </span>
                    <span className="size-2/5 text-center "> 
                    <h3 className="md:text-xl font-bold">{product.title}</h3>

                    <p >{product.price}</p>
                    <p>{product.discription}</p>
                    <button type="submit" onClick={()=>console.log(product.itemid)} className=" bg-slate-900 text-white w-[110px] md:h-8 rounded-full mt-3 hover:bg-cyan-900 sm:text-md text-sm-sm">Add to Cart </button>
                    </span>

                    </div>
                ))}
               
            </div>
            
   
       


        </>
    );
};

export default ProductList;