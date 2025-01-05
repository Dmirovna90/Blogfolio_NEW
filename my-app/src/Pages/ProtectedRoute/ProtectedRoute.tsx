import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import { checkValidToken } from "../../store/signInSlice";
const ProtectedRoute = ({children}: {children: React.ReactElement}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(checkValidToken());
      }, []);
    const {auth} = useSelector((state) => state.signIn);
    if(!auth){
        return <Navigate to = '/sign-in' />;
    }
    return children;
};
export default ProtectedRoute;