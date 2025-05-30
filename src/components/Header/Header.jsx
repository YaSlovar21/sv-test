import { NavLink } from "react-router-dom";
import { ROUTES } from "../../utils/constants";

import { useDispatch, useSelector } from "react-redux";
import { AccountCircle, PhotoCamera } from "@mui/icons-material";
import { Button } from "@mui/joy";

function Header({className}) {
    
    const dispatch = useDispatch();

    function handleRefresh() {

    }

    return (
        <div className={`flex justify-between p-8 ${className}`}>
            <NavLink to={ROUTES.home}>
                <span className="text-lg uppercase font-semibold">НОВОСТНАЯ ЛЕНТА</span>
            </NavLink>
            <Button onClick={handleRefresh} type="button">Обновить</Button>
        </div>
    );
}

export default Header;