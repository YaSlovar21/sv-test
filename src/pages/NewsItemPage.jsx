import { CircularProgress } from "@mui/joy";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Comment from "../components/Comment/Comment";
import NewCardDetails from "../components/NewCardDetails/NewCardDetails";
import { getNewById } from "../services/actions/news";

function NewsItemPage({windowWidth, isAsideOpen, setIsAsideOpen}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const news = useSelector(store=> store.news.news);
    const newsItem = news[id];

    //почему новость грузится долго?

    function checkAsideIsOpen() {
        if (windowWidth < 641 &&  isAsideOpen) {
            setIsAsideOpen(false);
        }
    }
    useEffect(()=> {
        if (!newsItem) {
            dispatch(getNewById(id))
        }
        checkAsideIsOpen();
    }, []);

    useEffect(()=> {
        checkAsideIsOpen();
    }, [id]);

    function handleBackButtonClick() {
        navigate(-1);
    }

    return (
        <div className="max-w-7xl mx-auto">
            <button className="font-medium mb-3 cursor-pointer transition-all hover:opacity-80 before:content-['\2190']" onClick={handleBackButtonClick}>Назад</button>
            {newsItem ?  <NewCardDetails {...newsItem} /> : (<><CircularProgress /> Новость загружается (долго)...</>)} 
            {newsItem?.kids && <h2 className="text-xl mt-10 font-semibold">Комментарии</h2>}
            {newsItem?.kids?.map(commentId => (
                <div  key={commentId}  className="flex flex-col gap-5">
                    <Comment commentId={commentId} depth={0} />
                </div>
            ))}
        </div>
    ) 
}

export default NewsItemPage;