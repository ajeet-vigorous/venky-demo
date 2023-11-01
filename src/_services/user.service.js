
import { authHeader, history } from '../_helpers';
import { CONST, SPORT } from '../_config';

export const
    userService = {
        marketAnalysisDashboard,
        login,
        logout,
        childListActiveUser,
        activeSport,
        wallet_balance,
        game_profile,
        games_list,
        MatchList,
        event_game_list,
        getStatement,
        event_game,
        getProfitAndLoss,
        event_fun_csno,
        event_casino,
        last_result,
        event_tennis,
        event_footbal,
        save_bet,
        save_bet_fancy,
        save_ssn_bet,
        list_fn_match,
        save_csn_bet,
        list_bt_ssn_mk,
        get_match_score,
        single_click_update_amount,
        event_detals,
        getScore,
        event_session,
        getMarket,
        userUpdate,
        userAccountDetails,
        changePassword,
        lucky7AData,
        MatchListWithId,

    };

function logout() {
    // console.log("yyyyyyyyyyyyyyyyyyy");
    localStorage.removeItem('spuser');
    localStorage.removeItem('hasSeenPopup');
    localStorage.removeItem('MatchList');
    localStorage.removeItem('finalBalance');

    // history.push(`#/login`);
    // window.reload();
}

function logoutTeamp() {
    // console.log("yyyyyyyyyyyyyyyyyyy");
    localStorage.removeItem('spuser');
    history.push(`#/login`);
    window.location.reload()
}

function onerrorlogout() {

    // console.log("zzzzzzzzzzzzzzz");

    localStorage.removeItem('user');
    history.push(`#/login`);
    window.location.reload();
}
function login(data) {

    // console.log("datadatadata::`!@#$%^&*()_+:", data);

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
            // console.log('useruseruseruseruseruseruseruser:::::::::::', user);
            let userObj = {
                userinfo: user,
                betChipsData: user && user.data && user.data.betChipsData
            }
            // console.log("userObjuserObjuserObjuserObjuserObj::::::::::", userObj);
            if (user) {
                localStorage.setItem('spuser', JSON.stringify(user));
               
            }
            if (user.data.betChipsData) {
                localStorage.setItem('betChipsData', JSON.stringify(user.data.betChipsData));
            }

            return userObj;
        });
}

function userAccountDetails(data) {
    
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/userAccountDetails`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                userAccountDetails: data.data
            }
            return userObj;
        });
}

function userUpdate(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "PATCH",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/userUpdate`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                userUpdate: data
            }
            return userObj;
        });
}


function changePassword(data) {

    // console.log("datahjdsdasjkdhsa:", data);

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "PATCH",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/updateUserPassword`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                changePassword: data.message
            }
            // console.log("SERVICE___changePassword:::", data);
            return userObj;
        });
}




function wallet_balance(data) {
    

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "Post",
        headers: header,
        body: JSON.stringify(data)
    }
    // console.log('requestOptions________' + authHeader().Authorization);
    return fetch(CONST.BACKEND_URL + `/wallet-balance`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                wallet_balance: data.data
            }
            return userObj;
        });
}

function getStatement(data) {
    // console.log('data___data____data:::????', data);
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/statement`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                statement: data.data
            }
            // console.log("i am in service statement111111111 ::", userObj);

            return userObj;
        });
}

function getMarket(temp) {
    // console.log('data___data____data:::????', temp);
    // let header = new Headers({
    //     'Content-Type': 'application/json',
    //     "Authorization": authHeader().Authorization
    // });
    const requestOptions = {
        method: "GET",
        // headers: header,
        // body: JSON.stringify(data)
    }
    return fetch(`https://alb.1ex.in/getMarket?id=${temp.market_id}`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                getMarket: data
            }
            // console.log("i am in service getMarket111111111 ::", userObj);

            return userObj;
        });
}

function lucky7AData(temp) {
    // console.log('data___data____data:::????', temp);
    // let header = new Headers({
    //     'Content-Type': 'application/json',
    //     "Authorization": authHeader().Authorization
    // });
    const requestOptions = {
        method: "GET",
        // headers: header,
        // body: JSON.stringify(data)
    }
    return fetch(`https://bsf1010.pro/v1/api/lucky7AData`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                lucky7AData: data
            }
            // console.log("i am in service getMarket111111111 ::", userObj);

            return userObj;
        });
}

function getProfitAndLoss(data) {
    // console.log('data___data____data:::????', data);
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/my-profit-loss`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                profit_and_loss: data.data
            }
            // console.log("i am in service profit_and_loss111111111", userObj);

            return userObj;
        });
}

function games_list(data) {
    // console.log('data___data____data:::????', data);
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/games-list`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                games_list: data.data
            }
            // console.log("i am in service games_list111111111 ::", userObj);

            return userObj;
        });
}

function MatchList(data) {
    // console.log('data___data____data:::????', data);
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    // return fetch(`http://owner.sixpro.in/api_inplay`, requestOptions)
    return fetch(SPORT.BACKEND_URL + `sports/matchList`, requestOptions)
        .then(handleResponse)
        .then(data => {
            // console.log('datadatadatadatadatadatadatadata11111111', data);
            let userObj = {
                MatchList: data
            }
            if (data) {
                localStorage.setItem('MatchList', JSON.stringify(data.data));
            }
            // console.log("i am in service MatchList111111111 ::", userObj);

            return userObj;
        });
}

// let userObj = {
//     userinfo: user,
//     betChipsData: user && user.data && user.data.betChipsData
// }
// // console.log("userObjuserObjuserObjuserObjuserObj:::", userObj);
// if (user) {
//     localStorage.setItem('spuser', JSON.stringify(user));
// }
// if (user.data.betChipsData) {
//     localStorage.setItem('betChipsData', JSON.stringify(user.data.betChipsData));
// }
function MatchListWithId(data) {
    console.log('data___data____data:::????', data.marketId);
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    // return fetch(`http://owner.sixpro.in/api_inplay`, requestOptions)
    return fetch(SPORT.BACKEND_URL + `sports/matchList?marketId=${data.marketId}`, requestOptions)
        .then(handleResponse)
        .then(data => {
            // console.log('datadatadatadatadatadatadatadata11111111', data);
            let userObj = {
                MatchList: data.data
            }
            console.log("i am in service MatchList111111111 ::", userObj);

            return userObj;
        });
}

function event_game_list(data) {
    // console.log('data___data____data:::????', data);
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/event-game-list`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                event_game_list: data.data
            }
            return userObj;
        });
}

function event_game(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/event-game`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                event_game: data.data,
                FcurrentTime: data.currentTime,

            }

            return userObj;
        });
}

function event_fun_csno(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
    }
    return fetch(CONST.BACKEND_URL + `/lucky7AData?id=${data.id}`)
        // https://casino.1ex.in/lucky7AData?id=dragon_tiger

        .then(handleResponse)
        .then(data => {

            let userObj = {
                event_fun_csno: data.data
            }

            return userObj;
        });
}

function event_casino(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/event-casino`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                event_casino: data.data
            }

            return userObj;
        });
}
function last_result(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/last-result`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                last_result: data.data
            }

            return userObj;
        });
}

function event_tennis(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/event-tennis`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                FcurrentTime: data.currentTime,
                event_tennis: data.data
            }

            return userObj;
        });
}

function event_footbal(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/event-footbal`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                FcurrentTime: data.currentTime,
                event_footbal: data.data
            }

            return userObj;
        });
}

function save_bet(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(SPORT.BACKEND_URL + `sports/oddBetPlaced`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                save_bet: data.data
            }
            if (data) {
                let finalBalance = {
                    mainBlance: data.data.totalCoins,
                    exposureBalance: data.data.exposure
                }
                localStorage.setItem('finalBalance', JSON.stringify(finalBalance));
                console.log("datadatadata147855", userObj);
            }
            return userObj;
        });
}

function save_bet_fancy(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(SPORT.BACKEND_URL + `sports/sessionBetPlaced`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                save_bet: data.data
            }
            if (data) {
                let finalBalance = {
                    mainBlance: data.data.totalCoins,
                    exposureBalance: data.data.exposure
                }
                localStorage.setItem('finalBalance', JSON.stringify(finalBalance));
            }
            return userObj;
        });
}

function save_ssn_bet(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/save-ssn-bet`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                save_ssn_bet: data.data
            }

            return userObj;
        });
}

function list_fn_match(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/list-fn-match`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                list_fn_match: data.data
            }

            return userObj;
        });
}

function save_csn_bet(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/save-csn-bet`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                save_csn_bet: data.data
            }

            return userObj;
        });
}


function list_bt_ssn_mk(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/list-bt-ssn-mk`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                list_bt_ssn_mk: data.data
            }

            return userObj;
        });
}


function getScore(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "GET",
        // headers: header,
        // body: JSON.stringify(data)
    }
    return fetch(`https://score.jeoad.com/api/v1/getScore?matchId=${data.matchId}`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                scoreData: data.data
            }

            return userObj;
        });
}


function get_match_score(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/get-match-score`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                get_match_score: data.data
            }

            return userObj;
        });
}


function single_click_update_amount(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/single-click-update-amount`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                single_click_update_amount: data.data
            }

            return userObj;
        });
}

function event_detals(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/event-detals`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                FcurrentTime: data.currentTime,
                event_detals: data.data
            }

            return userObj;
        });
}

function event_session(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/event-session`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                FcurrentTime: data.currentTime,
                event_session: data.data
            }

            return userObj;
        });
}


function game_profile(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/game-profile`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                game_profile: data.data
            }
            return userObj;
        });
}

function marketAnalysisDashboard(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/market-analysis/dashboard`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                marketAnalysisDashboard: data
            }
            return userObj;
        });
}

function childListActiveUser(data) {
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
                childListActiveUser: data.data
            }
            return userObj;
        });
}

function activeSport() {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        // body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/sport/active-sport-list`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                activeSport: data.data
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
                logoutTeamp();
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        if (data.error) {
            if (data.code === 3) {

                onerrorlogout();
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}