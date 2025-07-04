import FormattedDate from "../FormattedDate/FormattedDate";
import Rating from "../Rating/Rating";

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
function NewCardDetails({by, descendants, id, score, kids, time, title, type, url }) {
    return (

            <div className="bg-white rounded-lg shadow overflow-hidden max-w-7xl mx-auto px-4 py-12">
                <h1 className="text-2xl font-bold leading-7 text-gray-900">{title}</h1>
                <div className="mt-2 max-w-xl text-gray-500">
                    <a href={url}>{url}</a>
                </div>
                <div className="mt-6 flex items-center">
                    
                    <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">Автор: <span className="text-blue-600">{by}</span></p>
                        <div className="text-sm text-gray-500">Дата публикации: <FormattedDate unixDate={time} /></div>
                    </div>
                    <div className="ml-auto flex-shrink-0">
                        <span className="text-sm font-medium text-yellow-400">Рейтинг: <Rating number={score}/> ({score})</span>
                    </div>
                </div>
            </div>

         

    );
}

export default NewCardDetails;