import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="absolute right-0 top-0 rounded-s-md bg-stone-200 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 backdrop-saturate-50 backdrop-contrast-125 lg:mr-3 lg:h-[2.5rem] md:h-[2.5rem] mr-0 lg:flex items-center md:flex items-center">
        
            <button
                className="text-white p-4 md:hidden h-[3rem] text-black flex justify-center items-center"
                onClick={toggleMenu}
            >
                {isOpen ? 'X' : 'Menu'} 
            </button>
         
            <div className={`flex flex-col md:flex-row lg:h-[2rem]  h-[22rem] transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[20rem]' : 'lg:max-h-[2rem] lg:overflow-visible md:max-h-[2rem] md:overflow-visible md:block max-h-0 overflow-hidden'}`}>
                <a className="text-white text-lg p-4 cursor-pointer hover:text-stone-600 duration-200 ease-in-out" href='/HomePage'>Home</a>
                <a className="text-white text-lg p-4 cursor-pointer hover:text-stone-600 duration-200 ease-in-out" href='/Ecosystem'>Ecosystems</a>
                <a className="text-white text-lg p-4 cursor-pointer hover:text-stone-600 duration-200 ease-in-out" href='/Individuals'>Individuals</a>
                <a className="text-white text-lg p-4 cursor-pointer hover:text-stone-600 duration-200 ease-in-out" href='/MealsnShips '>Meals n' Sips</a>
                <a className="text-white text-lg p-4 cursor-pointer hover:text-stone-600 duration-200 ease-in-out" href='/Concerts'>Concerts</a>
            </div>
        </div>
    );
};

export default Navbar;
