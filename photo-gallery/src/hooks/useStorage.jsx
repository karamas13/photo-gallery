import { useEffect, useState } from "react";
import { storage, projectFirestore } from "../firebase/config"; 
import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';


const useStorage = (file, selectedCategory) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  

  useEffect(() => {
    if (file) {
      const storageRef = ref(storage, file.name);
      const collectionRef = collection(projectFirestore, selectedCategory);
      const createdAt = serverTimestamp();

      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(percentage);
        },
        (err) => {
          setError(err);
        },
        async () => {
          const url = await getDownloadURL(storageRef);
          await addDoc(collectionRef, { url, createdAt }); 
          setUrl(url);
        }
      );

      // Clean up function to avoid memory leaks
      return () => {
        uploadTask.cancel();
      };
    }
  }, [file]);

  

  return { progress, url, error };
};





export default useStorage;
