import { CircularProgress } from "@mui/joy";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewCard from "../components/NewCard/NewCard";

/* Главная страница - ленда */

function HomeFeed() {
    const dispatch = useDispatch();
    //const commands = useSelector(store => store.commands.items);
   
    const {
        isGettingNewsList, 
        isGettingNewsIds,
        items: newsItems,
    } = useSelector(store => store.news)

    useEffect(()=> {
        //dispatch(getCommands(currentHackTextId));
    }, [])

    return (
        <div className="content">
            <h1 className="text-8xl">Лента новостей</h1>
            { isGettingNewsIds && <p><CircularProgress />Получаем список ID новостей</p> }
            { isGettingNewsList && <p><CircularProgress />Получаем 100 новостей</p> }
            <div className="flex flex-col gap-5 my-10">
                { newsItems.map(n=> <NewCard {...n} />)}
            </div>
        </div>
        
    );
}

export default HomeFeed;