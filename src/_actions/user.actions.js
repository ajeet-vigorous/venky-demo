import { userConstants } from '../_constants';
import { bet } from '../_reducers/bet.reducer';
import { userService } from '../_services';
import { alertActions } from './';
//import { history } from '../_helpers';
export const userActions = {
    login,
    logout,
    marketAnalysisDashboard,
    childListActiveUser,
    activeSport,
    wallet_balance,
    game_profile,
    changePassword,
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
    lucky7AData,
    userUpdate,
    userAccountDetails,
    MatchListWithId,

};

function login(data, props) {
    return dispatch => {
        dispatch(request({ data }));
        userService.login(data)
            .then(
                user => {
                    dispatch(success(user));
                    if (user && user.userinfo && user.userinfo.data && user.userinfo.data.userType === "client") {
                        if (user && user.userinfo && user.userinfo.data && user.userinfo.data.isPasswordChanged === false) {
                            props.history.push(`app/changepassword`)
                        } else {

                            props.history.push(`app/dashboard`)
                        }
                        dispatch(alertActions.success("Login Successfully."));
                    } else {
                        props.history.push(`/login`)
                        dispatch(alertActions.error("Usertype is not Correct for login"));
                    }

                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };
    function request(user) { return { type: userConstants.LOGIN_FIRST_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_FIRST_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FIRST_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function userAccountDetails
    (data) {
    return dispatch => {
        dispatch(request());
        userService.userAccountDetails
            (data)
            .then(
                users => {
                    dispatch(success(users));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: userConstants.USER_ACCOUNT_DETAILS_REQUEST } }
    function success(users) { return { type: userConstants.USER_ACCOUNT_DETAILS_SUCCESS, users } }
    function failure(error) { return { type: userConstants.USER_ACCOUNT_DETAILS_FAILURE, error } }
}



function marketAnalysisDashboard(data) {
    return dispatch => {
        dispatch(request());
        userService.marketAnalysisDashboard(data)
            .then(
                users => {
                    dispatch(success(users));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: userConstants.MARKET_ANALYSIS_DASHBORD_REQUEST } }
    function success(users) { return { type: userConstants.MARKET_ANALYSIS_DASHBORD_SUCCESS, users } }
    function failure(error) { return { type: userConstants.MARKET_ANALYSIS_DASHBORD_FAILURE, error } }
}

function userUpdate
    (data) {
    return dispatch => {
        dispatch(request());
        userService.userUpdate
            (data)
            .then(
                users => {
                    dispatch(alertActions.success("Your Referance is updated."));
                    dispatch(success(users));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: userConstants.USER_UPDATE_REQUEST } }
    function success(users) { return { type: userConstants.USER_UPDATE_SUCCESS, users } }
    function failure(error) { return { type: userConstants.USER_UPDATE_FAILURE, error } }
}

function changePassword(data, history) {
    return dispatch => {
        dispatch(request());
        userService.changePassword(data)
            .then(
                users => {
                    let message = users && users.changePassword ? users.changePassword : null;
                    dispatch(alertActions.success(message));
                    dispatch(success(users));
                    history.push("/app/dashboard")
                    console.log("historyhistoryhistoryhistory", history);
                    // dispatch(this.childListActiveUserCredit(eventData));
                    // dispatch(this.childListUser(eventData));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: userConstants.CHANGE_PASSWORD_REQUEST } }
    function success(users) { return { type: userConstants.CHANGE_PASSWORD_SUCCESS, users } }
    function failure(error) { return { type: userConstants.CHANGE_PASSWORD_FAILURE, error } }
}

function getStatement(data) {
    return dispatch => {
        dispatch(request());
        userService.getStatement(data)
            .then(
                users => {
                    dispatch(success(users));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: userConstants.STATEMENT_REQUEST } }
    function success(users) { return { type: userConstants.STATEMENT_SUCCESS, users } }
    function failure(error) { return { type: userConstants.STATEMENT_FAILURE, error } }
}

function getMarket(data) {
    return dispatch => {
        dispatch(request());
        userService.getMarket(data)
            .then(
                users => {
                    dispatch(success(users));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: userConstants.GET_MARKET_REQUEST } }
    function success(users) { return { type: userConstants.GET_MARKET_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GET_MARKET_FAILURE, error } }
}

function lucky7AData(data) {
    return dispatch => {
        dispatch(request());
        userService.lucky7AData(data)
            .then(
                users => {
                    dispatch(success(users));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: userConstants.GET_MARKET_CASINO_REQUEST } }
    function success(users) { return { type: userConstants.GET_MARKET_CASINO_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GET_MARKET_CASINO_FAILURE, error } }
}

function getProfitAndLoss(data) {
    return dispatch => {
        dispatch(request());
        userService.getProfitAndLoss(data)
            .then(
                users => {
                    dispatch(success(users));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: userConstants.PROFIT_AND_LOSS_REQUEST } }
    function success(users) { return { type: userConstants.PROFIT_AND_LOSS_SUCCESS, users } }
    function failure(error) { return { type: userConstants.PROFIT_AND_LOSS_FAILURE, error } }
}

function MatchList(data) {
    return dispatch => {
        dispatch(request());
        userService.MatchList(data)
            .then(
                users => {
                    dispatch(success(users));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: userConstants.MATCH_LIST_REQUEST } }
    function success(users) { return { type: userConstants.MATCH_LIST_SUCCESS, users } }
    function failure(error) { return { type: userConstants.MATCH_LIST_FAILURE, error } }
}

function MatchListWithId(data) {
    return dispatch => {
        dispatch(request());
        userService.MatchListWithId(data)
            .then(
                users => {
                    dispatch(success(users));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: userConstants.MATCH_LIST_ID_REQUEST } }
    function success(users) { return { type: userConstants.MATCH_LIST_ID_SUCCESS, users } }
    function failure(error) { return { type: userConstants.MATCH_LIST_ID_FAILURE, error } }
}

function games_list(data) {
    return dispatch => {
        dispatch(request());
        userService.games_list(data)
            .then(
                users => {
                    dispatch(success(users));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: userConstants.GAME_LIST_REQUEST } }
    function success(users) { return { type: userConstants.GAME_LIST_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GAME_LIST_FAILURE, error } }
}

function event_game_list(data) {
    return dispatch => {
        dispatch(request());
        userService.event_game_list(data)
            .then(
                users => {
                    dispatch(success(users));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: userConstants.EVENT_GAME_LIST_REQUEST } }
    function success(users) { return { type: userConstants.EVENT_GAME_LIST_SUCCESS, users } }
    function failure(error) { return { type: userConstants.EVENT_GAME_LIST_FAILURE, error } }
}


function event_game(data) {
    return dispatch => {
        dispatch(request());
        userService.event_game(data)
            .then(
                users => {
                    dispatch(success(users));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: userConstants.EVENT_GAME_REQUEST } }
    function success(users) { return { type: userConstants.EVENT_GAME_SUCCESS, users } }
    function failure(error) { return { type: userConstants.EVENT_GAME_FAILURE, error } }
}

function event_casino(data) {
    return dispatch => {
        dispatch(request());
        userService.event_casino(data)
            .then(
                users => {
                    dispatch(success(users));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: userConstants.EVENT_CASINO_REQUEST } }
    function success(users) { return { type: userConstants.EVENT_CASINO_SUCCESS, users } }
    function failure(error) { return { type: userConstants.EVENT_CASINO_FAILURE, error } }
}

function last_result(data) {
    return dispatch => {
        dispatch(request());
        userService.last_result(data)
            .then(
                users => {
                    dispatch(success(users));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: userConstants.LAST_RESULT_REQUEST } }
    function success(users) { return { type: userConstants.LAST_RESULT_SUCCESS, users } }
    function failure(error) { return { type: userConstants.LAST_RESULT_FAILURE, error } }
}

function event_tennis(data) {
    return dispatch => {
        dispatch(request());
        userService.event_tennis(data)
            .then(
                users => {
                    dispatch(success(users));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: userConstants.EVENT_TENNIS_REQUEST } }
    function success(users) { return { type: userConstants.EVENT_TENNIS_SUCCESS, users } }
    function failure(error) { return { type: userConstants.EVENT_TENNIS_FAILURE, error } }
}

function event_footbal(data) {
    return dispatch => {
        dispatch(request());
        userService.event_footbal(data)
            .then(
                users => {
                    dispatch(success(users));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: userConstants.EVENT_FOOTBAL_REQUEST } }
    function success(users) { return { type: userConstants.EVENT_FOOTBAL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.EVENT_FOOTBAL_FAILURE, error } }
}

function save_bet(data, data2, state, setState) {
    return dispatch => {
        dispatch(request());
        userService.save_bet(data)
            .then(
                users => {
                    dispatch(success(users));


                    // console.log("statestatestatestate  ",state);
                    let { oddsBetData } = state;
                    oddsBetData.push(data);
                    // setState({ oddsBetData });

                    // setState({ oddsBetData: [...oddsBetData, data] })
                    // dispatch(this.list_bt_ssn_mk(data2))
                    dispatch(alertActions.success("Bet has been saved successfully."));
                    // window.reload();
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: userConstants.SAVE_BET_REQUEST } }
    function success(users) { return { type: userConstants.SAVE_BET_SUCCESS, users } }
    function failure(error) { return { type: userConstants.SAVE_BET_FAILURE, error } }
}

function save_bet_fancy(data, data2, state, setState) {
    return dispatch => {
        dispatch(request());
        userService.save_bet_fancy(data)
            .then(
                users => {
                    dispatch(success(users));
                    console.log("statestatestatestate  ", state);
                    let { fancyBetData } = state;
                    fancyBetData.push(data)

                    // setState({fancyBetData:fancyBetData})

                    setState(() => ({
                        fancyBetData: fancyBetData
                    }))
                    dispatch(alertActions.success("Bet has been saved successfully."));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: userConstants.SAVE_BET_FANCY_REQUEST } }
    function success(users) { return { type: userConstants.SAVE_BET_FANCY_SUCCESS, users } }
    function failure(error) { return { type: userConstants.SAVE_BET_FANCY_FAILURE, error } }
}


function save_ssn_bet(data, data2) {
    return dispatch => {
        dispatch(request());
        userService.save_ssn_bet(data)
            .then(
                users => {
                    dispatch(success(users));
                    dispatch(this.list_bt_ssn_mk(data2))
                    dispatch(alertActions.success("Bet has been saved successfully."));
                    // window.reload();
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: userConstants.SAVE_SSN_BET_REQUEST } }
    function success(users) { return { type: userConstants.SAVE_SSN_BET_SUCCESS, users } }
    function failure(error) { return { type: userConstants.SAVE_SSN_BET_FAILURE, error } }
}

function list_fn_match(data) {
    return dispatch => {
        dispatch(request());
        userService.list_fn_match(data)
            .then(
                users => {
                    dispatch(success(users));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: userConstants.LIST_FN_MATCH_REQUEST } }
    function success(users) { return { type: userConstants.LIST_FN_MATCH_SUCCESS, users } }
    function failure(error) { return { type: userConstants.LIST_FN_MATCH_FAILURE, error } }
}

function save_csn_bet(data, data2) {
    return dispatch => {
        dispatch(request());
        userService.save_csn_bet(data)
            .then(
                users => {
                    dispatch(success(users));
                    dispatch(this.list_bt_ssn_mk(data2))
                    dispatch(alertActions.success("Bet has been saved successfully."));
                    // window.reload();
                },
                error => {
                    dispatch(alertActions.error(error))
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: userConstants.SAVE_CSN_BET_REQUEST } }
    function success(users) { return { type: userConstants.SAVE_CSN_BET_SUCCESS, users } }
    function failure(error) { return { type: userConstants.SAVE_CSN_BET_FAILURE, error } }
}

function list_bt_ssn_mk(data) {
    return dispatch => {
        dispatch(request());
        userService.list_bt_ssn_mk(data)
            .then(
                users => {
                    dispatch(success(users));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: userConstants.LIST_BT_SSN_REQUEST } }
    function success(users) { return { type: userConstants.LIST_BT_SSN_SUCCESS, users } }
    function failure(error) { return { type: userConstants.LIST_BT_SSN_FAILURE, error } }
}

function get_match_score(data) {
    return dispatch => {
        dispatch(request());
        userService.get_match_score(data)
            .then(
                users => {
                    dispatch(success(users));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: userConstants.GET_MATCH_SCORE_REQUEST } }
    function success(users) { return { type: userConstants.GET_MATCH_SCORE_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GET_MATCH_SCORE_FAILURE, error } }
}

function event_detals(data) {
    return dispatch => {
        dispatch(request());
        userService.event_detals(data)
            .then(
                users => {
                    dispatch(success(users));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: userConstants.EVENT_DETALS_REQUEST } }
    function success(users) { return { type: userConstants.EVENT_DETALS_SUCCESS, users } }
    function failure(error) { return { type: userConstants.EVENT_DETALS_FAILURE, error } }
}

function event_session(data) {
    return dispatch => {
        dispatch(request());
        userService.event_session(data)
            .then(
                users => {
                    dispatch(success(users));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: userConstants.EVENT_SESSION_REQUEST } }
    function success(users) { return { type: userConstants.EVENT_SESSION_SUCCESS, users } }
    function failure(error) { return { type: userConstants.EVENT_SESSION_FAILURE, error } }
}


function getScore(data) {
    return dispatch => {
        dispatch(request());
        userService.getScore(data)
            .then(
                users => {
                    dispatch(success(users));
                },
                error => {
                    // dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: userConstants.GET_SCORE_REQUEST } }
    function success(users) { return { type: userConstants.GET_SCORE_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GET_SCORE_FAILURE, error } }
}

function single_click_update_amount(data) {
    return dispatch => {
        dispatch(request());
        userService.single_click_update_amount(data)
            .then(
                users => {
                    dispatch(success(users));
                    dispatch(alertActions.success("Successfully updated."));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: userConstants.SINGLE_CLICK_UPDATE_REQUEST } }
    function success(users) { return { type: userConstants.SINGLE_CLICK_UPDATE_SUCCESS, users } }
    function failure(error) { return { type: userConstants.SINGLE_CLICK_UPDATE_FAILURE, error } }
}

function event_fun_csno(data) {
    return dispatch => {
        dispatch(request());
        userService.event_fun_csno(data)
            .then(
                users => {
                    dispatch(success(users));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: userConstants.EVENT_FUN_CSNO_REQUEST } }
    function success(users) { return { type: userConstants.EVENT_FUN_CSNO_SUCCESS, users } }
    function failure(error) { return { type: userConstants.EVENT_FUN_CSNO_FAILURE, error } }
}


function game_profile(data) {
    return dispatch => {
        dispatch(request());
        userService.game_profile(data)
            .then(
                users => {
                    dispatch(success(users));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: userConstants.GAME_PROFILE_LIST_REQUEST } }
    function success(users) { return { type: userConstants.GAME_PROFILE_LIST_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GAME_PROFILE_LIST_FAILURE, error } }
}
function wallet_balance(data) {
    return dispatch => {
        dispatch(request());
        userService.wallet_balance(data)
            .then(
                users => {
                    dispatch(success(users));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))

                }
            );
    };
    function request() { return { type: userConstants.WALLET_BALANCE_REQUEST } }
    function success(users) { return { type: userConstants.WALLET_BALANCE_SUCCESS, users } }
    function failure(error) { return { type: userConstants.WALLET_BALANCE_FAILURE, error } }
}



function childListActiveUser(data) {
    return dispatch => {
        dispatch(request());
        userService.childListActiveUser(data)
            .then(
                users => {
                    dispatch(success(users));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: userConstants.CHILD_LIST_ACTIVE_USER_REQUEST } }
    function success(users) { return { type: userConstants.CHILD_LIST_ACTIVE_USER_SUCCESS, users } }
    function failure(error) { return { type: userConstants.CHILD_LIST_ACTIVE_USER_FAILURE, error } }
}

function activeSport() {
    return dispatch => {
        dispatch(request());
        userService.activeSport()
            .then(
                users => {
                    dispatch(success(users));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: userConstants.ACTIVE_SPORT_REQUEST } }
    function success(users) { return { type: userConstants.ACTIVE_SPORT_SUCCESS, users } }
    function failure(error) { return { type: userConstants.ACTIVE_SPORT_FAILURE, error } }
}
