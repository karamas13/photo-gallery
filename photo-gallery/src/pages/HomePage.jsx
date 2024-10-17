import { useNavigate } from "react-router";
import Navbar from "../components/NavBar";
import portrait from "/images/portrait.png"
import logowhite from "/images/logowhite.png"

function HomePage() {
  const nav = useNavigate();

    return (
        <div className="min-h-screen scrollbar scrollbar-thin scrollbar-thumb-stone-950 scrollbar-track-stone-700 h-32 overflow-y-scroll overflow-x-hidden z-1 font-serif" >
           <div> 
             <Navbar />
            <div>
            <div className="lg:bg-nature md:bg-nature bg-nature2 min-h-screen bg-cover bg-fixed flex flex-col justify-center p-5 md:p-10 lg:p-20">
                <div className="flex flex-col justify-start items-start max-w-md">
                    <h1 className="text-4xl md:text-6xl font-bold font-serif text-white">Ecosystems</h1>
                    <p className="mt-4 text-base md:text-lg lg:text-xl text-white">
                     "Landscape photography offers a glimpse into the extraordinary. Capturing breathtaking views and hidden places from the perfect point of view. These images transport viewers to locations where nature's beauty is untouched, from sweeping vistas to serene corners rarely seen by most. Each photograph reflects not just the grandeur of these places, but also the effort and adventure it takes to witness them, and the eye required to capture them, inviting viewers beyond the ordinary."
                    </p>
                    <button onClick={() => {nav('/Ecosystem')}}  class="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow mt-5">
                      <div className="absolute inset-0 w-3 bg-green-600 transition-all duration-[350ms] ease-out group-hover:w-full"></div>
                      <span className="relative text-black group-hover:text-white ">Ecosystems</span>
                    </button>
                </div>
            </div>
            </div>
            <div>
            <div className="lg:bg-people md:bg-people bg-individuals min-h-screen bg-cover bg-fixed flex flex-col justify-center p-5 md:p-10 lg:p-20">
                <div className="flex flex-col justify-start items-start max-w-md">
                    <h1 className="text-4xl md:text-6xl text-white font-bold font-serif">Individuals</h1>
                    <p className="mt-4 text-base md:text-lg lg:text-xl text-white">
                    "Portraits are more than just pictures of people, they’re crafted to capture the essence of human expression and emotion. They freeze moments in time, preserving the subtle details that often go unnoticed: expressions, gestures, and personalities. Whether for memories, showcasing style, or professional representation, portraits offer a window into who we are. A well-crafted portrait highlights the uniqueness of each individual, capturing their distinctive traits and overall vibe."
                    </p>
                    <button onClick={() => {nav('/Individuals')}} class="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow mt-5">
                      <div className="absolute inset-0 w-3 bg-red-600 transition-all duration-[350ms] ease-out group-hover:w-full"></div>
                      <span className="relative text-black group-hover:text-white">Individuals</span>
                    </button>
                </div>
            </div>
            </div>
            <div>
            <div className="lg:bg-food md:bg-food bg-mealsnsips h-screen bg-cover bg-fixed flex flex-col justify-center p-5 md:p-10 lg:p-20">
                <div className="flex flex-col justify-start items-start max-w-md">
                    <h1 className="text-4xl md:text-6xl text-white font-bold font-serif">Meals n' Sips</h1>
                    <p className="mt-4 text-base md:text-lg lg:text-xl text-white">
                    "In the world of food and drinks, visuals are everything. A great picture doesn't just capture a dish or a drink—it sets the mood, sparks appetite, and elevates the experience. Whether through vibrant colors or intricate design, the right image can ignite the imagination, making you taste the flavors just by looking. It’s often said that the perfect dish begins by tasting with your eyes before you ever take a bite or sip."
                    </p>
                    <button onClick={() => {nav('/MealsnShips')}} class="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow mt-5">
                      <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[350ms] ease-out group-hover:w-full"></div>
                      <span className="relative text-black group-hover:text-white">Meals n' Sips</span>
                    </button>
                </div>
            </div>
            </div>
            <div>
            <div className="lg:bg-shows md:bg-shows bg-concerts h-screen bg-cover bg-fixed flex flex-col justify-center p-5 md:p-10 lg:p-20">
                <div className="flex flex-col justify-start items-start max-w-md">
                    <h1 className="text-4xl md:text-6xl text-white font-bold font-serif">Concerts</h1>
                    <p className="mt-4 text-base md:text-lg lg:text-xl text-white">
                    "Live concerts are a powerful spectacle that showcases the artist's glory in a captivating display of talent and energy. The stage transforms into a canvas where performers connect deeply with their audience. The crowd, alive with excitement, contributes to the atmosphere, creating a dynamic interplay that enhances every moment captured. From stunning visuals of lights and smoke to the palpable buzz in the air, each photograph encapsulates the essence of live performance, intense sounds and unforgettable experiences."
                    </p>
                    <button onClick={() => {nav('/Concerts')}} class="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow mt-5">
                      <div className="absolute inset-0 w-3 bg-cyan-400 transition-all duration-[350ms] ease-out group-hover:w-full"></div>
                      <span className="relative text-black group-hover:text-white">Concerts</span>
                    </button>
                </div>
            </div>
            </div>
            
            <div className="bg-[#000001] h-fit md:h-fit bg-cover flex flex-col justify-center items-center">
                <img className="h-[5rem] w-auto mt-5" src={ logowhite }/>
            <div className="flex flex-col justify-center lg:items-center items-center text-center max-w-2xl p-5 ">
                <h1 className="text-4xl md:text-6xl text-white font-bold font-serif">About Me</h1>
                <p className="mt-4 text-base md:text-lg lg:text-xl text-white">
                "Since day one, my work has been driven by a unique aesthetic that captures the essence of each moment. I approach every project with a focused mindset, ensuring that my creative vision shines through. With each click, I recognize and embrace the energy of the moment, allowing it to influence my shots. My dedication lies in expressing my personal artistic style and connecting authentically with the subjects I capture. This commitment to individuality not only shapes my images but also fosters genuine moments that resonate deeply with those who view my work."
                </p>

                <h1 className="text-4xl md:text-6xl text-white font-bold font-serif mt-[5rem]">Contact Me</h1>
                <p className="mt-4 text-base md:text-lg lg:text-xl text-white">
                    Email: nikosbrinias@gmail.com
                </p>
          
            </div>
            <div className="flex flex-col h-full items-end justify-end items-end w-screen">
                <img className="h-[25rem] md:h-[35rem] object-cover mx-auto" src={portrait} />
            </div>
            
        </div>
            </div>
        </div>
    );
}

export default HomePage;
