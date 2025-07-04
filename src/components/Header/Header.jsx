import { NavLink, Route, Routes } from "react-router-dom";
import { ROUTES } from "../../utils/constants";

import { useDispatch, useSelector } from "react-redux";
import {  SegmentOutlined } from "@mui/icons-material";
import { Button, CircularProgress, IconButton } from "@mui/joy";

function Header({className, onRefresh, handleAsideOpen}) {
    const isNewsRefreshing = useSelector(store => store.news.isNewsRefreshing);
    
    return (
        <div className={`flex items-center justify-between p-8 max-mobile:px-2 ${className}`}>
            <button onClick={handleAsideOpen} className="hidden cursor-pointer p-1 mr-1 rounded transition-all hover:bg-gray-100 max-laptop:block self-start">
                <SegmentOutlined />
            </button>
            <NavLink className={({ isActive }) => (`mr-auto text-lg uppercase font-semibold ${!isActive? 'underline' : ''}`)} to={ROUTES.home}>
                <span>НОВОСТНАЯ ЛЕНТА</span>
            </NavLink>
            <Routes>
                <Route path={ROUTES.home} element={<Button onClick={onRefresh} type="button">{isNewsRefreshing ? <CircularProgress size="sm" /> : 'Обновить'}</Button> } />
            </Routes>
            
        </div>
    );
}

export default Header;