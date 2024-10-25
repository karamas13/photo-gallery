import { useEffect } from "react";
import useStorage from "../hooks/useStorage";

const ProgressBar = ({ file, setFile, selectedCategory, }) => {
  const { url, progress } = useStorage(file, selectedCategory);
  
  useEffect(() =>{
   if (url) {
    setFile(null);
   }
  }, [url, setFile])

    return ( 
        <div style={{width: progress + '%'}} className="h-[5px] bg-green-600 w-full my-3">

        </div>
     );
}
 
export default ProgressBar;