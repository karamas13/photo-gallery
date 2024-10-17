import React from 'react';
import './styles.css'; 
import { useNavigate } from 'react-router';
import logo3 from '/images/logo3.png';
import perspective from '/images/perspective.png';

const Banner = () => {
    const nav = useNavigate();

    const images = [
        '/images/dragon_1.png',
        '/images/dragon_ 2.png',
        '/images/dragon_ 3.png',
        '/images/dragon_ 4.png',
        '/images/dragon_ 5.png',
        '/images/dragon_ 6.png',
        '/images/dragon_ 7.png',
        '/images/dragon_ 8.png',
        '/images/dragon_ 9.png',
        '/images/dragon_ 10.png',
    ];

    return (
        <div className="banner relative w-full h-screen text-center overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-stone-50 via-stone-900 to-stone-950 bg-cover bg-center">
            <div
                className="slider absolute top-10 left-1/2 transform -translate-x-1/2"
                style={{ '--quantity': images.length }}
            >
                {images.map((src, index) => (
                    <div className="item absolute inset-0 z-0" style={{ '--position': index + 1 }} key={index}>
                        <img src={src} alt={`Dragon ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>

            <div className="flex flex-col justify-center items-center absolute left-1/2 transform -translate-x-1/2 w-full max-w-screen-lg h-screen max-h-screen-lg px-4">
                <img className="lg:w-[40rem] md:w-[20rem] mb-[7rem] h-auto" src={perspective} />
            </div>

               <div className="w-screen h-screen flex items-end justify-center mt-5">
               <button onClick={() => {nav('/HomePage')}} class="mb-20 text-2xl rounded-lg text-black hover:before:bg-black relative h-[50px] w-40 overflow-hidden border border-white bg-white px-3 text-black-900 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-black before:transition-all before:duration-500 hover:text-white hover:shadow-white hover:before:left-0 hover:before:w-full"><span class="relative z-1">Explore</span></button>
            
            </div>
        </div>
    );
};

export default Banner;
