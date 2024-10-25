import "./gallery.css";
import { useState } from "react";
import back from "/images/back.png";
import { useNavigate } from "react-router";
import Navbar from "../components/NavBar";
import logowhite from "/images/logowhite.png";
import { Helmet } from 'react-helmet'; 
import useFirestore from "../hooks/useFirestore";


const Ecosystem = () => {
  const nav = useNavigate();
  const { docs } = useFirestore('Ecosystems');
  
  
  
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
        <footer className="m-10 mt-20 border-t-2 border-white mx-auto text-white lg:w-[40%] w-full"><p className="m-5 text-center">© 2024 NikosBrinias-photography.com All rights reserved | Designed and Developed by Nikos Karmaroudis</p></footer>
      </div>
    </div>
  );
}
 
export default Ecosystem;
