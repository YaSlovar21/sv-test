import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCommentTree } from "../../services/actions/comments";

function Comment({commentId, depth=0}) {
    const dispatch = useDispatch();

    const commentObj = useSelector(store => store.comments.byId[commentId]);
    const treeLoaded = useSelector(store=> store.comments.treeLoaded[commentId]);

    const [isOpen, setIsOpen] = useState(depth===0 ? false: true); //смущает

    //на всякий случай проверим тип, вдруг на комменты можно отвечать "опросами" или чем-то подобным
    if (!comment.type !== 'comment') {
        return null;
    }

    const createMarkup = () => ({
        __html: commentObj.text,
    });

    function handleLoadTree() {
        if (!treeLoaded) {
            dispatch(loadCommentTree(commentId));
        }
    }

    return(
        <div className={`mt-4 relative ${depth > 0 ? 'border-l-2 pl-4' : ''}`}>

            {isOpen}

            {(depth === 0 && commentObj.kids?.length > 0) && (
                <button onClick={handleLoadTree}>
                    <span className="absolute inset-0">{isOpen ? 'Открыть' : 'Закрыть'}</span>
                </button>
            )}


        </div>
    )
}