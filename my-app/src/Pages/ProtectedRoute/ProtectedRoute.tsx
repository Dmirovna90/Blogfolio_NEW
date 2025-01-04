import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({children}: {children: React.ReactElement}) => {
    const {auth} = useSelector((state) => state.signIn);
    if(!auth){
        return <Navigate to = '/sign-in' />;
    }
    return children
}
export default ProtectedRoute;