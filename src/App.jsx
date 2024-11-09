import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Movies_Area from "./Components/Movies_Area";
import Header from "./Components/Header";

const App = () => {
  return (
    <div className="w-full h-full ">
      <Header />
      
      <div id="home" className="h-screen">
        <Home />
      </div>
      <div id="show_movies" className="h-screen">
        <Movies_Area />
      </div>
      <div id="signin" className="h-screen">
        <Footer />
      </div>
    </div>
  );
};

export default App;
