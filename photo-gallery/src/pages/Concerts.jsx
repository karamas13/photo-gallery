import "./gallery.css";
import { useState } from "react";
import back from "/images/back.png";
import { useNavigate } from "react-router";

import img1 from "/Concerts/img1.jpg";  
import img3 from "/Concerts/img3.png";  
import img4 from "/Concerts/img4.png";  
import img5 from "/Concerts/img5.jpg";  
import img6 from "/Concerts/img6.jpg";  
import img7 from "/Concerts/img7.jpg";  
import img8 from "/Concerts/img8.jpg";  
import img9 from "/Concerts/img9.jpg";  
import img10 from "/Concerts/img10.jpg";
import img11 from "/Concerts/img11.jpg";
import img12 from "/Concerts/img12.jpg";
import img13 from "/Concerts/img13.jpg";
import img14 from "/Concerts/img14.jpg";  
import img15 from "/Concerts/img15.jpg";  
import img16 from "/Concerts/img16.jpg";  
import img17 from "/Concerts/img17.jpg";  
import img18 from "/Concerts/img18.jpg";  
import img19 from "/Concerts/img19.jpg";  
import img20 from "/Concerts/img20.jpg";  
import img21 from "/Concerts/img21.jpg";  
import img22 from "/Concerts/img22.jpg";  
import img23 from "/Concerts/img23.jpg";
import img24 from "/Concerts/img24.jpg";
import img25 from "/Concerts/img25.jpg";
import img26 from "/Concerts/img26.jpg";
import img27 from "/Concerts/img27.jpg";  
import img28 from "/Concerts/img28.jpg";  
import img29 from "/Concerts/img29.jpg";  
import img30 from "/Concerts/img30.jpg";  
import img31 from "/Concerts/img31.jpg";  
import img32 from "/Concerts/img32.jpg";  
import img33 from "/Concerts/img33.jpg";  
import img34 from "/Concerts/img34.jpg";  
import img35 from "/Concerts/img35.jpg";
import img36 from "/Concerts/img36.jpg";  
import img37 from "/Concerts/img37.jpg";  
import img38 from "/Concerts/img38.jpg";  
import img39 from "/Concerts/img39.jpg";  
import img40 from "/Concerts/img40.jpg";  
import img41 from "/Concerts/img41.jpg";  
import img42 from "/Concerts/img42.jpg";  
import img43 from "/Concerts/img43.jpg";  
import img44 from "/Concerts/img44.jpg";  
import img45 from "/Concerts/img45.jpg";
import img46 from "/Concerts/img46.jpg";
import img47 from "/Concerts/img47.jpg";
import img48 from "/Concerts/img48.jpg";
import img49 from "/Concerts/img49.jpg";  
 




const Ecosystem = () => {
  const nav = useNavigate();
  
  let data = [
    {
      id: 1,
      imgSrc: img1,
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
    {/* Full-Screen Image Modal with Transition */}
    {model && (
        <div className={`fixed inset-0 z-50 flex justify-center items-center bg-stone-950 bg-opacity-100 transition-opacity duration-300 ease-in-out ${model ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} onClick={closeModel}>
            <img
                className="w-auto max-w-[90%] max-h-[90%] block transition-transform duration-300 ease-in-out"
                src={tempingSrc}
                alt="Full-screen view"
            />
        </div>
    )}
    
    {/* Main Content */}
    
        <div className="overflow-x-hidden bg-[#05132b] mx-auto min-h-screen scrollbar scrollbar-thin scrollbar-thumb-stone-950 scrollbar-track-stone-700 h-32 overflow-y-scroll">
          <div className="w-fit">
           <button  onClick={() => nav(-1)} className="text-2xl m-5 bg-black py-1 text-white px-5 rounded-lg hover:opacity-60 text-center"><img src={back} /></button>
          </div>
           <div className="w-screen flex flex-col justify-center items-center p-5">
                <h1 className="text-4xl md:text-6xl font-serif mt-10 text-[#f1f1f1]">Concerts</h1>
                <p className="max-w-xl text-center text-[#f1f1f1] mt-5 font-serif">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut facilis cupiditate, rerum id asperiores iure in. Sit voluptas libero adipisci.
                </p>
            </div>

            <div className="columns-1 sm:columns-2 md:columns-3 w-full mx-auto mt-10">
                {data.map((item, index) => {
                    return (
                        <div className="w-full py-2 px-0" key={index} onClick={() => getImg(item.imgSrc)}>
                            <img
                                className="w-full h-auto hover:opacity-60 transition-opacity duration-200 cursor-pointer"
                                src={item.imgSrc}
                                alt={`Image ${index + 1}`}
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