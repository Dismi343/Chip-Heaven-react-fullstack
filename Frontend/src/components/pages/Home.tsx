
import { useState,useEffect } from "react";
import NavBar from "../navigation/navBar";
import ProductList from "./productList";
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';




const Home=()=>{
    const [isVisible,setIsVisible] = useState(true);    
    const[ismove,setIsMove]=useState(true);
    const [lastScrollPos,setLastScrollPos]= useState(0);
    const [textVisible,setTextvisible]=useState(false);
  
    useEffect(()=>{
        
        const textVisible=setTimeout(()=>{
            setTextvisible(true);
            return textVisible;
        },);
    },[]);

    useEffect(()=>{
        const handleScroll =()=>{
            const currentScrollPos=window.pageYOffset;
            
            setIsVisible(currentScrollPos<=100);
           

            setIsMove(currentScrollPos<=700);
           

            setLastScrollPos(currentScrollPos);

            
        };
        window.addEventListener("scroll",handleScroll);   

       
    },[lastScrollPos]);


 

    // function scroll(){
    //     console.log(window.pageYOffset);    
    // }

    scroll();
    return (
        <>
     

           
        <div className="flex ">
        
            <div className={` w-full h-96 bg-fixed bg-bgimg w-full  bg-cover bg-center bg-no-repeat items-center justify-center flex fixed top-0 left-0 
                transition-transform duration-500 z-30  ${isVisible ? "transform translate-y-0 " : "transform -translate-y-full" }  `}>
               <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="flex flex-col items-center justify-center"> 
                <div className={` md:w-[400px] md:h-[400px] w-[200px] h-[200px] bg-logo transform transition-all duration-1000 ${textVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} `}></div>  
                <NavBar   /> 
               
                </div>  
                  
            </div>
             
        </div>
        {/* <div className="w-full h-[400px]"></div> */}
       
            <div className={`w-full mt-[450px]  `}>
                <div className={`justify-center w-full h-full mt-10 grid grid-rows-1 `}  >
                    <div className={`flex justify-center items-center flex-col mb-20 pl-10  transform transition-all duration-1000 delay-300 ${textVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <p className="font-sans font-medium subpixel-antialiased text-xl tracking-normal mb-5 ">
                        Your Trusted Partner for All Things Tech
                        </p>
                        <p className="font-sans font-medium subpixel-antialiased italic">
                        Find the latest computer accessories, and repair services all in one place.
                        </p>
                    </div>
                    <div className=" w-full h-full ">
                    <ProductList /> 
                    </div>
               
                </div>
                <hr className="mt-20 border border-gray-400"/>
            </div>
            <span className={ `mt-40 flex justify-center transition-transform duration-1000  ${ismove ? "transform -translate-x-full" : " transform translate-x-0" } `}>
            <PhoneInTalkOutlinedIcon fontSize="large"/> <a className="text-2xl flex items-center pl-10 font-semibold  " href="tel:+94767492276">+94 76 749 2276</a>
           </span>
           <p className={ `mt-10 pl-10 flex justify-center px-3 transition-transform duration-1000 delay-150 ${ismove ? "transform -translate-x-full " : " transform translate-x-0  " } `} > Dewala rd, Mahara-Nugegoda, Kadawatha, Sri Lanka</p>
            <div className="w-full h-[4000px]">
            </div>

           
        </>
    );
};

export default Home;