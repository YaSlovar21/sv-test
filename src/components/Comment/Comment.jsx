import { useState } from "react";
import { useSelector } from "react-redux";

function Comment({commentId, depth=0}) {
    const commentObj = useSelector(state.comments.byId[commentId]);
    const [isOpen, setIsOpen] = useState(depth===0 ? false: true);

    //на всякий случай проверим тип, вдруг на комменты можно отвечать "опросами" или чем-то подобным
    if (!comment.type !== 'comment') {
        return null;
    }

    const createMarkup = () => ({
        __html: commentObj.text,
    });

    return(
        <div className={`mt-4 relative ${depth > 0 ? 'border-l-2 pl-4' : ''}`}>

            {isOpen}

            {(depth === 0 && commentObj.kids?.length > 0) && (
                <button>
                    <span className="absolute inset-0">{isOpen ? 'Открыть' : 'Закрыть'}</span>
                </button>
            )}


        </div>
    )
}