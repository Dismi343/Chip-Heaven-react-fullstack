import { useState,useEffect } from "react";
import NavBar from "../navigation/navBar";
import products1 from "../../assets/images/aboutimg/products1.jpg";
import products2 from "../../assets/images/aboutimg/products2.jpg"; 
import products3 from "../../assets/images/aboutimg/products3.jpg";
import products4 from "../../assets/images/aboutimg/products4.jpg";
import products5 from "../../assets/images/aboutimg/products5.jpg";
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';


function About(){
        const [isVisible,setIsVisible] = useState(true);
        const [lastScrollPos,setLastScrollPos]= useState(0);
        const [textVisible,setTextvisible]=useState(false);
        const [ismove,setIsMove]=useState(true);

        const images=[
            {id:1, src:`${products1}`,alt:"product1" },
            {id:2, src:`${products2}`,alt:"product2"},
            {id:3, src:`${products3}`,alt:"product3"},
            {id:4, src:`${products4}`,alt:"product4"},
            {id:5, src:`${products5}`,alt:"product5"},
        ];
      

        const duplicatedImages=[...images,...images]; 
        

        useEffect(()=>{       
            const textVisible=setTimeout(()=>{
                setTextvisible(true);
                return textVisible;
            },100);
            return () => clearTimeout(textVisible);
        },[]);
    
        useEffect(()=>{
            const handleScroll =()=>{
                const currentScrollPos=window.pageYOffset;
                setIsVisible(currentScrollPos<=100);
                setIsMove(currentScrollPos<=600);
                setLastScrollPos(currentScrollPos);
            };
            window.addEventListener("scroll",handleScroll);   
        },[lastScrollPos]);

      

      
    return (
        <>
      
        <div className="flex ">
       
        <div className={` w-full md:h-96 h-60 bg-bgimg2 w-full bg-cover bg-center bg-no-repeat items-center justify-center flex fixed top-0 left-0 
                transition-transform duration-500  shadow-lg z-30 ${isVisible ? "transform translate-y-0" : "transform -translate-y-full" } `}>
                   <div className=" bg-black bg-opacity-50"></div>
                    <div className="flex flex-col items-center justify-center">  
                <div className={`md:w-[400px] md:h-[400px] w-[200px] h-[200px]  bg-logo transform transition-all duration-1000 ${textVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} `}></div>    
                <NavBar  />
                </div>  
                  
            </div>
            
        </div>
        <div className="md:h-96 h-60">

        </div>

        <div className="p-2">
            <div className="flex justify-center items-center p-8">  
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.8420020569984!2d79.9515930756817!3d7.027850317095582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2f9006a801471%3A0xd05d65d4324896d6!2sChip%20Heaven!5e0!3m2!1sen!2slk!4v1744726587423!5m2!1sen!2slk"   
          className={`w-full h-[500PX]  transition-transform duration-2000  ${textVisible ? "opacity-100" : "opacity-0" }`} loading="lazy" ></iframe>
            </div>
    
        </div>

         <div className={`mt-8 relative w-full overflow-hidden bg-white py-4 ${textVisible ?"opacity-100":"opacity-0"} transition-opacity duration-1000`}>
            <div className="relative flex gap-4 hover:pause-animation">
                <div className="flex gap-4 animate-scroll">
                    {duplicatedImages.map(image => (
                    <div
                    key={image.id}
                    data-id={image.id}
                    className={`
                        flex-shrink-0  md:w-96 w-48  overflow-hidden rounded-lg shadow-lg
                    `}
                    >
                    <div className="overflow-hidden rounded-lg shadow-lg">
                        <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="md:h-[300px] w-full h-48  object-cover transition-transform duration-300 hover:scale-110"
                        loading="lazy"
                        />
              </div>
            </div>

                ) )}
                </div>
            </div> 
      </div>
               
      <span className={ `mt-20 flex justify-center transition-transform duration-1000  ${ismove ? "transform -translate-x-full" : " transform translate-x-0" } `}>
            <PhoneInTalkOutlinedIcon fontSize="large"/> <a className="md:text-2xl text:xl flex items-center pl-10 font-semibold  " href="tel:+94767492276">+94 76 749 2276</a>
           </span>
           <p className={ `mt-10 pl-10 flex justify-center px-3 transition-transform duration-1000 delay-150  md:text-lg text-sm ${ismove ? "transform -translate-x-full " : " transform translate-x-0  " } `} > Dewala rd, Mahara-Nugegoda, Kadawatha, Sri Lanka</p>
            <div className="w-full h-[4000px]">
            </div>
        </>
    );
};


export default About;