import { CircularProgress } from "@mui/joy";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewCard from "../components/NewCard/NewCard";
import { getNewById, getNewsAll, getNewsIds } from "../services/actions/news";
import { cardsInLineByWidth } from "../utils/utils";

/* Главная страница - лента */

function HomeFeed({handleRefresh, windowWidth}) {
    const dispatch = useDispatch();
    //const commands = useSelector(store => store.commands.items); 
    
    const cardsInLine = cardsInLineByWidth(windowWidth);
    const cardsCount = Math.floor(100 / cardsInLine) * cardsInLine;

    const {
        isGettingPartOfNews,
        newsIds,
        news
    } = useSelector(store => store.news)

    useEffect(()=> {
        const intervarRefresh = setInterval(handleRefresh, 60 * 1000);
        return () => clearInterval(intervarRefresh); 
    }, [newsIds]);
  
    if (Object.keys(news).length) {
        return (
            <div className="max-w-[calc(100%-80px)] max-olpc:max-w-[calc(100%-10px)] mx-auto">
                <div className="content">
                    <div className="grid grid-cols-5 max-olpc:grid-cols-4 max-xllaptop:grid-cols-3 max-llaptop:grid-cols-2 max-laptop:grid-cols-3  max-mobile:grid-cols-2  items-stretch flex-col gap-5 max-laptop::gap-2 my-10">
                        { newsIds.slice(0, cardsCount).map(n=> <NewCard key={n} {...news[n]} />)}
                    </div>
                </div>
            </div>
        )
    } else if (isGettingPartOfNews) return (<p><CircularProgress />Получаем новости</p> );
}

export default HomeFeed;