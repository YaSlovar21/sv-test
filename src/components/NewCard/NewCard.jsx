import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
import FormattedDate from "../FormattedDate/FormattedDate";
import Rating from "../Rating/Rating";
import { CircularProgress } from "@mui/joy";
/*
{
    "by": "lorinab",
    "descendants": 0,
    "id": 44040029,
    "score": 1,
    "time": 1747738220,
    "title": "Why open source is Europe's path to digital sovereignty",
    "type": "story",
    "url": "https://xwiki.com/en/Blog/open-source-europe-digital-sovereignty/"
}
*/
function NewCard({by, descendants, id, score, time, title, type, url }) {
    const { newsIdsLoadingRequests } = useSelector(store => store.news)

    return !newsIdsLoadingRequests.includes(id) ? 
        (<Link to={`/${id}`} >
            <div class="bg-gray-800 h-full flex flex-col text-white p-4 rounded shadow-lg">
                <div className="flex items-center justify-between">
                    <p class="text-xs text-gray-400">
                        <FormattedDate unixDate={time} />
                    </p>
                    <span class="text-xs text-gray-400"><Rating number={score} /> ({score})</span>
                </div>
                <h2 class="text-base font-medium line-clamp-2">{title}</h2>
                <p class="text-sm text-gray-400 mt-auto">Рейтинг:</p>
                <p class="text-sm font-medium">Автор: <span class="text-blue-400">{by}</span></p>
               
            </div>
        </Link>)
        :
        ( <div class="bg-gray-800 text-white p-4 rounded h-20 shadow-lg">Загружается <CircularProgress /></div>)
    
}

export default NewCard;