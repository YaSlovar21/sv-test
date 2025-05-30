import { CircularProgress } from "@mui/joy";
import { useSelector } from "react-redux";
import MenuItem from "../MenuItem/MenuItem";

function Aside({className}) {
    const ids = useSelector(store => store.news.newsIds)
    return  (
        <div className={`${className} h-screen no-scrollbar overflow-y-auto  flex flex-col p-9 bg-themepink-300 olpc:bg-themepink-100`}>
            {ids.length ? ids.map(n=> <MenuItem id={n} />) : <CircularProgress />}
        </div>
    );
}

export default Aside;