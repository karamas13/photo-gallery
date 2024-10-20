import "./gallery.css";
import { useState } from "react";
import back from "/images/back.png";
import { useNavigate } from "react-router";
import Navbar from "../components/NavBar";
import logowhite from "/images/logowhite.png";
import { Helmet } from 'react-helmet'; 

import img1 from "/Ecosystem/img1.jpg";  
import img2 from "/Ecosystem/img2.jpg";  
import img3 from "/Ecosystem/img3.jpg";  
import img4 from "/Ecosystem/img4.jpg";  
import img5 from "/Ecosystem/img5.jpg";  
import img6 from "/Ecosystem/img6.jpg";  
import img7 from "/Ecosystem/img7.jpg";  
import img8 from "/Ecosystem/img8.jpg";  
import img9 from "/Ecosystem/img9.jpg";  
import img10 from "/Ecosystem/img10.jpg";
import img11 from "/Ecosystem/img11.jpg";
import img12 from "/Ecosystem/img12.jpg";
import img13 from "/Ecosystem/img13.jpg";
import img14 from "/Ecosystem/img14.jpg";  
import img15 from "/Ecosystem/img15.jpg";  
import img16 from "/Ecosystem/img16.jpg";  
import img17 from "/Ecosystem/img17.jpg";  
import img18 from "/Ecosystem/img18.jpg";  
import img19 from "/Ecosystem/img19.jpg";  
import img20 from "/Ecosystem/img20.jpg";  
import img21 from "/Ecosystem/img21.jpg";  
import img22 from "/Ecosystem/img22.jpg";  
import img23 from "/Ecosystem/img23.jpg";
import img24 from "/Ecosystem/img24.jpg";
import img25 from "/Ecosystem/img25.jpg";
import img26 from "/Ecosystem/img26.jpg";
import img27 from "/Ecosystem/img27.jpg";  
import img28 from "/Ecosystem/img28.jpg";  
import img29 from "/Ecosystem/img29.jpg";  
import img30 from "/Ecosystem/img30.jpg";  
import img31 from "/Ecosystem/img31.jpg";  
import img32 from "/Ecosystem/img32.jpg";  
import img33 from "/Ecosystem/img33.jpg";  
import img34 from "/Ecosystem/img34.jpg";  
import img35 from "/Ecosystem/img35.jpg";  

const Ecosystem = () => {
  const nav = useNavigate();
  
  let data = [
    { id: 1, imgSrc: img1 },
    { id: 2, imgSrc: img2 },
    { id: 3, imgSrc: img3 },
    { id: 4, imgSrc: img4 },
    { id: 5, imgSrc: img5 },
    { id: 6, imgSrc: img6 },
    { id: 7, imgSrc: img7 },
    { id: 8, imgSrc: img8 },
    { id: 9, imgSrc: img9 },
    { id: 10, imgSrc: img10 },
    { id: 11, imgSrc: img11 },
    { id: 12, imgSrc: img12 },
    { id: 13, imgSrc: img13 },
    { id: 14, imgSrc: img14 },
    { id: 15, imgSrc: img15 },
    { id: 16, imgSrc: img16 },
    { id: 17, imgSrc: img17 },
    { id: 18, imgSrc: img18 },
    { id: 19, imgSrc: img19 },
    { id: 20, imgSrc: img20 },
    { id: 21, imgSrc: img21 },
    { id: 22, imgSrc: img22 },
    { id: 23, imgSrc: img23 },
    { id: 24, imgSrc: img24 },
    { id: 25, imgSrc: img25 },
    { id: 26, imgSrc: img26 },
    { id: 27, imgSrc: img27 },
    { id: 28, imgSrc: img28 },
    { id: 29, imgSrc: img29 },
    { id: 30, imgSrc: img30 },
    { id: 31, imgSrc: img31 },
    { id: 32, imgSrc: img32 },
    { id: 33, imgSrc: img33 },
    { id: 34, imgSrc: img34 },
    { id: 35, imgSrc: img35 },
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
        <title>Ecosystem Gallery - Nikos Brinias Gallery</title>
        <meta name="description" content="Explore our stunning ecosystem gallery showcasing breathtaking landscape photography." />
        <meta name="keywords" content="Ecosystem, Landscape Photography, Nature, Gallery, Environment" />
      </Helmet>
      <Navbar />
      {model && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-stone-950 bg-opacity-100 transition-opacity duration-300 ease-in-out" onClick={closeModel}>
            <img
                className="w-auto max-w-[90%] max-h-[90%] block transition-transform duration-300 ease-in-out"
                src={tempingSrc}
                alt="Full-screen view of the ecosystem"
            />
        </div>
      )}
    
      <div className="overflow-x-hidden bg-[#071001] mx-auto min-h-screen scrollbar scrollbar-thin scrollbar-thumb-stone-950 scrollbar-track-stone-700 h-32 overflow-y-scroll">
        <div className="w-fit">
          <button onClick={() => nav(-1)} className="text-2xl m-5 bg-black py-1 text-white px-5 rounded-lg hover:opacity-60 text-center" aria-label="Go Back">
            <img src={back} alt="Go Back Button" />
          </button>
        </div>
        <div className="w-screen flex flex-col justify-center items-center p-5">
          <img className="h-[9rem]" src={logowhite} alt="Logo" />
          <h1 className="text-4xl md:text-6xl font-serif mt-10 text-[#f1f1f1]">Ecosystems</h1>
          <p className="max-w-xl text-center text-[#f1f1f1] mt-5 font-serif">
            "Landscape photography offers a glimpse into the extraordinary. Capturing breathtaking views and hidden places from the perfect point of view. These images transport viewers to locations where nature's beauty is untouched..."
          </p>
        </div>

        <div className="columns-1 sm:columns-2 md:columns-3 w-full mx-auto mt-5">
          {data.map((item, index) => {
            return (
              <div className="w-full py-2 px-0" key={index} onClick={() => getImg(item.imgSrc)}>
                <img
                    className="w-full h-auto cursor-pointer"
                    src={item.imgSrc}
                    alt={`Ecosystem Image ${index + 1}`} // Descriptive alt text for SEO
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
 
export default Ecosystem;
