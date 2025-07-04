import { API_VERSION, BASE_URL } from "./constants";

function checkResponseIsOk(res) {
    if(res.ok || res.status === 502) {
        return res.json()
    } else {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
}

//забираем только 100 последних новостей
export const getNewsIdsRequest = () => {
    return fetch(`${BASE_URL}/${API_VERSION}/newstories.json`, {
        method: 'GET',
        //credentials: 'include',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        }
    }).then((res)=> {
        return checkResponseIsOk(res);
    }).then(res=> res.slice(0,100)); 
}

export const getNewByIdRequest = (id) => {
    return fetch(`${BASE_URL}/${API_VERSION}/item/${id}.json`, {
        method: 'GET',
        //credentials: 'include',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        }
    }).then((res)=> {
        return checkResponseIsOk(res);
    }); 
}
 
export const getItemsByIdsRequest = async (idsArr) => {
    const items = await Promise.all(idsArr.map(i=> getNewByIdRequest(i)))
    return items;
}