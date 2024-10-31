import { ref, deleteObject } from "firebase/storage";
import {storage} from "../firebase/config";

// Existing code...

const deleteImage = async (photoUrl) => {
    const photoRef = ref(storage, photoUrl); // Construct a reference to the file to delete
    try {
        await deleteObject(photoRef);
        console.log("Photo deleted successfully");
        // Optionally update state to remove the photo from the UI
    } catch (error) {
        console.error("Error deleting photo:", error);
    }
};


// Export the delete function
export default  deleteImage ;
