import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore"; // Import necessary functions

const useFirestore = (collectionName) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const collectionRef = collection(projectFirestore, collectionName); // Reference to the collection
        const q = query(collectionRef, orderBy('createdAt', 'desc')); // Create a query to order documents

        const unsub = onSnapshot(q, (snap) => {
            let documents = [];
            snap.forEach(doc => {
                documents.push({ ...doc.data(), id: doc.id });
            });
            setDocs(documents); // Set the documents only after processing the snapshot
        });

        return () => unsub(); // Clean up the listener on unmount

    }, [collectionName]); // Use collectionName as the dependency

    return { docs };
};

export default useFirestore;
