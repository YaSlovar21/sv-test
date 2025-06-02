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
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div class="bg-white rounded-lg shadow overflow-hidden">
                <div class="p-6">
                    <h1 class="text-2xl font-bold leading-7 text-gray-900">{title}</h1>
                    <div class="mt-2 max-w-xl text-gray-500">
                        <a href={url}>{url}</a>
                    </div>
                    <div class="mt-6 flex items-center">
                       
                        <div class="ml-3">
                            <p class="text-sm font-medium text-gray-900">Автор: <span class="text-blue-600">{by}</span></p>
                            <div class="text-sm text-gray-500">Дата публикации: <FormattedDate unixDate={time} /></div>
                        </div>
                        <div class="ml-auto flex-shrink-0">
                            <span class="text-sm font-medium text-yellow-400">Рейтинг: <Rating number={score}/> ({score})</span>
                        </div>
                    </div>
                </div>
            </div>
            { kids && <h2 className="text-2xl font-bold">Комментарии</h2> }
            { kids?.map(i=><b>{i}</b>)}
        </div>
    );
}

export default NewCardDetails;