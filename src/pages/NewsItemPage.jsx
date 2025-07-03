import { CircularProgress } from "@mui/joy";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Comment from "../components/Comment/Comment";
import NewCardDetails from "../components/NewCardDetails/NewCardDetails";
import { getNewById } from "../services/actions/news";

function NewsItemPage() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const news = useSelector(store=> store.news.news);
    const newsItem = news[id];

    useEffect(()=> {
        if (!newsItem) {
            dispatch(getNewById(id))
        }
    }, []);

    

    return (
        <div className="max-w-7xl mx-auto">
            {newsItem ?  <NewCardDetails {...newsItem} /> : <CircularProgress />} 
            {newsItem?.kids && <h2 className="text-xl mt-10 font-semibold">Комментарии</h2>}
            {newsItem?.kids?.map(commentId => (
                <div className="flex flex-col gap-5">
                    <Comment commentId={commentId} depth={0} />
                </div>
            ))}
        </div>
    ) 
}

export default NewsItemPage;