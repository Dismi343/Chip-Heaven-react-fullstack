import InstagramIcon from '@mui/icons-material/Instagram';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'




function NavBar(){
        const [isblack,setBlack]=useState(true);
        const [lastScrollPos,setLastScroll]=useState(0);

        useEffect(()=>{
            const handleScroll=()=>{
                const currentScroll=window.pageYOffset;
                setBlack(currentScroll<150);
                setLastScroll(currentScroll);
            };
            window.addEventListener("scroll",handleScroll);
        },[lastScrollPos]);

    return(
        <>
        
   
         <nav className="top-0 fixed left-0 w-full ">
         
        <div className="w-100 h-20 bg-transparent font-serif flex flex-row justify-between items-center   ">
        
        <span className={`flex justify-start  ps-20 gap-6 w-20 h-10  text-lg ${isblack ? "text-white " : "text-neutral-950"}`}>
                <div className='w-20 h-10 bg-white '></div>
                
                <Link to="https://www.facebook.com/profile.php?id=61558286803494" className='w-20 h-10 hover:text-red-600 transition duration-0 hover:duration-150 hover:text-2xl text-center'> <FacebookOutlinedIcon fontSize="large"/></Link> 
                <Link to="/"  className='w-20 h-10 hover:text-red-600 transition duration-0 hover:duration-150 hover:text-2xl text-center  '> <InstagramIcon fontSize="large"/> </Link> 
                
           </span>
           <div className={`flex justify-end pe-20 gap-4 items-center text-xl ${isblack ? "text-white" : "text-neutral-950"} `}>
            <Link to="/" className=" w-20 h-10  hover:text-2xl  hover:duration-150 hover:text-red-600  text-center" >Home</Link>
            <Link to="/about" className="w-20  h-10 hover:text-2xl hover:duration-150 hover:text-red-600 text-center"> About</Link>
            <Link to="/user" className="w-20  h-10 hover:text-2xl  hover:duration-150 hover:text-red-600 text-center"><AccountCircleIcon fontSize="large"/> </Link>
            <Link to="" className="w-20  h-10 hover:text-2xl  hover:duration-150 hover:text-red-600 text-center"><AddShoppingCartIcon fontSize="large"/> </Link>
           </div>       
        </div>
       
        </nav>
       
        
        </>
    );
}; 
export default NavBar;  