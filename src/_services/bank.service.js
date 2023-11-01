
import { authHeader } from '../_helpers';
import { CONST } from '../_config';

export const bankService = {
    login,
    logout,
    // verifyEmail,
    // loginToThisAccount,
    getAllBank,
    createBank,
    updateBank,
    getBankList,
    deleteBank,
    disableBank,
    getBankById,
    bankDepositWithdraw,
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

function getBankList(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getBankList`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                getBankList: data.data
            }
            return userObj;
        });
}

function bankDepositWithdraw(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/dwc/bank-deposit-withdraw`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                bankDepositWithdraw: data.data
            }
            return userObj;
        });
}
function getAllBank(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getAllBank`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                getAllBank: data.data
            }
            return userObj;
        });
}


function deleteBank(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/deleteBank`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                deleteBank: data.data
            }
            return userObj;
        });
}

function getBankById(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getBankById`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                getBankById: data.data
            }
         
            return userObj;
        });
}
function disableBank(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/updateBankStatus`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                updateBankStatus: data.data
            }
            return userObj;
        });
}

function updateBank(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/updateBank`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let userObj = {
                updateBank: data.data
            }
            return userObj;
        });
}
function createBank(data, selectedFile) {
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
                createBank: data.data
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
        //console.log("datadatadatadatadata   ", data.error);
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