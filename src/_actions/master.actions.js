import { userConstants, masterConstants } from '../_constants';
import { userService, masterService } from '../_services';
import { alertActions } from './';
// import { toast } from 'react-toastify';
export const masterActions = {

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
        masterService.createBank(data, selectedFile)
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
    function request() { return { type: masterConstants.ADD_BANK_REQUEST } }
    function success(users) { return { type: masterConstants.ADD_BANK_SUCCESS, users } }
    function failure(error) { return { type: masterConstants.ADD_BANK_FAILURE, error } }
}
function updateBank(data, paginationData, props) {

    return dispatch => {
        dispatch(request());
        masterService.updateBank(data)
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
    function request() { return { type: masterConstants.UPDATE_BANK_REQUEST } }
    function success(users) { return { type: masterConstants.UPDATE_BANK_SUCCESS, users } }
    function failure(error) { return { type: masterConstants.UPDATE_BANK_FAILURE, error } }
}
function getAllBank(data) {
    // console.log("data m kya aa rha h::action:::", data);
    return dispatch => {
        dispatch(request());
        masterService.getAllBank(data)
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
    function request() { return { type: masterConstants.GETALL_BANK_REQUEST } }
    function success(users) { return { type: masterConstants.GETALL_BANK_SUCCESS, users } }
    function failure(error) { return { type: masterConstants.GETALL_BANK_FAILURE, error } }
}

function getBankList(data) {
    // console.log("data m kya aa rha h::action:::", data);
    return dispatch => {
        dispatch(request());
        masterService.getBankList(data)
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
    function request() { return { type: masterConstants.GET_LIST_BANK_REQUEST } }
    function success(users) { return { type: masterConstants.GET_LIST_BANK_SUCCESS, users } }
    function failure(error) { return { type: masterConstants.GET_LIST_BANK_FAILURE, error } }
}

function bankDepositWithdraw(data) {
    return dispatch => {
        dispatch(request());
        masterService.bankDepositWithdraw(data)
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
    function request() { return { type: masterConstants.BANK_DEPOSIT_WITHDRAW_REQUEST } }
    function success(users) { return { type: masterConstants.BANK_DEPOSIT_WITHDRAW_SUCCESS, users } }
    function failure(error) { return { type: masterConstants.BANK_DEPOSIT_WITHDRAW_FAILURE, error } }
}

function deleteBank(data, paginationData) {
    return dispatch => {
        dispatch(request());
        masterService.deleteBank(data)
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
    function request() { return { type: masterConstants.DELETE_BANK_REQUEST } }
    function success(users) { return { type: masterConstants.DELETE_BANK_SUCCESS, users } }
    function failure(error) { return { type: masterConstants.DELETE_BANK_FAILURE, error } }
}

function getBankById(data) {
    return dispatch => {
        dispatch(request());
        masterService.getBankById(data)
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
    function request() { return { type: masterConstants.GET_BANK_BY_ID_REQUEST } }
    function success(users) { return { type: masterConstants.GET_BANK_BY_ID_SUCCESS, users } }
    function failure(error) { return { type: masterConstants.GET_BANK_BY_ID_FAILURE, error } }
}
function disableBank(data, paginationData) {
    return dispatch => {
        dispatch(request());
        masterService.disableBank(data)
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
    function request() { return { type: masterConstants.DISABLE_BANK_REQUEST } }
    function success(users) { return { type: masterConstants.DISABLE_BANK_SUCCESS, users } }
    function failure(error) { return { type: masterConstants.DISABLE_BANK_FAILURE, error } }
}
