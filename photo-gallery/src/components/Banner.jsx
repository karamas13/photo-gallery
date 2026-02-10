import React from 'react';
import './styles.css'; 
import { useNavigate } from 'react-router';
import perspective from '/images/perspective.avif';
import { Helmet } from 'react-helmet';

const Banner = () => {
    const nav = useNavigate();

    const images = [
        '/images/Banner_ 1.avif',
        '/images/Banner_ 2.avif',
        '/images/Banner_ 3.avif',
        '/images/Banner_ 4.avif',
        '/images/Banner_ 5.avif',
        '/images/Banner_ 6.avif',
        '/images/Banner_ 7.avif',
        '/images/Banner_ 8.avif',
        '/images/Banner_ 9.avif',
        '/images/Banner_ 10.avif',
    ];

    return ( 
      
        
        <div className="banner relative w-full h-screen text-center overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-stone-50 via-stone-900 to-stone-950 bg-cover bg-center">
            <div
                className="slider absolute top-10 left-1/2 transform -translate-x-1/2"
                style={{ '--quantity': images.length }}
            >
                {images.map((src, index) => (
                    <div className="item absolute inset-0 z-0" style={{ '--position': index + 1 }} key={index}>
                        <img src={src} alt={"Professional photography showcase by Nikos Brinias"} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>

            <div className="flex flex-col justify-center items-center absolute left-1/2 transform -translate-x-1/2 w-full max-w-screen-lg h-screen max-h-screen-lg px-4">
                <img className="lg:w-[40rem] md:w-[30rem] mb-[7rem] w-auto h-auto" src={perspective} alt="Nikos Brinias Logo" loading="lazy"/>
            </div>

               <div className="w-screen h-screen flex items-end justify-center mt-5">
                <div className="flex flex-col items-center justify-center w-full mb-10"> 
                 <button onClick={() => {nav('/HomePage')}} class="mb-5 text-2xl rounded-lg text-black hover:before:bg-black relative h-[50px] w-40 overflow-hidden border border-white bg-white px-3 text-black-900 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-black before:transition-all before:duration-500 hover:text-white hover:shadow-white hover:before:left-0 hover:before:w-full"><span class="relative z-1">Explore</span></button>
                 </div>
            </div>

            
            </div>

    );
};

export default Banner;
