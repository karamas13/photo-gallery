import { useNavigate } from "react-router";
import Navbar from "../components/NavBar";
import portrait from "/images/portrait.png";
import logowhite from "/images/logowhite.png";
import { Helmet } from 'react-helmet'; 
import './parallax.css';



function HomePage() {
  const nav = useNavigate();

  return (
    <div className="min-h-screen scrollbar scrollbar-thin scrollbar-thumb-stone-950 scrollbar-track-stone-700 h-32 overflow-y-scroll overflow-x-hidden z-1 font-serif">
      <Helmet>
        <title>Home - Nikos Brinias Photography</title>
        <meta name="description" content="Explore stunning ecosystems, individuals, meals, and concerts through captivating photography. Contact me to learn more." />
        <meta name="keywords" content="photography, ecosystems, concerts, portraits, meals, contact, visuals, nikos, brinias" />
      </Helmet>
      <div>
        <Navbar />
        <div>
          
          {/* Individuals Section */}
          <div className="lg:bg-people bg-individuals min-h-screen bg-cover flex flex-col justify-center p-5 md:p-10 lg:p-20 parallax">
            <div className="flex flex-col justify-start items-start max-w-md">
              <h1 className="text-4xl md:text-6xl text-white font-bold font-serif">Individuals</h1>
              <p className="mt-4 text-base md:text-lg lg:text-xl text-white">
                "Portraits are more than just pictures of people; they’re crafted to capture the essence of human expression and emotion..."
              </p>
              <button 
                onClick={() => { nav('/Individuals') }} 
                className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow mt-5"
                aria-label="Navigate to Individuals"
              >
                <div className="absolute inset-0 w-3 bg-red-600 transition-all duration-[350ms] ease-out group-hover:w-full"></div>
                <span className="relative text-black group-hover:text-white">Individuals</span>
              </button>
            </div>
          </div>

          {/* Meals and Sips Section */}
          <div className="lg:bg-food bg-mealsnsips h-screen bg-cover flex flex-col justify-center p-5 md:p-10 lg:p-20 parallax">
            <div className="flex flex-col justify-start items-start max-w-md">
              <h1 className="text-4xl md:text-6xl text-white font-bold font-serif">Meals n' Sips</h1>
              <p className="mt-4 text-base md:text-lg lg:text-xl text-white">
                "In the world of food and drinks, visuals are everything. A great picture doesn't just capture a dish or a drink—it sets the mood, sparks appetite, and elevates the experience..."
              </p>
              <button 
                onClick={() => { nav('/MealsnShips') }} 
                className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow mt-5"
                aria-label="Navigate to Meals and Sips"
              >
                <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[350ms] ease-out group-hover:w-full"></div>
                <span className="relative text-black group-hover:text-white">Meals n' Sips</span>
              </button>
            </div>
          </div>

          {/* Concerts Section */}
          <div className="lg:bg-shows bg-concerts h-screen bg-cover flex flex-col justify-center p-5 md:p-10 lg:p-20 parallax">
            <div className="flex flex-col justify-start items-start max-w-md">
              <h1 className="text-4xl md:text-6xl text-white font-bold font-serif">Concerts</h1>
              <p className="mt-4 text-base md:text-lg lg:text-xl text-white">
                "Live concerts are a powerful spectacle that showcases the artist's glory in a captivating display of talent and energy..."
              </p>
              <button 
                onClick={() => { nav('/Concerts') }} 
                className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow mt-5"
                aria-label="Navigate to Concerts"
              >
                <div className="absolute inset-0 w-3 bg-cyan-400 transition-all duration-[350ms] ease-out group-hover:w-full"></div>
                <span className="relative text-black group-hover:text-white">Concerts</span>
              </button>
            </div>
          </div>

          {/* Ecosystems Section */}
          <div className="lg:bg-nature bg-nature2 min-h-screen bg-cover flex flex-col justify-center p-5 md:p-10 lg:p-20 parallax">
            <div className="flex flex-col justify-start items-start max-w-md">
              <h1 className="text-4xl md:text-6xl font-bold font-serif text-white">Ecosystems</h1>
              <p className="mt-4 text-base md:text-lg lg:text-xl text-white">
                "Landscape photography offers a glimpse into the extraordinary. Capturing breathtaking views and hidden places from the perfect point of view..."
              </p>
              <button 
                onClick={() => { nav('/Ecosystem') }} 
                className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow mt-5"
                aria-label="Navigate to Ecosystems"
              >
                <div className="absolute inset-0 w-3 bg-green-600 transition-all duration-[350ms] ease-out group-hover:w-full"></div>
                <span className="relative text-black group-hover:text-white">Ecosystems</span>
              </button>
            </div>
          </div>

          {/* About Me Section */}
          <div className="bg-[#000001] h-fit md:h-fit bg-cover flex flex-col justify-center items-center">
            <img className="h-[5rem] w-auto mt-5" src={logowhite} alt="Logo" />
            <div className="flex flex-col justify-center lg:items-center items-center text-center max-w-2xl p-5">
              <h1 className="text-4xl md:text-6xl text-white font-bold font-serif">About Me</h1>
              <p className="mt-4 text-base md:text-lg lg:text-xl text-white">
                "Since day one, my work has been driven by a unique aesthetic that captures the essence of each moment..."
              </p>

              <h2 className="text-4xl md:text-6xl text-white font-bold font-serif mt-[5rem]">Contact Me</h2>
              <p className="mt-4 text-base md:text-lg lg:text-xl text-white">
                Email: <a href="mailto:nikosbrinias@gmail.com" className="underline">nikosbrinias38@gmail.com</a>
              </p>
            </div>
            <div className="flex flex-col h-full items-end justify-end w-screen">
              <img className="h-[25rem] md:h-[35rem] object-cover mx-auto" src={portrait} alt="Portrait of Nikos Brinias" />
              <footer className="m-10 mt-20 border-t-2 border-white mx-auto text-white">
                <p className="m-5 text-center">© 2024 NikosBrinias-photography.com All rights reserved | Designed and Developed by Nikos Karmaroudis</p>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
