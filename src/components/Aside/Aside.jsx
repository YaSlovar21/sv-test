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
         
        <div className={`${className} h-[98vh] sticky top-0 no-scrollbar overflow-y-auto  flex flex-col p-9 bg-themepink-300 olpc:bg-themepink-100`}>
            <IconButton onClick={handleClose} className="hidden max-laptop:block self-start">
                <CloseOutlined />
            </IconButton>
            {ids.length ? ids.map(n=> <MenuItem id={n} />) : <CircularProgress />}
        </div>
    );
}

export default Aside;