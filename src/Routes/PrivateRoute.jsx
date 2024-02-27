
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const PrivateRoute = ({children,loading}) => {
    const {user} = useAuth()
    const location = useLocation()
    if(loading){
        return
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" state={{from : location}} replace></Navigate>
}
    

export default PrivateRoute;