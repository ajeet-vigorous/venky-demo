
import { authHeader } from '../_helpers';
import { CONST } from '../_config';

export const betService = {
    login,
    logout,
    // verifyEmail,
    // loginToThisAccount,
    getAllBet,
    createBet,
    updateBet,
    getBetList,
    deleteBet,
    disableBet,
    getBetById,
    betDepositWithdraw,
    currentBets,
    betHistory,
    unSatteledBet
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

function getBetList(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getBetList`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                getBetList: data.data
            }
            return userObj;
        });
}

function currentBets(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/report/current-bets`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                currentBets: data.data
            }
            return userObj;
        });
}

function betHistory(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/my-bet-list`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let userObj = {
                betHistory: data.data
            }
            return userObj;
        });
}

function unSatteledBet(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/my-bet-list`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                unsatteledBet: data.data
            }
            return userObj;
        });
}

function betDepositWithdraw(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/dwc/bet-deposit-withdraw`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                betDepositWithdraw: data.data
            }
            return userObj;
        });
}
function getAllBet(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getAllBet`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                getAllBet: data.data
            }
            return userObj;
        });
}

function deleteBet(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/deleteBet`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                deleteBet: data.data
            }
            return userObj;
        });
}

function getBetById(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getBetById`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                getBetById: data.data
            }
            return userObj;
        });
}
function disableBet(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/updateBetStatus`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                updateBetStatus: data.data
            }
            return userObj;
        });
}

function updateBet(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/updateBet`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let userObj = {
                updateBet: data.data
            }
            return userObj;
        });
}
function createBet(data, selectedFile) {
    let header = new Headers({
        // 'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });

    var event = new FormData();
    event.append('logo', selectedFile, selectedFile.name);
    event.append('appname', data.appname);
    event.append('appurl', data.appurl);
    event.append('lupassword', data.lupassword);

    // console.log("SERVICE__APP__formData:::", event);

    const requestOptions = {
        method: "POST",
        headers: header,
        body: event
    }
    return fetch(CONST.BACKEND_URL + `/admin/create-app-detail`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let userObj = {
                createBet: data.data
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
            // const error = (data && data.message) || response.statusText;
            return data;
        }
        if (data.error) {
            // console.log("datadatadatadatadata   ", data);
            if (data.code === 3) {
                logout();
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}