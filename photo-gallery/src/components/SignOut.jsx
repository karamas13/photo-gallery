import { signOut } from 'firebase/auth';
import { auth } from "../firebase/config";

const SignOut = () => {

    async function handleSignOut() {
       try {
        await signOut(auth);
        console.log(user)
       } catch(e) {
        console.log(e)
       } 
    }

    return ( 
    <div className="absolute left-0 top-0 m-5">
      <button onClick={handleSignOut} className="bg-red-600 text-xl p-2 mt-2 rounded-full text-white font-mono hover:opacity-80">Sign Out</button>
    </div>
     );
}
 
export default SignOut;