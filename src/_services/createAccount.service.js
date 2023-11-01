
import { authHeader, history } from '../_helpers';
import { CONST, } from '../_config';

export const createAccountService = {
    login,
    logout,
    appDetail,
    createUser,
};

function logout() {
    localStorage.removeItem('user');
    history.push(`#/login`);
}
function onerrorlogout() {
    localStorage.removeItem('user');
    history.push(`#/login`);
    window.location.reload();
}
function login(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/login/auth`, requestOptions)
        .then(handleResponse)
        .then(user => {
            let userObj = {
                userinfo: user
            }
            if (user) {
                localStorage.setItem('user', JSON.stringify(user));
            }
            return userObj;
        });
}
function appDetail() {


    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        // body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/admin/app-detail`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                appDetail: data.data
            }
            return userObj;
        });
}
function createUser(data) {


    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/user/create-user-vg`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                createUser: data
            }
            return userObj;
        });
}
function handleResponse(response) {
    // console.log("response22222   ", response);

    return response.text().then(text => {
        const data = text && JSON.parse(text);
        // console.log("response22222   ", data);
        if (!response.ok) {


            // console.log("response.status___handleResponse::", response.status);

            if (response.status === 401) {
                logout();
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        if (data.error) {
            // console.log("datadatadatadatadata   ", data);
            if (data.code === 3) {

                onerrorlogout();
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}