import { useRef } from "react";
import form_photo from "../../assets/images/form_photo.jpg";
import ScrollImage from "./fixed_image";
import emailjs from "emailjs-com";
function Form_component(){

    const form = useRef<HTMLFormElement | null>(null);

    const sendEmail = (e: { preventDefault: () => void; }) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          'service_vzdmmf7',     // Replace with your EmailJS service ID
          'template_di1snp4',    // Replace with your EmailJS template ID
          form.current!,
          '79xE9zxsdqJW6N5Kk'      // Replace with your EmailJS public key
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("Message sent successfully!");
          },
          (error) => {
            console.log(error.text);
            alert("Failed to send message.");
          }
        );
    };
return(
<>
<ScrollImage></ScrollImage>

<div className="relative z-10 lg:pt-40">
       
    <div className="w-full lg:h-[80dvh] md:h-[50dvh] h-[70dvh] lg:flex  bg-primary  ">
        
                <div className=" lg:w-2/3 h-full ">
                <div>
                     <h1 className="text-center font-semibold text-4xl mt-10 lg:mt-20 lg:text-5xl font-sans text-slate-100 text-shadow-lg ">
                              Get in Touch
                  </h1>
                </div>
                <form ref={form} className="flex flex-col  lg:pt-20 pt-10 lg:px-20 px-4" onSubmit={sendEmail} >
                <div className="grid grid-cols-2 gap-4">
                
                <input type="text" name="username" id="username" className="block min-w-0 grow py-2  pl-3 lg:text-base  text-gray-900 focus:outline-none text-sm/6  shadow-lg shadow-lighteer border border-gray-300 rounded-md mb-8 italic" placeholder="Your Name"/>
               
                <input type="text" name="email" id="email" className="block min-w-0 grow py-2  pl-3 lg:text-base  text-gray-900 focus:outline-none text-sm/6  shadow-lg shadow-lighteer border border-gray-300 rounded-md mb-8 italic" placeholder="Your Email"/>
               
                <input type="text" name="contact" id="contact" className="block min-w-0 grow py-2  pl-3 lg:text-base  text-gray-900 focus:outline-none text-sm/6  shadow-lg shadow-lighteer border border-gray-300 rounded-md mb-8 italic" placeholder="Your Contact Number"/>
               
                <input type="text" name="subject" id="subject" className="block min-w-0 grow py-2  pl-3 lg:text-base  text-gray-900 focus:outline-none text-sm/6  shadow-lg shadow-lighteer border border-gray-300 rounded-md mb-8 italic" placeholder="Subject"/>

                <textarea name="message" id="message" className="block min-w-0 grow py-8  pl-3 lg:text-base  text-gray-900 focus:outline-none text-sm/6  shadow-lg shadow-lighteer border border-gray-300 rounded-md  mb-8 col-span-2 italic" placeholder="Your Message"></textarea>
                
               </div>
               <div className="w-full flex justify-center items-center   ">
               <button type="submit" className=" lg:bg-morelighter text-darker rounded-lg py-4 shadow-lg shadow-darker lg:mt-10 px-20 bg-primary  ">
                Submit</button>
               </div>
              
             </form>
                </div>
                <div className=" lg:w-1/3  bg-white lg:h-full h-0 flex justify-center items-center ">
                <img src={form_photo} className="h-full w-full"></img>
                  
                </div>
           
            </div>
            
</div>

</>
    
);
}
export default Form_component;




//EmailJS