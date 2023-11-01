import { createAccountConstants } from '../_constants';
import { createAccountService } from '../_services';
import { alertActions } from './';
//import { history } from '../_helpers';
export const createAccountActions = {
    appDetail,
    createUser,
};

function appDetail() {
    return dispatch => {
        dispatch(request());
        createAccountService.appDetail()
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
    function request() { return { type: createAccountConstants.APP_DETAIL_REQUEST } }
    function success(users) { return { type: createAccountConstants.APP_DETAIL_SUCCESS, users } }
    function failure(error) { return { type: createAccountConstants.APP_DETAIL_FAILURE, error } }
}

function createUser(data) {
    return dispatch => {
        dispatch(request());
        createAccountService.createUser(data)
            .then(
                users => {
                    let message = users && users.createUser && users.createUser.message ? users.createUser.message : null
                    dispatch(alertActions.success(message));
                    dispatch(success(users));
                    dispatch(this.appDetail());
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: createAccountConstants.CREATE_USER_REQUEST } }
    function success(users) { return { type: createAccountConstants.CREATE_USER_SUCCESS, users } }
    function failure(error) { return { type: createAccountConstants.CREATE_USER_FAILURE, error } }
}
