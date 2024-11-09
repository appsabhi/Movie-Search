import sample_image from "../assets/Images/ARM_POSTER.jpg";


const Movies_Area = () => {
  return (
    <>
      <section className="w-full h-full bg-black opacity-85 flex items-center">

        {/* image section  */}

        <div className="w-1/4 h-full flex flex-col gap-10 items-center ">
        {/* title section */}
        <div className="w-full h-min flex justify-center gap-5">
        <h1 className="text-white  text-5xl ">A.R.M</h1>
        <p className="text-gray-500 h-full  text-xl  place-content-end">2024</p>
        </div>
        {/* title section */}

          <img className="w-3/4 h-3/4 mix-blend-screen " src={sample_image} alt="" />
        </div>
        {/*// image section  */}

       {/* detail section */}
        <div className="w-1/2 h-3/4 ">
          <div className="w-full text-white flex justify-start gap-10 ">
            <p className="w-1/5 h-10 rounded-3xl border-gray-200 border text-center place-content-center">
              Action
            </p>
            <p className="w-1/5 h-10 rounded-3xl border-gray-200 border text-center place-content-center">
              Adventure
            </p>
          </div>
          <article className="w-full h-1/3 place-content-center   text-white">
            <p>
              In his directorial masterpiece, Clint Eastwood plays a reformed
              gun-slinger forced to pick up his gun again to feed his family and
              take on a sadistic sheriff. However he must contend with his new
              moral code while avenging the town prostitutes, and blurs the line
              between heroism and villainy, man and myth.
            </p>
          </article>
          <div className="w-full h-1/2 text-gray-600 grid grid-rows-3  grid-cols-[1fr_5fr]  ">
            <p className="border-b border-gray-400" >Director:</p>
            <p className="border-b border-gray-400">Jithin Lal</p>
            <p className="border-b border-gray-400">cast:</p>

            <p  className="border-b border-gray-400" >
              Tovino Thomas, Krithi Shetty, Aishwarya Rajesh, Surabhi Lakshmi,
              Basil Joseph, Rohini, Harish Uthaman
            </p>
            <p  className="border-b border-gray-400" >Rating:</p>
            <p  className="border-b border-gray-400" >58</p>
            <p  className=" text-blue-700 font-bold " >More info</p>

            <p  className="hover:cursor-pointer hover:text-yellow-300" ><a href="#">IMDB</a> </p>
         
          </div>

        </div>



       {/* // detail section */}

       <div className="w-1/4 h-full  flex flex-col justify-evenly items-center jusr">
       <button className="w-1/2 h-20 text-blue-950 hover:bg-sky-700 hover:text-black text-xl  rounded-lg border-2 border-blue-950">+ Add to Watchlist</button>
        {/* <button className="w-1/2 h-20 bg-blue-800 text-black text-xl rounded-lg">Watch Now on Hotstart </button> */}
       </div>

      </section>
    </>
  );
};

export default Movies_Area;
//
