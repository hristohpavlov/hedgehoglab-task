import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export function ProtectedRoute({children}: any){
    const {token} = useAuth();

    if(!token){
        return <Navigate to="/login" replace/>
    }else{
        return children
    }
}