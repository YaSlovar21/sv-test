//import { useSelector } from "../../services/hooks";

import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { ROUTES } from "../../utils/constants";

/* пускаем только залогиненных */
const ProtectedRouteWithAuth = ({element}) => {

    const location = useLocation();
    const isLoggedIn = useSelector(store => store.user.isLoggedIn);

    return (
       isLoggedIn  ? element : <Navigate to={ROUTES.login} state={{ from: location}} />
    );
}

export default ProtectedRouteWithAuth;