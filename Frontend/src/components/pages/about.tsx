import { useState,useEffect } from "react";
import NavBar from "../navigation/navBar";
import GoogleMapComponent from "../Utils/googlemap";

function About(){
        const [isVisible,setIsVisible] = useState(true);
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
                setLastScrollPos(currentScrollPos);
            };
            window.addEventListener("scroll",handleScroll);   
        },[lastScrollPos]);
    return (
        <>
      
        <div className="flex ">
       
        <div className={` w-full h-96 bg-bgimg2 w-full bg-cover bg-center bg-no-repeat items-center justify-center flex fixed top-0 left-0 
                transition-transform duration-500  shadow-lg z-30 ${isVisible ? "transform translate-y-0" : "transform -translate-y-full" } `}>
                   <div className=" bg-black bg-opacity-50"></div>
                    <div className="flex flex-col items-center justify-center">  
                <div className={`w-[400px] h-[400px] bg-logo transform transition-all duration-1000 ${textVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} `}></div>    
                <NavBar  />
                </div>  
                  
            </div>
            
        </div>

        <div className="w-full h-[4000px]  mt-[475px]">
            <div className="flex justify-center items-center">  
                 <GoogleMapComponent/>
            </div>
               
        </div>
        </>
    );
};

//key google-map
//AIzaSyAZjuyfNfDheyHraGjQ2UodBKgv0gIcvCQ
export default About;