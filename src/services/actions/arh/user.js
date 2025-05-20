import { getUserInfoRequest, loginRequest, logoutRequest } from "../../utils/auth-api";

export const SET_USER = 'SET_USER';
export const SET_USER_LOGOUT= 'SET_USER_LOGOUT';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_ERROR = 'LOGOUT_ERROR';


export const login = (org, email, password) => (dispatch) => { 
        dispatch({
            type: LOGIN_REQUEST
        });
        loginRequest(org, email, password) 
            .then(res =>{
               
                if (res) {
                    dispatch({
                        type: LOGIN_SUCCESS,
                        name: `${res.first_name}`,
                        username: res.username,
                        user_id: res.user_id,
                        isLeader: res.isLeader
                    });
                    /*let accessToken1, refreshToken;
                    accessToken1 = res.accessToken.split('Bearer ')[1];
                    refreshToken = res.refreshToken;
                    setCookie('accessToken', accessToken1);
                    setCookie('refreshToken', refreshToken);*/
                } else {
                    Promise.reject(`Произошла ошибка при попытке регистрации пользователя. Ошибка ${res.status}`)
                }
            })
            .catch(e => {
                console.log(e);
                dispatch({
                    type: LOGIN_ERROR,
                })
            });
    }

export const getUserData = () => (dispatch) => { 
        getUserInfoRequest()
            .then(res => {
                if (res) {
                    dispatch({
                        type: SET_USER,
                        name: `${res.first_name}`,
                        username: res.username,
                        user_id: res.user_id,
                        isLeader: res.isLeader,
                    });
                } else {
                    Promise.reject(`Произошла ошибка при получении данных пользователя с сервера. Ошибка ${res.status}`)
                }
            })
            .catch(e => console.log(e))
    }


export const logout = () => (dispatch) => { 
        dispatch({
            type: LOGOUT_REQUEST
        });
        logoutRequest()
            .then(res => {
                if (res) {
                    dispatch({
                        type: LOGOUT_SUCCESS
                    });
                } else {
                    Promise.reject(`Произошла ошибка при выходе из профиля. Ошибка ${res.status}`)
                }
            })
            .catch(e => {
                dispatch({
                    type: LOGOUT_ERROR,
                })
                console.log(e)
            });
    }

