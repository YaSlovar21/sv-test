import { Button, CircularProgress } from "@mui/joy";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComment, loadCommentTree } from "../../services/actions/comments";
import { formatCommentText } from "../../utils/utils";
import FormattedDate from "../FormattedDate/FormattedDate";

import './comment.css';

function Comment({commentId, depth=0}) {
    const dispatch = useDispatch();
    const commentsIdsLoading = useSelector(store => store.comments.commentsIdsLoading);
    const commentObj = useSelector(store => store.comments.itemsById[commentId]);
    const isTreeLoaded = useSelector(store => store.comments.treeLoaded[commentId]);
    const isTreeLoading = useSelector(store => store.comments.treeLoading[commentId]);

    // const isTreeLoading = depth === 0 ? store.comments.treeLoading[commentId] || false : false;

    const [isOpen, setIsOpen] = useState(false); //смущает


    useEffect(()=> {
        if (!commentObj) {
            dispatch(getComment(commentId))
        }
    }, [dispatch, commentId, commentObj])

    


    async function handleLoadTree() {
        if (depth > 0) 
            return;
        if (!isTreeLoaded && !isTreeLoading) {
           await dispatch(loadCommentTree(commentId));
        }
        setIsOpen(true);
    }

    if (commentsIdsLoading.includes(commentId)) return <div className="relative max-w-7xl mx-auto px-4 py-3 ${depth > 0 ? `border-l-2 pl-[${depth * 16}px]` : ''}`">111<CircularProgress /></div>;
    //на всякий случай проверим тип, вдруг на комменты можно отвечать "опросами" или чем-то подобным
     //или проверки в экшне достаточно ?
    if (!commentObj || commentObj.type !== 'comment' ) return null;

    

    return (
    <div className={`comment relative mb-5 w-full bg-sky-50 rounded-xl shadow max-w-7xl mx-auto px-4 py-3 ${depth > 0 ? `border-l-2` : ''}`} style={{marginLeft: depth*24 + 'px'}}>
        <span className="block text-sm">#{commentObj.id} <span className="font-bold"><FormattedDate unixDate={commentObj.time} /></span></span>
        <p className="text-base max-w-5xl">{!commentObj.deleted ? formatCommentText(commentObj.text) : 'Комменнтарий удален'}</p>
        
        {(depth === 0 && !isOpen && commentObj.kids?.length > 0) && (
            <button className="p-2 bg-sky-950 text-white font-semibold rounded transition-all cursor-pointer hover:bg-sky-500 hover:text-black" onClick={handleLoadTree}>
                Посмотреть вложенные комментарии ({commentObj.kids?.length})
            </button>
        )}
        {isTreeLoading ? 'загружается поддерево комментариев...': ''}
        {isOpen && <Button style={{marginBottom: 10}} onClick={()=>{setIsOpen(false)}}>Закрыть</Button>}
        {isOpen && commentObj.kids?.map(commentId => (
                <>
                    <Comment commentId={commentId} depth={depth+1} />
                </>
        ))}
    </div>
    )
        
    
}

export default Comment;