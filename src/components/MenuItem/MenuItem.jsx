import { Link } from "react-router-dom";
import Avatar from "../Avatar/Avatar";

function MenuItem({id, isActive}) {
    return(
        <Link to={`/${id}`}>
            <div className={`flex items-center p-[9px] rounded-full cursor-pointer transition-all hover:bg-gray-500 ${isActive ? 'bg-themepink-200' : ''}`}>
                <Avatar className="mr-2" />
                <span>{id}</span>
            </div>
        </Link>
    )
}

export default MenuItem;