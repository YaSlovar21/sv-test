import { API_VERSION, BASE_URL } from "./constants";

function checkResponseIsOk(res) {
    if(res.ok || res.status === 502) {
        return res.json()
    } else {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
}

export const getNewsRequest = () => {
    return fetch(`${BASE_URL}/${API_VERSION}/newstories.json`, {
        method: 'GET',
        //credentials: 'include',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        }
    }).then((res)=> {
        return checkResponseIsOk(res);
    }); 
}

export const getNewById = (id) => {
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