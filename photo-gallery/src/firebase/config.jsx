import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from  'firebase/storage';
import  { getFirestore, serverTimestamp } from 'firebase/firestore';
import { getAuth } from "firebase/auth";


const apiKey = `${import.meta.env.VITE_API_KEY}`;
const authDomain = `${import.meta.env.VITE_AUTH_DOMAIN}`;
const projectId = `${import.meta.env.VITE_PROJECT_ID}`;
const storageBucket = `${import.meta.env.VITE_STORAGE_BUCKET}`;
const messagingSenderId = `${import.meta.env.VITE_MESSAGING_SENDER_ID}`;
const appId = `${import.meta.env.VITE_APP_ID}`;

const firebaseConfig = {
    apiKey: apiKey,
    authDomain: authDomain,
    projectId:projectId,
    storageBucket: storageBucket,
    messagingSenderId: messagingSenderId,
    appId: appId
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
const projectFirestore = getFirestore(app);
const auth = getAuth(app); // Initialize authentication
const timestamp = serverTimestamp();


export { storage, projectFirestore, timestamp, auth };