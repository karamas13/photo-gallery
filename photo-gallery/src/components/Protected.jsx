import { Navigate, useNavigate } from "react-router";
import { useContext } from "react";
import { Context } from "../Context/AuthContext";

const Protected = ({children}) => {
    const {user} = useContext(Context);
 

    if(!user) {
        return <Navigate to='/signin' replace/>
    } else {
        return children;
    }
}
 
export default Protected;