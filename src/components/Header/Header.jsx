import { NavLink, Route, Routes } from "react-router-dom";
import { ROUTES } from "../../utils/constants";

import { useDispatch, useSelector } from "react-redux";
import {  SegmentOutlined } from "@mui/icons-material";
import { Button, CircularProgress, IconButton } from "@mui/joy";
import { refreshNews } from "../../services/actions/news";

function Header({className, onRefresh, handleAsideOpen}) {
    
    const isNewsRefreshing = useSelector(store => store.news.isNewsRefreshing);
    
    return (
        <div className={`flex justify-between p-8 ${className}`}>
            <button onClick={handleAsideOpen} className="hidden max-laptop:block self-start">
                <SegmentOutlined />
            </button>
            <NavLink className="mr-auto" to={ROUTES.home}>
                <span className="text-lg uppercase font-semibold">НОВОСТНАЯ ЛЕНТА</span>
            </NavLink>
            <Routes>
                <Route path={ROUTES.home} element={<Button onClick={onRefresh} type="button">{isNewsRefreshing ? <CircularProgress size="sm" /> : 'Обновить'}</Button> } />
            </Routes>
            
        </div>
    );
}

export default Header;