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
            <div class="bg-gray-800 text-white p-4 rounded shadow-lg">
                <div class="flex justify-between items-center">
                    <div>
                    <h2 class="text-lg font-bold">{title}</h2>
                    </div>
                    <div class="text-gray-400">
                    <p class="text-sm">Рейтинг:<Rating number={score} /> ({score})</p>
                    </div>
                </div>
                <div class="flex justify-between items-center mt-2">
                    <div>
                    <p class="text-sm font-medium">Автор: <span class="text-blue-400">{by}</span></p>
                    </div>
                    <div>
                    <p class="text-sm text-gray-400">Дата публикации: <FormattedDate unixDate={time} /></p>
                    </div>
                </div>
            </div>
        </Link>)
        :
        ( <div class="bg-gray-800 text-white p-4 rounded h-20 shadow-lg">Загружается <CircularProgress /></div>)
    
}

export default NewCard;