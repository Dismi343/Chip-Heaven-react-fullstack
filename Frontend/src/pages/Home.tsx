
import { useState,useEffect } from "react";
import NavBar from "../components/navigation/navBar";
import ProductList from "./productList";
import warranty from "../assets/images/icons/guarantee.png";
import home from "../assets/images/icons/home-button.png";
import communication from "../assets/images/icons/Communication.png";
import Form_component from "../components/atoms/form";

const Home=()=>{
    const [isVisible,setIsVisible] = useState(true);    
   
    const [lastScrollPos,setLastScrollPos]= useState(0);
    const [textVisible,setTextvisible]=useState(false);
  
    useEffect(()=>{
        
        const textVisible=setTimeout(()=>{
            setTextvisible(true);
            return textVisible;
        },100);
    },[]);

    useEffect(()=>{
        const handleScroll =()=>{
            const currentScrollPos=window.pageYOffset;
            
            setIsVisible(currentScrollPos<=100);
           

           

            setLastScrollPos(currentScrollPos);

            
        };
        window.addEventListener("scroll",handleScroll);   

       
    },[lastScrollPos]);


    return (
        <>
     

           
        <div className="flex  ">
        
            <div className={` w-full md:h-[45vh] h-[40vh] bg-fixed bg-bgimg w-full  bg-cover bg-center bg-no-repeat items-center justify-center flex fixed top-0 left-0 
                transition-transform duration-500 z-30  ${isVisible ? "transform translate-y-0 " : "transform -translate-y-full" }  `}>
               <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="flex flex-col items-center justify-center"> 
                <div className={` md:w-[400px] md:h-[400px] w-[200px] h-[200px] bg-logo transform transition-all duration-1000 ${textVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} `}></div>  
                <NavBar   /> 
               
                </div>  
                  
            </div>
             
        </div>
        {/* <div className="w-full h-[400px]"></div> */}
       
        <div className={`relative z-20 w-full md:pt-[500px] pt-[300px] bg-white `}>
                <div className={`justify-center w-full h-full mt-10 grid grid-rows-1 `}  >
                    <div className={`flex justify-center items-center flex-col mb-20 pl-10  transform transition-all duration-1000 delay-300 ${textVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <p className="font-sans md:font-medium  subpixel-antialiased md:text-xl text-sm tracking-normal mb-5 flex justify-center items-center">
                        Your Trusted Partner for All Things Tech
                        </p>
                        <p className="font-sans md:font-medium text-sm subpixel-antialiased italic">
                        Find the latest computer accessories, and repair services all in one place.
                        </p>
                    </div>
                    

                </div>
                
            </div>
            <div className=" sticky z-30 w-full h-full bg-white pt-20 pb-10 px-40 flex justify-center">    
                <ProductList /> 
               
            </div> 
          
       <div className="relative z-20 bg-white pb-10">
       
            
           <hr className="relative z-30  border border-gray-400"/>
            <div className="mt-40 md:w-full md:h-96 flex  gap-10  flex-col items-center lg:flex-row lg:justify-around justify-center pb-10 ">
                    <div className="w-full h-48 lg:w-96 md:h-80 bg-primary shadow-lg shadow-primary ">
                    <div className="lg:mt-8 mt-4 flex justify-center ">
                    <img src={warranty} className="lg:w-20  lg:h-20 w-10 h-10   "/>
                    </div>
                        <p className="text-white font-bold flex justify-center pt-4 text-md lg:text-2xl">
                            Warranty
                        </p>    
                       
                            <p className="text-white text-md  flex sm:justify-center pt-2 lg:pt-8 text-center px-4 "> 
                             In case of faulty products, You will be able to get warranty up to 3 months
                            </p>
                        
                        
                    </div>
                    <div className=" w-full h-48 lg:w-96 md:h-80 bg-primary shadow-lg shadow-primary ">
                    <div className="lg:mt-8 mt-4 flex justify-center ">
                    <img src={home} className="lg:w-20 lg:h-20 w-10 h-10   "/>
                    </div>
                    <p className="text-white font-bold flex justify-center pt-4  text-md lg:text-2xl ">
                            Home Delivery
                        </p>    
                        <p className="text-white text-md flex justify-center pt-2 lg:pt-8 text-center px-4"> 
                        we offer to deliver to meet your requirements straight to where you live within Sri Lankan Borders
                        </p> </div>

                        <div className=" w-full h-48 lg:w-96 md:h-80 bg-primary shadow-lg shadow-primary ">
                    <div className="lg:mt-8 mt-4 flex justify-center   ">
                    <img src={communication} className="lg:w-20 lg:h-20 w-10 h-10   "/>
                    </div>
                    <p className="text-white font-bold flex justify-center pt-4  text-md lg:text-2xl ">
                            Easy Communication
                        </p>    
                        <p className="text-white text-md flex justify-center pt-2 lg:pt-8 text-center px-4"> 
                        Call us or Email us, we are here to help you for 24/7
                        </p> </div>

                      
            </div>
       </div>
           
           
           
           

           
           <Form_component></Form_component>
       
        </>
    );
};

export default Home;