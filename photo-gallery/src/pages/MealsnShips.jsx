import "./gallery.css";
import { useState } from "react";
import back from "/images/back.png";
import { useNavigate } from "react-router";
import Navbar from "../components/NavBar";
import logowhite from "/images/logowhite.png"
import { Helmet } from "react-helmet";
import useFirestore from "../hooks/useFirestore";




const MealsnSips = () => {
  const nav = useNavigate();
  const { docs } = useFirestore('MealsnSips');
  
  
  
  const [model, setModel] = useState(false);
  const [tempingSrc, setTempImgSrc] = useState('');

  const getImg = (imgSrc) => {
      setTempImgSrc(imgSrc);
      setModel(true);
  }

  const closeModel = () => {
      setModel(false);
      setTempImgSrc('');
  }

  return (
    <div>
       <Helmet>
        <title>Meals n' Sips Gallery - Nikos Brinias Gallery</title>
        <meta name="description" content="Explore my gallery of meals and drinks showcasing vibrant food photography that sparks the imagination." />
        <meta name="keywords" content="Meals, Food Photography, Drinks, Sips, Gallery" />
      </Helmet>

      <Navbar />
    {model && (
        <div className={`fixed inset-0 z-50 flex justify-center items-center bg-stone-950 bg-opacity-100 transition-opacity duration-300 ease-in-out ${model ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} onClick={closeModel}>
            <img
                className="w-auto max-w-[90%] max-h-[90%] block transition-transform duration-300 ease-in-out"
                src={tempingSrc}
                alt="Full-screen view"
            />
        </div>
    )}
    
        <div className="overflow-x-hidden bg-[#281603] mx-auto min-h-screen scrollbar scrollbar-thin scrollbar-thumb-stone-950 scrollbar-track-stone-700 h-32 overflow-y-scroll">
        
          <div className="w-fit">
           <button  onClick={() => nav(-1)} className="text-2xl m-5 bg-black py-1 text-white px-5 rounded-lg hover:opacity-60 text-center" aria-label="Go Back"><img src={back} alt="Go Back Button" /></button>
          </div>
           <div className="w-screen flex flex-col justify-center items-center p-5">
           <img className="h-[9rem]" src={ logowhite } />
                <h1 className="text-4xl md:text-6xl font-serif mt-10 text-[#f1f1f1]">Meals n' Sips</h1>
                <p className="max-w-xl text-center text-[#f1f1f1] mt-5 font-serif">
                "In the world of food and drinks, visuals are everything. A great picture doesn't just capture a dish or a drink—it sets the mood, sparks appetite, and elevates the experience. Whether through vibrant colors or intricate design, the right image can ignite the imagination, making you taste the flavors just by looking. It’s often said that the perfect dish begins by tasting with your eyes before you ever take a bite or sip."
                </p>
            </div>

            <div className="columns-1 sm:columns-2 md:columns-3 w-full mx-auto mt-5">
            {docs && docs.map((doc) => {
            return (
              <div className="w-full py-2 px-0" key={doc.id} onClick={() => getImg(doc.url)}>
                <img
                    className="w-full h-auto cursor-pointer"
                    src={doc.url}
                    alt={`Ecosystem Image ${doc.id + 1}`} 
                />
              </div>
            );
          })}
            </div>
            <footer className="m-10 mt-20 border-t-2 border-white mx-auto text-white lg:w-[40%] w-full"><p className="m-5 text-center">© 2024 NikosBrinias-photography.com All rights reserved | Designed and Developed by Nikos Karamaroudis</p></footer>
        </div>
    
</div>
    );
}
 
export default MealsnSips;