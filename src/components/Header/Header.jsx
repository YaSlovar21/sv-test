import { NavLink } from "react-router-dom";
import { ROUTES } from "../../utils/constants";

import { useDispatch, useSelector } from "react-redux";
import { AccountCircle, PhotoCamera } from "@mui/icons-material";
import { Button } from "@mui/joy";

function Header() {
    
    const dispatch = useDispatch();

    function handleRefresh() {

    }

    return (
        <div className="flex w-full bg-gray-300 justify-between p-8">
            <NavLink to={ROUTES.home}>
                <span className="text-lg uppercase font-semibold">НОВОСТНАЯ ЛЕНТА</span>
            </NavLink>
            <Button onClick={handleRefresh} type="button">Обновить</Button>
        </div>
    );
}

export default Header;