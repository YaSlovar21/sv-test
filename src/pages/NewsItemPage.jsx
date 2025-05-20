import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NewCardDetails from "../components/NewCardDetails/NewCardDetails";

function NewsItem() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const news = useSelector(store=> store.news.items);

    useEffect(()=> {
       // dispatch(getPlayers(currentHackTextId))
    }, []);

    const newItem = useMemo(()=> news.find(item => `${item.id}` === id), [id, news]);

    return newItem ? (
        <div>
            <h1 className="text-8xl">Новость ID {id}</h1>
            <NewCardDetails {...newItem} />
        </div>
    ) : <>Такой новости нет</>;
}

export default NewsItem;