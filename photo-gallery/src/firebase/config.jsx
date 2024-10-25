import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from  'firebase/storage';
import  { getFirestore, serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
   
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
const projectFirestore = getFirestore(app);
const timestamp = serverTimestamp();

export { storage, projectFirestore, timestamp };