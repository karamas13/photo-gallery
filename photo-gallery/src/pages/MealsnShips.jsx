import "./gallery.css";
import { useState } from "react";
import back from "/images/back.png";
import { useNavigate } from "react-router";
import Navbar from "../components/NavBar";
import logowhite from "/images/logowhite.png"
import { Helmet } from "react-helmet";

import img1 from "/MealsnSips/img1.jpg";  
import img2 from "/MealsnSips/img2.jpg";  
import img3 from "/MealsnSips/img3.jpg";  
import img4 from "/MealsnSips/img4.jpg";  
import img5 from "/MealsnSips/img5.jpg";  
import img6 from "/MealsnSips/img6.jpg";  
import img7 from "/MealsnSips/img7.jpg";  
import img8 from "/MealsnSips/img8.jpg";  
import img9 from "/MealsnSips/img9.jpg";  
import img10 from "/MealsnSips/img10.jpg";
import img11 from "/MealsnSips/img11.jpg";
import img12 from "/MealsnSips/img12.jpg";
import img13 from "/MealsnSips/img13.jpg";
import img14 from "/MealsnSips/img14.jpg";  
import img15 from "/MealsnSips/img15.jpg";  
import img16 from "/MealsnSips/img16.jpg";  
import img17 from "/MealsnSips/img17.jpg";  
import img18 from "/MealsnSips/img18.jpg";  
import img19 from "/MealsnSips/img19.jpg";  
import img20 from "/MealsnSips/img20.jpg";  
import img21 from "/MealsnSips/img21.jpg";  
import img22 from "/MealsnSips/img22.jpg";  
import img23 from "/MealsnSips/img23.jpg";
import img24 from "/MealsnSips/img24.jpg";
import img25 from "/MealsnSips/img25.jpg";
import img26 from "/MealsnSips/img26.jpg";
import img27 from "/MealsnSips/img27.jpg";  
import img28 from "/MealsnSips/img28.jpg";  
import img29 from "/MealsnSips/img29.jpg";  
import img30 from "/MealsnSips/img30.jpg";  
import img31 from "/MealsnSips/img31.jpg";  
import img32 from "/MealsnSips/img32.jpg";  
import img33 from "/MealsnSips/img33.jpg";  
import img34 from "/MealsnSips/img34.jpg";  
import img35 from "/MealsnSips/img35.jpg";
import img36 from "/MealsnSips/img36.jpg";  
import img37 from "/MealsnSips/img37.jpg";  
import img38 from "/MealsnSips/img38.jpg";  
import img39 from "/MealsnSips/img39.jpg";  
import img40 from "/MealsnSips/img40.jpg";  
import img41 from "/MealsnSips/img41.jpg";  
import img42 from "/MealsnSips/img42.jpg";  
import img43 from "/MealsnSips/img43.jpg";  
import img44 from "/MealsnSips/img44.jpg";  
import img45 from "/MealsnSips/img45.jpg";
import img46 from "/MealsnSips/img46.jpg";
import img47 from "/MealsnSips/img47.jpg";
import img48 from "/MealsnSips/img48.jpg";
import img49 from "/MealsnSips/img49.jpg"; 
import img50 from "/MealsnSips/img50.jpg"; 
import img51 from "/MealsnSips/img51.jpg"; 
import img52 from "/MealsnSips/img52.jpg"; 
import img53 from "/MealsnSips/img53.jpg"; 


const MealsnSips = () => {
  const nav = useNavigate();
  
  let data = [
    {
      id: 1,
      imgSrc: img1,
    },
    {
      id: 2,
      imgSrc:img2,
    },
    {
      id: 3,
      imgSrc:img3,
    },
    {
      id: 4,
      imgSrc:img4,
    },
    {
      id: 5,
      imgSrc:img5,
    },
    {
      id: 6,
      imgSrc:img6,
    },
    {
      id: 7,
      imgSrc:img7,
    },
    {
      id: 8,
      imgSrc:img8,
    },
    {
      id: 9,
      imgSrc:img9,
    },
    {
      id: 10,
      imgSrc:img10,
    },
    {
      id: 11,
      imgSrc: img11,
    },
    {
      id: 12,
      imgSrc: img12,
    },
    {
      id: 13,
      imgSrc: img13,
    },
    {
      id: 14,
      imgSrc: img14,
    },
    {
      id: 15,
      imgSrc:img15,
    },
    {
      id: 16,
      imgSrc:img16,
    },
    {
      id: 17,
      imgSrc:img17,
    },
    {
      id: 18,
      imgSrc:img18,
    },
    {
      id: 19,
      imgSrc:img19,
    },
    {
      id: 20,
      imgSrc:img20,
    },
    {
      id: 21,
      imgSrc:img21,
    },
    {
      id: 22,
      imgSrc:img22,
    },
    {
      id: 23,
      imgSrc:img23,
    },
    {
      id: 24,
      imgSrc: img24,
    },
    {
      id: 25,
      imgSrc: img25,
    },
    {
      id: 26,
      imgSrc: img26,
    },
    {
      id: 27,
      imgSrc: img27,
    },
    {
      id: 28,
      imgSrc:img28,
    },
    {
      id: 29,
      imgSrc:img29,
    },
    {
      id: 30,
      imgSrc:img30,
    },
    {
      id: 31,
      imgSrc:img31,
    },
    {
      id: 32,
      imgSrc:img32,
    },
    {
      id: 33,
      imgSrc:img33,
    },
    {
      id: 34,
      imgSrc:img34,
    },
    {
      id: 35,
      imgSrc:img35,
    },
    {
        id: 36,
        imgSrc: img36,
      },
      {
        id: 37,
        imgSrc:img27,
      },
      {
        id: 38,
        imgSrc:img38,
      },
      {
        id: 39,
        imgSrc:img39,
      },
      {
        id: 40,
        imgSrc:img40,
      },
      {
        id: 41,
        imgSrc:img41,
      },
      {
        id: 42,
        imgSrc:img42,
      },
      {
        id: 43,
        imgSrc:img43,
      },
      {
        id: 44,
        imgSrc:img44,
      },
      {
        id: 45,
        imgSrc:img45,
      },
      {
        id: 46,
        imgSrc: img46,
      },
      {
        id: 47,
        imgSrc: img47,
      },
      {
        id: 48,
        imgSrc: img48,
      },
      {
        id: 49,
        imgSrc: img49,
      },
      {
        id: 50,
        imgSrc: img50,
      },
      {
        id: 51,
        imgSrc: img51,
      },
      {
        id: 52,
        imgSrc: img52,
      },
      {
        id: 53,
        imgSrc: img53,
      },
  ];  
  
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
                {data.map((item, index) => {
                    return (
                        <div className="w-full py-2 px-0" key={index} onClick={() => getImg(item.imgSrc)}>
                            <img
                                className="w-full h-auto cursor-pointer"
                                src={item.imgSrc}
                                alt={`Food Or Drink Image ${index + 1}`}
                            />
                        </div>
                    );
                })}
            </div>
            <footer className="m-10 mt-20 border-t-2 border-white mx-auto text-white lg:w-[40%] w-full"><p className="m-5 text-center">© 2024 NikosBrinias-photography.com All rights reserved | Designed and Developed by Nikos Karmaroudis</p></footer>
        </div>
    
</div>
    );
}
 
export default MealsnSips;