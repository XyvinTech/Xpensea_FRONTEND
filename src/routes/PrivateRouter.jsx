import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";





// eslint-disable-next-line react/prop-types
export const PrivateRoute = ({  children }) => {
    const { isAuth } = useAuthStore(); 
    return isAuth ? children : <Navigate to="/" />;
  };
  