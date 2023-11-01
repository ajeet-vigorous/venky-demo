import { userConstants, createappConstants } from '../_constants';
import { userService, createappService } from '../_services';
import { alertActions } from './';
// import { toast } from 'react-toastify';
export const createappActions = {

    login,
    logout,
    disableCreateApp,
    getAllCreateApp,
    createCreateApp,
    updateCreateApp,
    getCreateAppList,
    deleteCreateApp,
    uploadImageClear,
    getCreateAppById
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
                    console.log("errorerror ", error);
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

function createCreateApp(data, selectedFile) {

    return dispatch => {
        dispatch(request());
        createappService.createCreateApp(data, selectedFile)
            .then(

                users => {
                    dispatch(alertActions.success("CreateApp Add Successfully."));
                    dispatch(success(users));
                    // dispatch(this.uploadImageClear());


                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: createappConstants.ADD_CREATE_APP_REQUEST } }
    function success(users) { return { type: createappConstants.ADD_CREATE_APP_SUCCESS, users } }
    function failure(error) { return { type: createappConstants.ADD_CREATE_APP_FAILURE, error } }
}
function updateCreateApp(data, paginationData, props) {

    return dispatch => {
        dispatch(request());
        createappService.updateCreateApp(data)
            .then(

                users => {
                    dispatch(alertActions.success("CreateApp Update Successfully."));
                    dispatch(success(users));
                    // dispatch(this.getCreateAppList(paginationData));
                    dispatch(this.uploadImageClear());
                    props.history.push({ pathname: '/app/createapp' });


                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: createappConstants.UPDATE_CREATE_APP_REQUEST } }
    function success(users) { return { type: createappConstants.UPDATE_CREATE_APP_SUCCESS, users } }
    function failure(error) { return { type: createappConstants.UPDATE_CREATE_APP_FAILURE, error } }
}
function getAllCreateApp(data) {
    // console.log("data m kya aa rha h::action:::", data);
    return dispatch => {
        dispatch(request());
        createappService.getAllCreateApp(data)
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
    function request() { return { type: createappConstants.GETALL_CREATE_APP_REQUEST } }
    function success(users) { return { type: createappConstants.GETALL_CREATE_APP_SUCCESS, users } }
    function failure(error) { return { type: createappConstants.GETALL_CREATE_APP_FAILURE, error } }
}
function getCreateAppList(data) {
    // console.log("data m kya aa rha h::action:::", data);
    return dispatch => {
        dispatch(request());
        createappService.getCreateAppList(data)
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
    function request() { return { type: createappConstants.GET_LIST_CREATE_APP_REQUEST } }
    function success(users) { return { type: createappConstants.GET_LIST_CREATE_APP_SUCCESS, users } }
    function failure(error) { return { type: createappConstants.GET_LIST_CREATE_APP_FAILURE, error } }
}

function deleteCreateApp(data, paginationData) {
    // let reqData = {
    //     "keyWord": "",
    //     "pageNo": 1,
    //     "size": 10
    // }
    return dispatch => {
        dispatch(request());
        createappService.deleteCreateApp(data)
            .then(
                users => {
                    dispatch(success(users));
                    dispatch(this.getCreateAppList(paginationData));

                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: createappConstants.DELETE_CREATE_APP_REQUEST } }
    function success(users) { return { type: createappConstants.DELETE_CREATE_APP_SUCCESS, users } }
    function failure(error) { return { type: createappConstants.DELETE_CREATE_APP_FAILURE, error } }
}

function getCreateAppById(data) {

    return dispatch => {
        dispatch(request());
        createappService.getCreateAppById(data)
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
    function request() { return { type: createappConstants.GET_CREATE_APP_BY_ID_REQUEST } }
    function success(users) { return { type: createappConstants.GET_CREATE_APP_BY_ID_SUCCESS, users } }
    function failure(error) { return { type: createappConstants.GET_CREATE_APP_BY_ID_FAILURE, error } }
}
function disableCreateApp(data, paginationData) {

    return dispatch => {
        dispatch(request());
        createappService.disableCreateApp(data)
            .then(
                users => {
                    dispatch(success(users));
                    dispatch(this.getCreateAppList(paginationData));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: createappConstants.DISABLE_CREATE_APP_REQUEST } }
    function success(users) { return { type: createappConstants.DISABLE_CREATE_APP_SUCCESS, users } }
    function failure(error) { return { type: createappConstants.DISABLE_CREATE_APP_FAILURE, error } }
}
