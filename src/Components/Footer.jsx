
import insta from "../assets/Icons/instagram.png"
import wtsapp from "../assets/Icons/whatsapp.png"
import twitter from "../assets/Icons/twitter.png"
import fb from "../assets/Icons/facebook.png"


const FullScreenFooter = () => {
  return (
    <>
      <footer className="w-full h-full bg-blue-950 relative z-10  flex flex-col ">
         <div className="w-full h-[65%] bg-white ">
           signin
         </div>
         <div  className="w-full  h-[35%] bg-blue-950 flex  flex-col justify-end items-center">
              <div className="w-full h-2/3  flex justify-center ">
               <div className="w-1/2 h-full  grid grid-cols-4  grid-rows-2 justify-items-center items-center grid- ">
               <img  className="w-10 h-10 justify-center  " src={insta} alt="" />
                <img className="w-10 h-10  " src={wtsapp} alt="" />

                <img className="w-10 h-10  " src={twitter} alt="" />

                <img className="w-10 h-10  " src={fb} alt="" />
                <p>instagram</p>
                <p>Whatsapp</p>
                <p>Twitter</p>
                <p>Facebook</p>
             <p className=" w-full col-span-3 text-center text-white"> &copy; {new Date().getFullYear()} MovieHunt . All rights reserved.</p>


               </div>
             

              </div> 
             
         </div>
      </footer>
    </>
     );
};

export default FullScreenFooter;
