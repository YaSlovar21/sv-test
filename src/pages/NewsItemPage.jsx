import { CircularProgress } from "@mui/joy";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NewCardDetails from "../components/NewCardDetails/NewCardDetails";
import { getNewById } from "../services/actions/news";

function NewsItemPage() {
    const dispatch = useDispatch();
    const { id } = useParams();
    

    useEffect(()=> {
        dispatch(getNewById(id))
    }, []);

    const news = useSelector(store=> store.news.news);
    const newsItem = news[id];

    return (
        <div>
            <h1 className="text-8xl">Новость ID {id}</h1>
            {newsItem ?  <NewCardDetails {...newsItem} /> : <CircularProgress />}
        </div>
    ) 
}

export default NewsItemPage;