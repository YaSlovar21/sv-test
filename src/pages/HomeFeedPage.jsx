import { CircularProgress } from "@mui/joy";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewCard from "../components/NewCard/NewCard";
import { getNewById } from "../services/actions/news";

/* Главная страница - ленда */

function HomeFeed() {
    const dispatch = useDispatch();
    //const commands = useSelector(store => store.commands.items);
   
    const {
        isGettingNewsIds,
        newsIds,
        news
    } = useSelector(store => store.news)

    useEffect(()=> {
        const initialCardsIds = newsIds.slice(0,21);
        newsIds.map(id => dispatch(getNewById(id)));
    }, [newsIds])


    const handleScroll = () => {
        // Логика для определения, когда пользователь прокрутил до конца страницы
        const position = window.scrollY + window.innerHeight; //низ экрана отн.страницы
        const height = document.body.offsetHeight;
        const threshold = height-400;
        if (position > threshold ) {
            
        }
       
    };

    return (
        <div className="content flex" onScroll={handleScroll}>
            <div className="">
                
            </div>
            <div className="content">
                <h1 className="text-8xl">Лента новостей</h1>
                { isGettingNewsIds && <p><CircularProgress />Получаем список ID новостей</p> }
                <div className="flex gap-5 my-10">
                    { newsIds.map(n=> <span>{n}__</span>)}
                </div>
                <div className="grid grid-cols-5 items-stretch flex-col gap-5 my-10">
                    { newsIds.slice(0,21).map(n=> <NewCard {...news[n]} />)}
                </div>
            </div>
        </div>
        
    );
}

export default HomeFeed;