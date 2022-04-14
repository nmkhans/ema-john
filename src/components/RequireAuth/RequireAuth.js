import { Navigate, useLocation } from "react-router-dom";
import useFirebase from './../../hooks/useFirebase';

const RequireAuth = ({children}) => {
    const {userInfo} = useFirebase();

    const location = useLocation();

    if(!userInfo) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
}

export default RequireAuth;