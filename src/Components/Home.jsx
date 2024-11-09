
import { useEffect } from "react";
import { useRef } from "react";
import movie_bg from "../assets/Images/lucky-baskhar-poster.jpg";



const Header = () => {
let inputref =  useRef()

//  let[movie,setmovie] = useState({})
//  
 
  async function search_movie_poster(){
       try{
        let response =await  fetch('https://streaming-availability.p.rapidapi.com/shows/search/title?country=IN&title=kilukkam&series_granularity=show&show_type=movie&output_language=en',{
          method:'GET',
          headers:{
            "x-rapidapi-key":'c01e6ee1acmsh1c5d9d93b692b37p1585d4jsndddaac708a3b',
            "x-rapidapi-host":"streaming-availability.p.rapidapi.com"
          }
        })
        let data = await response.json()
        console.log(data)
        // setmovie({
        //   movie_image:data.imageSet

        // })
        
       }
       catch(error){
        console.log(error.message)
       }
  }



  useEffect(()=>{
    search_movie_poster("vettaiyan")
    inputref.current.focus = "none"
  },[])



  return (
    <>

        {/* head section  */}

      <header
        className="w-full h-full  relative z-10 object-contain"
        style={{ backgroundImage: `url(${movie_bg})`}}
      >
   
        <div className="w-full h-full bg-black  bg-opacity-60 absolute z-20 "></div>

          {/* nav */}
          
       

        {/* search bar section */}
        <div className="w-full h-full  flex justify-center items-center  ">

         
           <section className="w-1/2 h-1/2  absolute z-40   flex justify-center items-center ">
      
           <input ref={inputref}  className= "focus:bg-blue-700 focus:w-3/4 focus:h-10 focus:transition-all focus:duration-500 focus:p-7 focus:rounded-lg outline-none  w-40 h-10 bg-transparent " type="search" name="" id="" placeholder="Search your favorites movies" />
          <span  className="w-14 h-14 bg-black opacity-50 rounded-full  cursor-pointer   text-gray-500 text-2xl  relative z-10" >
              <i className="fa fa-search absolute z-30 left-4 top-4"></i>
          </span>
           </section>
        </div>
      </header>
    </>
  );
};

export default Header;
