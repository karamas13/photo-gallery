import "./gallery.css";
import { useState } from "react";
import back from "/images/back.png";
import { useNavigate } from "react-router";
import Navbar from "../components/NavBar";
import logowhite from "/images/logowhite.png";
import { Helmet } from 'react-helmet'; 
import useFirestore from "../hooks/useFirestore";

  

const Individuals = () => {
  const nav = useNavigate();
  const { docs } = useFirestore('Individuals');
 
  
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
    
      <div className="overflow-x-hidden bg-[#333] mx-auto min-h-screen scrollbar-thin scrollbar-thumb-stone-950 scrollbar-track-stone-700 h-32 overflow-y-scroll">
        <div className="w-fit">
          <button onClick={() => nav(-1)} className="text-2xl m-5 bg-black py-1 text-white px-5 rounded-lg hover:opacity-60 text-center" aria-label="Go Back">
            <img className="object-cover" width="40" height="25" src={back} alt="Go Back Button" />
          </button>
        </div>
        <div className="w-screen flex flex-col justify-center items-center p-5">
          <img className="h-[9rem]" src={logowhite} alt="Nikos Brinias Logo" />
          <h1 className="text-4xl md:text-6xl font-serif mt-10 text-[#f1f1f1]">Individuals</h1>
          <p className="max-w-xl text-center text-[#f1f1f1] mt-5 font-serif">
          "Portraits are more than just pictures of people they’re crafted to capture the essence of human expression and emotion. They freeze moments in time, preserving the subtle details that often go unnoticed: expressions, gestures, and personalities. Whether for memories, showcasing style, or professional representation, portraits offer a window into who we are. A well-crafted portrait highlights the uniqueness of each individual, capturing their distinctive traits and overall vibe."
          </p>
        </div>

        <div className="columns-1 sm:columns-2 md:columns-3 w-full mx-auto mt-5">
        {docs && docs.map((doc) => {
            return (
              <div className="w-full py-2 px-0" key={doc.id} onClick={() => getImg(doc.url)}>
                <img
                    className="w-full h-auto cursor-pointer"
                    src={doc.url}
                    alt={`Individuals Image ${doc.id + 1}`}
                    loading="lazy" 
                />
              </div>
            );
          })}
        </div>
        <footer className="my-20 border-t-2 border-white mx-auto text-white lg:w-[40%] w-full"><p className="m-5 text-center">© 2026 NikosBrinias-photography.com All rights reserved | Designed and Developed by <a href="http://nickkaramaroudisdev.com" target="_blank" className="underline cursor-pointer">Nikos Karamaroudis</a></p></footer>
      </div>
    </div>
  );
}
 
export default Individuals;
