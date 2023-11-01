import { userConstants, creditWithdrawConstants } from '../_constants';
import { userService, creditWithdrawService } from '../_services';
import { alertActions } from '.';
// import { toast } from 'react-toastify';
export const creditWithdrawActions = {
    login,
    logout,
    disableCreditWithdraw,
    getAllCreditWithdraw,
    createCreditWithdraw,
    updateCreditWithdraw,
    getCreditWithdrawList,
    deleteCreditWithdraw,
    uploadImageClear,
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
function login(data, props) {
    return dispatch => {
        dispatch(request({ data }));
        userService.login(data)
            .then(
                user => {
                    dispatch(success(user));
                    props.history.push({ pathname: 'app/dashboard' });
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}
function logout() {
    // userService.logout();
    return { type: userConstants.LOGOUT };
}

function uploadImageClear() {
    return dispatch => {
        dispatch(success());
    };
    function success(uploadImage) { return { type: userConstants.FILE_UPLOAD_CLEAR_SUCCESS, uploadImage } }
}

function childListActiveUserCredit(data) {
    return dispatch => {
        dispatch(request());
        creditWithdrawService.childListActiveUserCredit(data)
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
    function request() { return { type: creditWithdrawConstants.CHILD_LIST_ACTIVE_USER_CREDIT_REQUEST } }
    function success(users) { return { type: creditWithdrawConstants.CHILD_LIST_ACTIVE_USER_CREDIT_SUCCESS, users } }
    function failure(error) { return { type: creditWithdrawConstants.CHILD_LIST_ACTIVE_USER_CREDIT_FAILURE, error } }
}

function childListUser(data) {
    return dispatch => {
        dispatch(request());
        creditWithdrawService.childListUser(data)
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
    function request() { return { type: creditWithdrawConstants.CHILD_LIST_USER_REQUEST } }
    function success(users) { return { type: creditWithdrawConstants.CHILD_LIST_USER_SUCCESS, users } }
    function failure(error) { return { type: creditWithdrawConstants.CHILD_LIST_USER_FAILURE, error } }
}

function creditdata(data) {
    return dispatch => {
        dispatch(request());
        creditWithdrawService.creditdata(data)
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
    function request() { return { type: creditWithdrawConstants.CREDIT_DATA_REQUEST } }
    function success(users) { return { type: creditWithdrawConstants.CREDIT_DATA_SUCCESS, users } }
    function failure(error) { return { type: creditWithdrawConstants.CREDIT_DATA_FAILURE, error } }
}

function accountHistory(data) {
    return dispatch => {
        dispatch(request());
        creditWithdrawService.accountHistory(data)
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
    function request() { return { type: creditWithdrawConstants.ACCOUNT_HISTORY_REQUEST } }
    function success(users) { return { type: creditWithdrawConstants.ACCOUNT_HISTORY_SUCCESS, users } }
    function failure(error) { return { type: creditWithdrawConstants.ACCOUNT_HISTORY_FAILURE, error } }
}

function depositChipsPnl(data, eventData) {
    return dispatch => {
        dispatch(request());
        creditWithdrawService.depositChipsPnl(data)
            .then(
                users => {
                    dispatch(success(users));
                    dispatch(this.childListActiveUserCredit(eventData));
                    dispatch(this.childListUser(eventData));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: creditWithdrawConstants.DEPOSIT_CHIPS_PNL_REQUEST } }
    function success(users) { return { type: creditWithdrawConstants.DEPOSIT_CHIPS_PNL_SUCCESS, users } }
    function failure(error) { return { type: creditWithdrawConstants.DEPOSIT_CHIPS_PNL_FAILURE, error } }
}

function depositwithdrawdata(data) {
    return dispatch => {
        dispatch(request());
        creditWithdrawService.depositwithdrawdata(data)
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
    function request() { return { type: creditWithdrawConstants.DEPOSIT_WITHDRAW_DATA_REQUEST } }
    function success(users) { return { type: creditWithdrawConstants.DEPOSIT_WITHDRAW_DATA_SUCCESS, users } }
    function failure(error) { return { type: creditWithdrawConstants.DEPOSIT_WITHDRAW_DATA_FAILURE, error } }
}

function withdrawChipsPnl(data, eventData) {
    return dispatch => {
        dispatch(request());
        creditWithdrawService.withdrawChipsPnl(data)
            .then(
                users => {
                    let message = users && users.withdrawChipsPnl ? users.withdrawChipsPnl : null;
                    dispatch(alertActions.success(message));
                    dispatch(success(users));
                    dispatch(this.childListActiveUserCredit(eventData));
                    dispatch(this.childListUser(eventData));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: creditWithdrawConstants.WITHDRAW_CHIPS_PNL_REQUEST } }
    function success(users) { return { type: creditWithdrawConstants.WITHDRAW_CHIPS_PNL_SUCCESS, users } }
    function failure(error) { return { type: creditWithdrawConstants.WITHDRAW_CHIPS_PNL_FAILURE, error } }
}

function childProfile(data) {
    return dispatch => {
        dispatch(request());
        creditWithdrawService.childProfile(data)
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
    function request() { return { type: creditWithdrawConstants.CHILD_PROFILE_REQUEST } }
    function success(users) { return { type: creditWithdrawConstants.CHILD_PROFILE_SUCCESS, users } }
    function failure(error) { return { type: creditWithdrawConstants.CHILD_PROFILE_FAILURE, error } }
}

function changePassword(data, eventData) {
    return dispatch => {
        dispatch(request());
        creditWithdrawService.changePassword(data)
            .then(
                users => {
                    let message = users && users.changePassword ? users.changePassword : null;
                    dispatch(alertActions.success(message));
                    dispatch(success(users));
                    dispatch(this.childListActiveUserCredit(eventData));
                    dispatch(this.childListUser(eventData));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: creditWithdrawConstants.CHANGE_PASSOWRD_REQUEST } }
    function success(users) { return { type: creditWithdrawConstants.CHANGE_PASSOWRD_SUCCESS, users } }
    function failure(error) { return { type: creditWithdrawConstants.CHANGE_PASSOWRD_FAILURE, error } }
}

function updateBetAccountStatus(data, eventData) {
    return dispatch => {
        dispatch(request());
        creditWithdrawService.updateBetAccountStatus(data)
            .then(
                users => {
                    let message = users && users.updateBetAccountStatus ? users.updateBetAccountStatus : null;
                    dispatch(alertActions.success(message));
                    dispatch(this.childListActiveUserCredit(eventData));
                    dispatch(this.childListUser(eventData));


                    dispatch(success(users));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: creditWithdrawConstants.UPDATE_BET_ACCOUNT_STATUS_REQUEST } }
    function success(users) { return { type: creditWithdrawConstants.UPDATE_BET_ACCOUNT_STATUS_SUCCESS, users } }
    function failure(error) { return { type: creditWithdrawConstants.UPDATE_BET_ACCOUNT_STATUS_FAILURE, error } }
}

function updateUserInfo(data, eventData) {
    return dispatch => {
        dispatch(request());
        creditWithdrawService.updateUserInfo(data)
            .then(
                users => {
                    let message = users && users.updateUserInfo ? users.updateUserInfo : null;
                    dispatch(alertActions.success(message));
                    dispatch(success(users));
                    dispatch(this.childListActiveUserCredit(eventData));
                    dispatch(this.childListUser(eventData));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: creditWithdrawConstants.UPDATE_USER_INFO_REQUEST } }
    function success(users) { return { type: creditWithdrawConstants.UPDATE_USER_INFO_SUCCESS, users } }
    function failure(error) { return { type: creditWithdrawConstants.UPDATE_USER_INFO_FAILURE, error } }
}

function createCreditWithdraw(data, eventData) {

    return dispatch => {
        dispatch(request());
        creditWithdrawService.createCreditWithdraw(data)
            .then(
                users => {
                    let message = users && users.createCreditWithdraw ? users.createCreditWithdraw : null;
                    dispatch(alertActions.success(message));
                    dispatch(success(users));
                    dispatch(this.childListActiveUserCredit(eventData));
                    dispatch(this.childListUser(eventData));
                    // dispatch(this.uploadImageClear());
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: creditWithdrawConstants.ADD_CREDIT_WITHDRAW_REQUEST } }
    function success(users) { return { type: creditWithdrawConstants.ADD_CREDIT_WITHDRAW_SUCCESS, users } }
    function failure(error) { return { type: creditWithdrawConstants.ADD_CREDIT_WITHDRAW_FAILURE, error } }
}

function depositCredit(data, eventData) {
    return dispatch => {
        dispatch(request());
        creditWithdrawService.depositCredit(data)
            .then(
                users => {
                    dispatch(alertActions.success("Deposit Credit Successfully."));
                    dispatch(success(users));
                    dispatch(this.childListActiveUserCredit(eventData));
                    dispatch(this.childListUser(eventData));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: creditWithdrawConstants.DEPOSIT_CREDIT_REQUEST } }
    function success(users) { return { type: creditWithdrawConstants.DEPOSIT_CREDIT_SUCCESS, users } }
    function failure(error) { return { type: creditWithdrawConstants.DEPOSIT_CREDIT_FAILURE, error } }
}

function updateCreditWithdraw(data) {
    let reqData = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }
    return dispatch => {
        dispatch(request());
        creditWithdrawService.updateCreditWithdraw(data)
            .then(

                users => {
                    // toast("Password Updated successfully.")
                    dispatch(alertActions.success("CreditWithdraw Update Successfully."));
                    dispatch(success(users));
                    dispatch(this.getCreditWithdrawList(reqData));
                    dispatch(this.uploadImageClear());

                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: creditWithdrawConstants.UPDATE_CREDIT_WITHDRAW_REQUEST } }
    function success(users) { return { type: creditWithdrawConstants.UPDATE_CREDIT_WITHDRAW_SUCCESS, users } }
    function failure(error) { return { type: creditWithdrawConstants.UPDATE_CREDIT_WITHDRAW_FAILURE, error } }
}
function getAllCreditWithdraw(data) {
    return dispatch => {
        dispatch(request());
        creditWithdrawService.getAllCreditWithdraw(data)
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
    function request() { return { type: creditWithdrawConstants.GETALL_CREDIT_WITHDRAW_REQUEST } }
    function success(users) { return { type: creditWithdrawConstants.GETALL_CREDIT_WITHDRAW_SUCCESS, users } }
    function failure(error) { return { type: creditWithdrawConstants.GETALL_CREDIT_WITHDRAW_FAILURE, error } }
}
function getCreditWithdrawList(data) {
    return dispatch => {
        dispatch(request());
        creditWithdrawService.getCreditWithdrawList(data)
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
    function request() { return { type: creditWithdrawConstants.GET_LIST_CREDIT_WITHDRAW_REQUEST } }
    function success(users) { return { type: creditWithdrawConstants.GET_LIST_CREDIT_WITHDRAW_SUCCESS, users } }
    function failure(error) { return { type: creditWithdrawConstants.GET_LIST_CREDIT_WITHDRAW_FAILURE, error } }
}

function deleteCreditWithdraw(data, paginationData) {
    return dispatch => {
        dispatch(request());
        creditWithdrawService.deleteCreditWithdraw(data)
            .then(
                users => {
                    dispatch(success(users));
                    dispatch(this.getCreditWithdrawList(paginationData));

                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: creditWithdrawConstants.DELETE_CREDIT_WITHDRAW_REQUEST } }
    function success(users) { return { type: creditWithdrawConstants.DELETE_CREDIT_WITHDRAW_SUCCESS, users } }
    function failure(error) { return { type: creditWithdrawConstants.DELETE_CREDIT_WITHDRAW_FAILURE, error } }
}
function disableCreditWithdraw(data, paginationData) {

    return dispatch => {
        dispatch(request());
        creditWithdrawService.disableCreditWithdraw(data)
            .then(
                users => {
                    dispatch(success(users));
                    dispatch(this.getCreditWithdrawList(paginationData));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: creditWithdrawConstants.DISABLE_CREDIT_WITHDRAW_REQUEST } }
    function success(users) { return { type: creditWithdrawConstants.DISABLE_CREDIT_WITHDRAW_SUCCESS, users } }
    function failure(error) { return { type: creditWithdrawConstants.DISABLE_CREDIT_WITHDRAW_FAILURE, error } }
}
