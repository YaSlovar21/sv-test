import { CircularProgress } from "@mui/joy";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewCard from "../components/NewCard/NewCard";
import { getNewById, getNewsAll, getNewsIds } from "../services/actions/news";

/* Главная страница - ленда */

function HomeFeed({handleRefresh}) {
    const dispatch = useDispatch();
    //const commands = useSelector(store => store.commands.items);

    
    const {
        isGettingNewsIds,
        isGettingPartOfNews,
        newsIds,
        news
    } = useSelector(store => store.news)

    useEffect(()=> {
        const intervarRefresh = setInterval(handleRefresh, 20 * 1000);
        return () => clearInterval(intervarRefresh); 
      },[newsIds])
  

    const handleScroll = () => {
        // Логика для определения, когда пользователь прокрутил до конца страницы
        const position = window.scrollY + window.innerHeight; //низ экрана отн.страницы
        const height = document.body.offsetHeight;
        const threshold = height-400;
        if (position > threshold ) {
            
        }
       
    };

    if (Object.keys(news).length) {
        return (
            <div className="max-w-[calc(100%-80px)] mx-auto" onScroll={handleScroll}>
                <div className="content">
                 
                    <div className="flex gap-5 my-10">
                        { /*newsIds.map(n=> <span>{n}__</span>)*/}
                    </div>
                    <div className="grid grid-cols-5 max-olpc:grod-cols-4 max-laptop:grid-cols-3 max-mobile:grid-cols-2 items-stretch flex-col gap-5 my-10">
                        { newsIds.map(n=> <NewCard {...news[n]} />)}
                    </div>
                </div>
            </div>
        )
    } else if (isGettingPartOfNews) return (<p><CircularProgress />Получаем новости</p> );
}

export default HomeFeed;