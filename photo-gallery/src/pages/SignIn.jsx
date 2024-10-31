import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router";

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function handleSignIn(e) {
        e.preventDefault(); 
        try {
            const user = await signInWithEmailAndPassword(auth, email, password);
            navigate('/UploadForm')
        } catch (error) {
            console.error("Error signing in:", error); 
        }
    }
    
    return ( 
        <div className="w-full h-screen flex flex-col justify-center items-center font-mono bg-[gray-100]"> 
            <h1 className="mx-auto mb-5 text-2xl sm:text-3xl lg:text-4xl">Sign In</h1>
            <form onSubmit={handleSignIn} className="flex flex-col justify-center items-center bg-[#f1f1f1] shadow-md rounded-lg p-5 w-full max-w-sm"> 
                <label className="mb-1 text-lg">Email</label>
                <input 
                    onChange={(e) => setEmail(e.target.value)} 
                    className="w-full rounded-xl mb-4 p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" 
                    type="email"
                    required 
                />
                <label className="mb-1 text-lg">Password</label>
                <input 
                    onChange={(e) => setPassword(e.target.value)} 
                    className="w-full rounded-xl mb-4 p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" 
                    type="password" 
                    required 
                />
                <button 
                    type="submit" 
                    className="bg-green-600 text-white text-lg p-2 rounded-full w-full hover:bg-green-700 transition duration-300"
                >
                    Sign In
                </button>
            </form>
        </div>
    );
}

export default SignIn;
