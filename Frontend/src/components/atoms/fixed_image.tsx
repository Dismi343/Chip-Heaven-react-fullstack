function ScrollImage(){
    return(
        <>
        <div className="relative min-h-96 ">
        <div 
            className="fixed inset-0 bg-cover bg-center bg-no-repeat z-0 bg-scroll_img "
        >
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center pt-20 lg:pt-40">
            
           <h1 className="text-white text-4xl font-bold text-center mt-10 lg:mt-20 lg:text-5xl ">
           Welcome to ChipHeaven 
           Small Parts,
           <br/> Big Performance!
            </h1> 
            <p className="text-white m-20 lg:px-20 text-center font-sans text-xl italic">
            We’re a new computer shop focused on helping you get the most out of your PC. At ChipHeaven, 
            we stock essential components like RAM, processors, and other key parts to upgrade or build your setup.
             Whether you’re a gamer, a student, or just need a faster machine, we’ve got the right chips to
              keep you going. Friendly service, fair prices – that’s the ChipHeaven way!
            </p>
        </div>
        </div>
        </>
    );
}
export default ScrollImage;