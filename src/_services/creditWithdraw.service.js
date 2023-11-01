
import { authHeader } from '../_helpers';
import { CONST } from '../_config';

export const creditWithdrawService = {
    login,
    logout,
    // verifyEmail,
    // loginToThisAccount,
    getAllCreditWithdraw,
    createCreditWithdraw,
    updateCreditWithdraw,
    getCreditWithdrawList,
    deleteCreditWithdraw,
    disableCreditWithdraw,
    creditdata,
    depositCredit,
    accountHistory,
    depositChipsPnl,
    withdrawChipsPnl,
    childProfile,
    changePassword,
    updateBetAccountStatus,
    updateUserInfo,
    childListActiveUserCredit,
    depositwithdrawdata,
    childListUser,
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

function childListActiveUserCredit(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/user/child-list-active-user`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                childListActiveUserCredit: data.data
            }
            return userObj;
        });
}

function childListUser(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/user/child-list`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                childListUser: data.data
            }
            return userObj;
        });
}

function getCreditWithdrawList(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getCreditWithdrawList`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                getCreditWithdrawList: data.data
            }
            return userObj;
        });
}
function getAllCreditWithdraw(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getAllCreditWithdraw`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                getAllCreditWithdraw: data.data
            }
            return userObj;
        });
}

function deleteCreditWithdraw(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/deleteCreditWithdraw`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                deleteCreditWithdraw: data.data
            }
            return userObj;
        });
}
function disableCreditWithdraw(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/updateCreditWithdrawStatus`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                updateCreditWithdrawStatus: data.data
            }
            return userObj;
        });
}

function updateCreditWithdraw(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/updateCreditWithdraw`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let userObj = {
                updateCreditWithdraw: data.data
            }
            return userObj;
        });
}
function createCreditWithdraw(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/dwc/wcr`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let userObj = {
                createCreditWithdraw: data.message
            }
            return userObj;
        });
}
function depositCredit(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/dwc/dcr`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let userObj = {
                depositCredit: data.data
            }
            return userObj;
        });
}
function creditdata(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/dwc/creditdata`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                creditdata: data.data
            }
            return userObj;
        });
}

function accountHistory(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/report/account-statement`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                accountHistory: data.data
            }
            return userObj;
        });
}

function depositChipsPnl(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/dwc/deposit-chips-pnl`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                depositChipsPnl: data.data
            }
            return userObj;
        });
}

function depositwithdrawdata(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/dwc/depositwithdrawdata`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                depositwithdrawdata: data.data
            }
            return userObj;
        });
}

function withdrawChipsPnl(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/dwc/withdraw-chips-pnl`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                withdrawChipsPnl: data.message
            }
            return userObj;
        });
}

function childProfile(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/user/child-profile`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                childProfile: data.data
            }
            return userObj;
        });
}

function changePassword(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/user/change-password-child`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                changePassword: data.message
            }
            return userObj;
        });
}

function updateBetAccountStatus(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/user/update-bet-account-status`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                updateBetAccountStatus: data.message
            }
            return userObj;
        });
}

function updateUserInfo(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/user/update-user-info`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                updateUserInfo: data.message
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