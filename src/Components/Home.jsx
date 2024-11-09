import { useEffect, useState } from "react";
import { useRef } from "react";

const Header = () => {
  const movie_bg =
    "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/lucky-baskhar-et00386123-1707118235.jpg";
  const movie_bg01 =
    "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/amaran-et00388085-1728627184.jpg";
  const movie_bg02 =
    "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/i-am-kathalan-et00406660-1722422998.jpg";
  const movie_bg03 =
    "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/pani-et00404167-1720515291.jpg";

  let inputref = useRef();
  let images = [movie_bg, movie_bg01, movie_bg02, movie_bg03];

  //  let[movie,setmovie] = useState({})
  let [currentIndex, setindex] = useState(0);

  // async function search_movie_poster(){
  //      try{

  //       let response =await  fetch('https://streaming-availability.p.rapidapi.com/shows/search/title?country=IN&title=kilukkam&series_granularity=show&show_type=movie&output_language=en',{
  //         method:'GET',
  //         headers:{
  //           "x-rapidapi-key":'c01e6ee1acmsh1c5d9d93b692b37p1585d4jsndddaac708a3b',
  //           "x-rapidapi-host":"streaming-availability.p.rapidapi.com"
  //         }
  //       })
  //       let data = await response.json()
  //       console.log(data)
  //       // setmovie({
  //       //   movie_image:data.imageSet
  //       // })

  //      }
  //      catch(error){
  //       console.log(error.message)
  //      }
  // }

  useEffect(() => {
    // search_movie_poster("kilukkam")

    console.log("interval");

    let interval = setInterval(() => {
      setindex((previndex) => (previndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  console.log(currentIndex);
  return (
    <>
      {/* head section  */}

      <header
        className="w-full h-full  relative z-10 object-contain"

        // style={{ backgroundImage: `url(${movie_bg})`}}
      >
        <div className="w-full h-full bg-black  bg-opacity-60 absolute z-30  "></div>

        {/* nav */}

        <img
          className="w-full h-full  object-fill  absolute z-20 "
          src={images[currentIndex]}
          alt=""
        />

        {/* search bar section */}
        <div className="w-full h-full  flex justify-center items-center  ">
          <section className="w-1/2 h-1/2  absolute z-40   flex justify-center items-center ">
            <input
              ref={inputref}
              className="focus:bg-blue-700 focus:opacity-40 focus:w-3/4 focus:h-10 focus:transition-all focus:duration-500 focus:p-7 focus:rounded-lg outline-none  w-40 h-10 bg-transparent "
              type="search"
              name=""
              id=""
              placeholder="Search your favorites movies"
            />
            <span className="w-14 h-14 bg-black opacity-50 rounded-full  cursor-pointer   text-gray-500 text-2xl  relative z-10">
              <i className="fa fa-search absolute z-20 left-4 top-4"></i>
            </span>
          </section>
        </div>
      </header>
    </>
  );
};

export default Header;
