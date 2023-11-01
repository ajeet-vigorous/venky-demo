
import { authHeader } from '../_helpers';
import { CONST } from '../_config';

export const createappService = {
    login,
    logout,
    // verifyEmail,
    // loginToThisAccount,
    getAllCreateApp,
    createCreateApp,
    updateCreateApp,
    getCreateAppList,
    deleteCreateApp,
    disableCreateApp,
    getCreateAppById
};
function logout() {
    // localStorage.removeItem('spuser');
    // // window.location.href = "#/login";
    // history.push(`#/login`);
    // window.location.reload();


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
    return fetch(CONST.BACKEND_URL + `/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            let userObj = {
                userinfo: user.data
            }
            if (user.data) {
                localStorage.setItem('spuser', JSON.stringify(user.data));
            }

            return userObj;
        });
}

function getCreateAppList(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getCreateAppList`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                getCreateAppList: data.data
            }
            return userObj;
        });
}
function getAllCreateApp(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getAllCreateApp`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                getAllCreateApp: data.data
            }
            return userObj;
        });
}

function deleteCreateApp(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/deleteCreateApp`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                deleteCreateApp: data.data
            }
            return userObj;
        });
}

function getCreateAppById(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getCreateAppById`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                getCreateAppById: data.data
            }
            return userObj;
        });
}
function disableCreateApp(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/updateCreateAppStatus`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                updateCreateAppStatus: data.data
            }
            return userObj;
        });
}

function updateCreateApp(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/updateCreateApp`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let userObj = {
                updateCreateApp: data.data
            }
            return userObj;
        });
}
function createCreateApp(data, selectedFile) {
    let header = new Headers({
        // 'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });

    var event = new FormData();
    event.append('logo', selectedFile, selectedFile.name);
    event.append('appname', data.appname);
    event.append('appurl', data.appurl);
    event.append('lupassword', data.lupassword);
    const requestOptions = {
        method: "POST",
        headers: header,
        body: event
    }
    return fetch(CONST.BACKEND_URL + `/admin/create-app-detail`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let userObj = {
                createCreateApp: data.data
            }
            return userObj;
        });
}

function handleResponse(response) {
    // console.log("response22222   ", response);

    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                //location.reload(true);
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        if (data.error) {
            if (data.code === 3) {
                logout();
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}