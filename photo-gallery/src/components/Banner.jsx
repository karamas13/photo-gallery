import React from 'react';
import './styles.css'; 

const Banner = () => {
    const images = [
        '/images/dragon_1.jpg',
        '/images/dragon_2.jpg',
        '/images/dragon_3.jpg',
        '/images/dragon_4.jpg',
        '/images/dragon_5.jpg',
        '/images/dragon_6.jpg',
        '/images/dragon_7.jpg',
        '/images/dragon_8.jpg',
        '/images/dragon_9.jpg',
        '/images/dragon_10.jpg',
    ];

    return (
        <div className="banner relative w-full h-screen text-center overflow-hidden  bg-cover bg-center">
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

            {/* Responsive text container */}
            <div className="flex flex-col justify-center items-center absolute left-1/2 transform -translate-x-1/2 w-full max-w-screen-lg h-screen max-h-screen-lg px-4">
                <h1 className="font-bold text-gray-800 text-6xl md:text-8xl lg:text-9xl relative">Nikos Brinias</h1>
                <div className="author text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold">Photography</h2>
                </div>
            </div>

            {/* Responsive button */}
               <div className="w-screen h-screen flex items-end justify-center ">
               <button class="mb-20 text-2xl rounded-lg text-red hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden border border-red-500 bg-white px-3 text-red-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full"><span class="relative z-10">View-Gallery</span></button>
            
            </div>
        </div>
    );
};

export default Banner;
