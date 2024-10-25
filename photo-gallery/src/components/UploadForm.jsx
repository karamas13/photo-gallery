import { useState } from "react";
import ProgressBar from "./ProgressBar";
import useStorage from "../hooks/useStorage";
import NavBar from "./NavBar";




const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('Ecosystems');

    const types = ['image/png', 'image/jpeg']
    
    const changeHandler = (e) => {

        let selected = e.target.files[0];
        
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Please select a valid file type (png or jpeg).')
        }
    }

    
    return ( 
    <div className="h-screen w-screen flex justify-center items-center font-serif bg-[#333]">
      < NavBar />
    <form id="uploadForm" className="h-[20rem] text-center text-white">
      <h1 className="text-3xl my-10">Image Uploader</h1>
       {/* Dropdown Menu for Categories */}
       <select 
          className="block w-full text-lg text-gray-900 border-gray-300 rounded-lg cursor-pointer bg-gray-50 my-10"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value='Ecosystems'>Ecosystems</option>
          <option value='Individuals'>Individuals</option>
          <option value='MealsnSips'>Meals n' Sips</option>
          <option value='Concerts'>Concerts</option>
        </select>
      <input type="file" id="img_upload" placeholder="+" onChange={ changeHandler } className="block w-full text-lg  text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600" />
     <div className="my-10">
        { error && <div className="text-red-600">{ error }</div>}
        { file && <div className="">{ file.name }</div>}
        { file && <ProgressBar file={file} setFile={ setFile } selectedCategory={selectedCategory} setSelectedCategory={selectedCategory}/> }
      </div>
    </form> 
    </div>
    );
}
 
export default UploadForm;