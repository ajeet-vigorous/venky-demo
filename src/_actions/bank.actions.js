import { userConstants, bankConstants } from '../_constants';
import { userService, bankService } from '../_services';
import { alertActions } from './';
// import { toast } from 'react-toastify';
export const bankActions = {

    login,
    logout,
    disableBank,
    getAllBank,
    createBank,
    updateBank,
    getBankList,
    deleteBank,
    uploadImageClear,
    getBankById,
    bankDepositWithdraw
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
                    // console.log("errorerror ", error);
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

function createBank(data, selectedFile) {

    return dispatch => {
        dispatch(request());
        bankService.createBank(data, selectedFile)
            .then(

                users => {
                    dispatch(alertActions.success("Bank Add Successfully."));
                    dispatch(success(users));
                    // dispatch(this.uploadImageClear());
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: bankConstants.ADD_BANK_REQUEST } }
    function success(users) { return { type: bankConstants.ADD_BANK_SUCCESS, users } }
    function failure(error) { return { type: bankConstants.ADD_BANK_FAILURE, error } }
}
function updateBank(data, paginationData, props) {

    return dispatch => {
        dispatch(request());
        bankService.updateBank(data)
            .then(

                users => {
                    dispatch(alertActions.success("Bank Update Successfully."));
                    dispatch(success(users));
                    // dispatch(this.getBankList(paginationData));
                    dispatch(this.uploadImageClear());
                    props.history.push({ pathname: '/app/bank' });


                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: bankConstants.UPDATE_BANK_REQUEST } }
    function success(users) { return { type: bankConstants.UPDATE_BANK_SUCCESS, users } }
    function failure(error) { return { type: bankConstants.UPDATE_BANK_FAILURE, error } }
}
function getAllBank(data) {
    // console.log("data m kya aa rha h::action:::", data);
    return dispatch => {
        dispatch(request());
        bankService.getAllBank(data)
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
    function request() { return { type: bankConstants.GETALL_BANK_REQUEST } }
    function success(users) { return { type: bankConstants.GETALL_BANK_SUCCESS, users } }
    function failure(error) { return { type: bankConstants.GETALL_BANK_FAILURE, error } }
}

function getBankList(data) {
    // console.log("data m kya aa rha h::action:::", data);
    return dispatch => {
        dispatch(request());
        bankService.getBankList(data)
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
    function request() { return { type: bankConstants.GET_LIST_BANK_REQUEST } }
    function success(users) { return { type: bankConstants.GET_LIST_BANK_SUCCESS, users } }
    function failure(error) { return { type: bankConstants.GET_LIST_BANK_FAILURE, error } }
}

function bankDepositWithdraw(data) {
    return dispatch => {
        dispatch(request());
        bankService.bankDepositWithdraw(data)
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
    function request() { return { type: bankConstants.BANK_DEPOSIT_WITHDRAW_REQUEST } }
    function success(users) { return { type: bankConstants.BANK_DEPOSIT_WITHDRAW_SUCCESS, users } }
    function failure(error) { return { type: bankConstants.BANK_DEPOSIT_WITHDRAW_FAILURE, error } }
}

function deleteBank(data, paginationData) {
    return dispatch => {
        dispatch(request());
        bankService.deleteBank(data)
            .then(
                users => {
                    dispatch(success(users));
                    dispatch(this.getBankList(paginationData));

                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: bankConstants.DELETE_BANK_REQUEST } }
    function success(users) { return { type: bankConstants.DELETE_BANK_SUCCESS, users } }
    function failure(error) { return { type: bankConstants.DELETE_BANK_FAILURE, error } }
}

function getBankById(data) {
    return dispatch => {
        dispatch(request());
        bankService.getBankById(data)
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
    function request() { return { type: bankConstants.GET_BANK_BY_ID_REQUEST } }
    function success(users) { return { type: bankConstants.GET_BANK_BY_ID_SUCCESS, users } }
    function failure(error) { return { type: bankConstants.GET_BANK_BY_ID_FAILURE, error } }
}
function disableBank(data, paginationData) {
    return dispatch => {
        dispatch(request());
        bankService.disableBank(data)
            .then(
                users => {
                    dispatch(success(users));
                    dispatch(this.getBankList(paginationData));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: bankConstants.DISABLE_BANK_REQUEST } }
    function success(users) { return { type: bankConstants.DISABLE_BANK_SUCCESS, users } }
    function failure(error) { return { type: bankConstants.DISABLE_BANK_FAILURE, error } }
}
