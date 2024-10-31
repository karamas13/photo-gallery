import { useState } from "react";
import ProgressBar from "./ProgressBar";
import NavBar from "./NavBar";
import SignOut from "./SignOut";
import { ref, deleteObject } from "firebase/storage"; // Import necessary Firebase functions
import { storage } from "../firebase/config"; // Make sure to have storage imported
import { doc, deleteDoc } from "firebase/firestore"; // Import Firestore delete function
import useFirestore from "../hooks/useFirestore"; // Custom hook to retrieve documents
import { projectFirestore } from "../firebase/config";

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('Ecosystems');
    const { docs } = useFirestore(selectedCategory); // Use the selected category to fetch documents

    const types = ['image/png', 'image/jpeg'];

    const changeHandler = (e) => {
        let selected = e.target.files[0];
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Please select a valid file type (png or jpeg).');
        }
    }

    const handleDelete = async (docId, photoUrl) => {
        const photoRef = ref(storage, photoUrl); // Reference to the photo in storage
        try {
            // Delete from storage
            await deleteObject(photoRef);
            console.log("Photo deleted successfully");

            // Delete corresponding Firestore document
            const docRef = doc(projectFirestore, 'Ecosystems', docId); // Reference to the Firestore document
            await deleteDoc(docRef);
            console.log("Firestore document deleted successfully");

            // Optionally, you may want to refresh your local state if necessary
            // Implement local state update here if needed to reflect changes in the UI
        } catch (error) {
            console.error("Error deleting photo:", error);
        }
    };

    return ( 
        <div className="min-h-screen flex flex-col items-center justify-center font-serif bg-[#333] p-5">
            <NavBar />
            <SignOut />
            <form id="uploadForm" className="w-full max-w-lg mx-auto bg-gray-800 p-5 mt-20 rounded-lg text-center text-white shadow-lg">
                <h1 className="text-3xl my-5">Image Uploader</h1>
                
                {/* Dropdown Menu for Categories */}
                <select 
                    className="block w-full p-2 text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 my-5"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <option value='Ecosystems'>Ecosystems</option>
                    <option value='Individuals'>Individuals</option>
                    <option value='MealsnSips'>Meals n' Sips</option>
                    <option value='Concerts'>Concerts</option>
                </select>

                <input 
                    type="file" 
                    id="img_upload" 
                    onChange={changeHandler} 
                    className="block w-full p-2 text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 my-5"
                />
                
                <div className="my-5">
                    {error && <div className="text-red-600">{error}</div>}
                    {file && <div className="">{file.name}</div>}
                    {file && <ProgressBar file={file} setFile={setFile} selectedCategory={selectedCategory} />}
                </div>
            </form> 

            <div className="columns-1 sm:columns-2 md:columns-3 w-full mx-auto mt-[150px]">
                {docs && docs.map((doc) => (
                    
                    <div className="w-full py-2 px-0 flex flex-col justify-start items-start" key={doc.id}>                        
                        
                        <img
                            className="w-full h-auto cursor-pointer"
                            src={doc.url}                      
                        />
                   <button onClick={() => handleDelete(doc.id, doc.url)} className="absolute bg-red-600 text-xl rounded-sm text-[#f1f1f1] p-1 font-mono">Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UploadForm;
