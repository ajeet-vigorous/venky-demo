import {
  createAccountConstants
} from '../_constants';

export function createAccount(state = {}, action) {

  switch (action.type) {
    case createAccountConstants.CREATE_USER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case createAccountConstants.CREATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        createAccountSuccess: true,
      };
    case createAccountConstants.CREATE_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case createAccountConstants.APP_DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
        createAccountSuccess: false,
      };
    case createAccountConstants.APP_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        appDetailItems: action.users.appDetail
      };
    case createAccountConstants.APP_DETAIL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state
  }
}