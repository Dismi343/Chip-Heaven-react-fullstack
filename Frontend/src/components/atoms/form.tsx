import form_photo from "../../assets/images/form_photo.jpg";

function Form_component(){
return(
    <div className="w-full h-[80vh] lg:flex mt-40 bg-lighter  ">
                <div className=" lg:w-2/3 h-full ">
                <form action="" className="flex flex-col  lg:pt-40 pt-40 lg:px-20 px-4">
                <div className="grid grid-cols-2 gap-4">
                
                <input type="text" name="username" id="username" className="block min-w-0 grow py-2  pl-3 lg:text-base  text-gray-900 focus:outline-none text-sm/6  shadow-lg shadow-lighteer border border-gray-300 rounded-md mb-8" placeholder="Your Name"/>
               
                <input type="text" name="username" id="username" className="block min-w-0 grow py-2  pl-3 lg:text-base  text-gray-900 focus:outline-none text-sm/6  shadow-lg shadow-lighteer border border-gray-300 rounded-md mb-8" placeholder="Your Email"/>
               
                <input type="text" name="username" id="username" className="block min-w-0 grow py-2  pl-3 lg:text-base  text-gray-900 focus:outline-none text-sm/6  shadow-lg shadow-lighteer border border-gray-300 rounded-md mb-8" placeholder="Your Contact Number"/>
               
                <input type="text" name="username" id="username" className="block min-w-0 grow py-2  pl-3 lg:text-base  text-gray-900 focus:outline-none text-sm/6  shadow-lg shadow-lighteer border border-gray-300 rounded-md mb-8" placeholder="Subject"/>

                <textarea name="message" id="message" className="block min-w-0 grow py-2  pl-3 lg:text-base  text-gray-900 focus:outline-none text-sm/6  shadow-lg shadow-lighteer border border-gray-300 rounded-md  mb-8 col-span-2" placeholder="Your Message"></textarea>
                
               </div>
               <div className="w-full flex justify-center items-center   ">
               <button type="submit" className=" lg:bg-darker text-white rounded-lg py-4 shadow-lg shadow-darker lg:mt-10 px-20 bg-primary  ">
                Submit</button>
               </div>
              
             </form>
                </div>
                <div className=" lg:w-1/3  bg-white lg:h-full h-0 flex justify-center items-center ">
                <img src={form_photo} className="h-full w-full"></img>
                  
                </div>
           
            </div>

);
}
export default Form_component;