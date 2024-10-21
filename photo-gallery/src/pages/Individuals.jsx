import "./gallery.css";
import { useState } from "react";
import back from "/images/back.png";
import { useNavigate } from "react-router";
import Navbar from "../components/NavBar";
import logowhite from "/images/logowhite.png";
import { Helmet } from 'react-helmet'; 

import img1 from "/Individuals/img1.jpg";  
import img2 from "/Individuals/img1.png";  
import img3 from "/Individuals/img2.jpg";  
import img4 from "/Individuals/img2.png";  
import img5 from "/Individuals/img3.jpg";  
import img6 from "/Individuals/img3.png";  
import img7 from "/Individuals/img4.jpg";  
import img8 from "/Individuals/img4.png";  
import img9 from "/Individuals/img5.jpg";  
import img10 from "/Individuals/img5.png";
import img11 from "/Individuals/img5.jpg";
import img12 from "/Individuals/img6.jpg";
import img13 from "/Individuals/img6.png";
import img14 from "/Individuals/img7.jpg";  
import img15 from "/Individuals/img8.jpg";  
import img16 from "/Individuals/img9.jpg";  
import img17 from "/Individuals/img10.jpg";  
import img18 from "/Individuals/img11.jpg";  
import img19 from "/Individuals/img12.jpg";  
import img20 from "/Individuals/img13.jpg";  
import img21 from "/Individuals/img14.jpg";  
import img22 from "/Individuals/img15.jpg";  
import img23 from "/Individuals/img16.jpg";
import img24 from "/Individuals/img17.jpg";
import img25 from "/Individuals/img18.jpg";
import img26 from "/Individuals/img19.jpg";
import img27 from "/Individuals/img20.jpg";  
import img28 from "/Individuals/img21.jpg";  
import img29 from "/Individuals/img22.jpg";  
import img30 from "/Individuals/img23.jpg";  
import img31 from "/Individuals/img24.jpg";  
import img32 from "/Individuals/img25.jpg";  
import img33 from "/Individuals/img26.jpg";  
import img34 from "/Individuals/img27.jpg";  
import img35 from "/Individuals/img28.jpg";  
import img36 from "/Individuals/img29.jpg";  
import img37 from "/Individuals/img30.jpg";  
import img38 from "/Individuals/img31.jpg";  
import img39 from "/Individuals/img32.jpg";  
import img40 from "/Individuals/img33.jpg"; 

  

const Individuals = () => {
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
    { id: 36, imgSrc: img36 },
    { id: 37, imgSrc: img37 },
    { id: 38, imgSrc: img38 },
    { id: 39, imgSrc: img39 },
    { id: 40, imgSrc: img40 },
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
        <title>Individuals Gallery - NikosBrinias Gallery</title>
        <meta name="description" content="Explore stunning portrait photography capturing the essence of individuals and their unique expressions." />
        <meta name="keywords" content="Individuals, Portraits, People, Photography, Gallery" />
      </Helmet>
      
      <Navbar />
      {model && (
          <div className={`fixed inset-0 z-50 flex justify-center items-center bg-stone-950 bg-opacity-100 transition-opacity duration-300 ease-in-out`} onClick={closeModel}>
              <img
                  className="w-auto max-w-[90%] max-h-[90%] block transition-transform duration-300 ease-in-out"
                  src={tempingSrc}
                  alt="Full-screen view of individual portrait"
              />
          </div>
      )}
    
      <div className="overflow-x-hidden bg-[#333] mx-auto min-h-screen scrollbar scrollbar-thin scrollbar-thumb-stone-950 scrollbar-track-stone-700 h-32 overflow-y-scroll">
        <div className="w-fit">
          <button onClick={() => nav(-1)} className="text-2xl m-5 bg-black py-1 text-white px-5 rounded-lg hover:opacity-60 text-center" aria-label="Go Back">
            <img src={back} alt="Go Back Button" />
          </button>
        </div>
        <div className="w-screen flex flex-col justify-center items-center p-5">
          <img className="h-[9rem]" src={logowhite} alt="Logo" />
          <h1 className="text-4xl md:text-6xl font-serif mt-10 text-[#f1f1f1]">Individuals</h1>
          <p className="max-w-xl text-center text-[#f1f1f1] mt-5 font-serif">
            "Portraits are more than just pictures of people; they’re crafted to capture the essence of human expression and emotion..."
          </p>
        </div>

        <div className="columns-1 sm:columns-2 md:columns-3 w-full mx-auto mt-5">
          {data.map((item, index) => {
              return (
                  <div className="w-full py-2 px-0" key={index} onClick={() => getImg(item.imgSrc)}>
                      <img
                          className="w-full h-auto cursor-pointer"
                          src={item.imgSrc}
                          alt={`Portrait Image ${index + 1}`} // Descriptive alt text for SEO
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
 
export default Individuals;
