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
function NewCard({by, descendants, id, score, kids, time, title, type, url }) {
    const { newsIdsLoadingRequests } = useSelector(store => store.news)

    return !newsIdsLoadingRequests.includes(id) ? 
        (<Link to={`/${id}`} >
            <div className="bg-gray-800 h-full flex flex-col text-white p-4 rounded shadow-lg">
                <div className="flex items-start justify-between">
                    <p className="text-xs text-gray-400">
                        <FormattedDate unixDate={time} />
                    </p>
                    <span className="text-xs text-gray-400"><Rating number={score} /></span>
                </div>
                <h2 className="text-base font-medium line-clamp-2">{title}</h2>
                
                <p className="text-sm font-medium mt-auto">Автор: <span className="text-blue-400">{by}</span></p>
                <p className="text-sm text-gray-400">Комментариев: {kids ? kids.length : 0} </p>
            </div>
        </Link>)
        :
        ( <div className="bg-gray-800 text-white p-4 rounded h-20 shadow-lg">Загружается <CircularProgress /></div>)
    
}

export default NewCard;