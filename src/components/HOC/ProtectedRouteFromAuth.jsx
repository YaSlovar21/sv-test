//import { useSelector } from "../../services/hooks";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { ROUTES } from "../../utils/constants";

/* не пускаем залогиненных  */
const ProtectedRouteFromAuth = ({element}) => {
    const isLoggedIn = useSelector(store => store.user.isLoggedIn);
    const location = useLocation();
    const from = location.state?.from || '/';
    console.log(from);
    
    if (isLoggedIn) {
        return (
          <Navigate to={from} />
        );
    } else {
        return (element);
    }
}

export default ProtectedRouteFromAuth;