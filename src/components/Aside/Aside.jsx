import { CloseOutlined } from "@mui/icons-material";
import { CircularProgress, IconButton } from "@mui/joy";
import { useSelector } from "react-redux";
import MenuItem from "../MenuItem/MenuItem";

function Aside({className, onClose}) {
    const ids = useSelector(store => store.news.newsIds);

    function handleClose() {
        onClose();
    }

    return  (
        <div className={`${className}`}>
            <button onClick={handleClose} className="hidden max-laptop:block self-start cursor-pointer p-1 mb-2 ml-2 rounded-full transition-all hover:bg-gray-50">
                <CloseOutlined />
            </button>
            <div className="max-h-screen sticky top-0 no-scrollbar overflow-y-auto">
                {ids.length ? ids.map(n=> <MenuItem key={n} id={n} />) : <CircularProgress />}
            </div>
        </div>
    );
}

export default Aside;