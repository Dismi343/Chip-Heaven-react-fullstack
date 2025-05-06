import InstagramIcon from '@mui/icons-material/Instagram';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react';



function NavBar(){
        const [isblack,setBlack]=useState(true);
        const [lastScrollPos,setLastScroll]=useState(0);
        const [isOpen,setIsOpen]=useState(false);

        useEffect(()=>{
            const handleScroll=()=>{
                const currentScroll=window.pageYOffset;
                setBlack(currentScroll<100);
                setLastScroll(currentScroll);
                };

            window.addEventListener("scroll",handleScroll);
        },[lastScrollPos]);

        const ToggleMenu=()=>{
            setIsOpen(!isOpen);
        };

        
    return(
        <>
        
        {/* Desktop View */}
         <nav className=" z-20 top-0 fixed left-0 w-full hidden md:block ">
         
        <div className="w-100 h-20  font-serif flex flex-row justify-between items-center ">
        
        <span className={` flex justify-start  ps-20 gap-6 w-20 h-10  text-md ${isblack ? 'text-white':'text-black'}`}>
               <Link to="https://www.facebook.com/profile.php?id=61558286803494" className='w-20 h-10 hover:text-cyan-900 transition duration-0 hover:duration-150 hover:text-2xl text-center'> <FacebookOutlinedIcon fontSize="large"/></Link> 
                <Link to="/"  className='w-20 h-10 hover:text-cyan-900 transition duration-0 hover:duration-150 hover:text-2xl text-center  '> <InstagramIcon fontSize="large"/> </Link> 
                
           </span>
           <div className={` flex justify-end pe-20 gap-4 items-center text-xl ${isblack ? 'text-white':'text-black'} `}>
            <Link to="/" className=" w-20 h-10  hover:text-2xl  hover:duration-150 hover:text-cyan-900  text-center" >Home</Link>
            <Link to="/about" className="w-20  h-10 hover:text-2xl hover:duration-150 hover:text-cyan-900 text-center"> About</Link>
            <Link to="/user" className="w-20  h-10 hover:text-2xl  hover:duration-150 hover:text-cyan-900 text-center"><AccountCircleIcon fontSize="large"/> </Link>
            <Link to="" className="w-20  h-10 hover:text-2xl  hover:duration-150 hover:text-cyan-900 text-center"><AddShoppingCartIcon fontSize="large"/> </Link>
           </div>       
        </div>
       
        </nav>
       
       {/* modile view */}
        <nav className={`top-0 fixed left-0 w-full md:hidden  `}>
        <div className="w-100 h-10 bg-tranparent font-serif flex flex-row justify-end items-center flex px-6 ">
        <button 
             onClick={ToggleMenu}
            className={`p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
            </div>
            <div 
          className={`w-full bg- shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
            
            <div className='flex flex-col items-center gap-4  text-white py-2 bg-neutral-950/75'>
            <Link to="/" className=" w-20 h-10  hover:text-2xl  hover:duration-150 hover:text-cyan-900  text-center" >Home</Link>
            <Link to="/about" className="w-20  h-10 hover:text-2xl hover:duration-150 hover:text-cyan-900 text-center"> About</Link>
            <Link to="/user" className="w-20  h-10 hover:text-2xl  hover:duration-150 hover:text-cyan-900 text-center">User </Link>
            <Link to="" className="w-20  h-10 hover:text-2xl  hover:duration-150 hover:text-cyan-900 text-center">Cart </Link> 
            </div>
            
          
          </div>
        </nav>
        </>
    );
}; 
export default NavBar;  