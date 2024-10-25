import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from  'firebase/storage';
import  { getFirestore, serverTimestamp } from 'firebase/firestore';


const apiKey = `${import.meta.env.API_KEY}`;
const authDomain = `${import.meta.env.AUTH_DOMAIN}`;
const projectId = `${import.meta.env.PROJECT_ID}`;
const storageBucket = `${import.meta.env.STORAGE_BUCKET}`;
const messagingSenderId = `${import.meta.env.MESSAGING_SENDER_ID}`;
const appId = `${import.meta.env.APP_ID}`;

const firebaseConfig = {
    apiKey: apiKey,
    authDomain: authDomain,
    projectId:"photo-gallery-59fc9",
    storageBucket: "photo-gallery-59fc9.appspot.com",
    messagingSenderId: "1049410031174",
    appId: appId
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
const projectFirestore = getFirestore(app);
const timestamp = serverTimestamp();

export { storage, projectFirestore, timestamp };