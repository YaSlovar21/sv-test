import Avatar from "../Avatar/Avatar";

function MenuItem({id, isActive}) {
    return(
        <div className={`flex items-center p-[9px] rounded-full cursor-pointer transition-all hover:bg-gray-500 ${isActive ? 'bg-themepink-200' : ''}`}>
            <Avatar className="mr-2" />
            <span>{id}</span>
        </div>
    )
}

export default MenuItem;