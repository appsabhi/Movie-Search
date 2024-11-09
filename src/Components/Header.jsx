import logo from "../assets/Icons/—Pngtree—movie icon_5326849.png";
import { HashLink } from "react-router-hash-link";
// import { useNavigate } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className="w-full ">
        <nav className="w-full h-1/6  flex justify-evenly items-center absolute z-50  ">
          {/* logo section */}
          <div className="w-1/2 flex items-center opacity-75">
            <img className="w-22 h-24    relative z-40" src={logo} alt="" />
            <p className="text-5xl text-blue-800 leading-10 bg-clip-text absolute z-50 left-20 top-10">
              MovieHunt
            </p>
          </div>

          <ul className="w-1/2  h-1/6  flex  justify-evenly  text-blue-800  list-none ">
            <li className="hover:cursor-pointer hover:text-gray-600 font-semibold text-xl hover:-translate-y-2 hover:delay-100 hover:transition-transform  duration-300 ease-in-out">
              <HashLink smooth to="/#home">
                Home
              </HashLink>
            </li>
            <li className="hover:cursor-pointer hover:text-gray-600 font-semibold text-xl hover:-translate-y-2 hover:delay-100 hover:transition-transform  duration-300 ease-in-out">
              {" "}
              <HashLink smooth to="/#show_movies">
                Movies
              </HashLink>
            </li>
            <li className="hover:cursor-pointer hover:text-gray-600 font-semibold text-xl hover:-translate-y-2 hover:delay-100 hover:transition-transform  duration-300 ease-in-out">
              {" "}
              <HashLink smooth to="/#signin">
                Sign In
              </HashLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
