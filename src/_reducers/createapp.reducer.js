import {
  createappConstants
} from '../_constants';

export function createapp(state = {}, action) {

  switch (action.type) {
    case createappConstants.GET_CREATE_APP_BY_ID_REQUEST:
      return {
        ...state,
        loading: true
      };
    case createappConstants.GET_CREATE_APP_BY_ID_SUCCESS:
      return {
        ...state,
        updateUserSuccess: true,
        loading: false,
        createappRowData: action.users.getCreateAppById,
      };
    case createappConstants.GET_CREATE_APP_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case createappConstants.ADD_CREATE_APP_REQUEST:
      return {
        ...state
      };
    case createappConstants.ADD_CREATE_APP_SUCCESS:
      return {
        ...state,
        addUserSuccess: true
      };
    case createappConstants.ADD_CREATE_APP_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case createappConstants.GET_LIST_CREATE_APP_REQUEST:
      return {
        ...state,
        loading: true
      };
    case createappConstants.GET_LIST_CREATE_APP_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        loading: false,
        items: action.users.getCreateAppList.list,
        total: action.users.getCreateAppList.total
      };
    case createappConstants.GET_LIST_CREATE_APP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case createappConstants.GETALL_CREATE_APP_REQUEST:
      return {
        ...state,
        loading: true
      };
    case createappConstants.GETALL_CREATE_APP_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        loading: false,
        createappItems: action.users.getAllCreateApp,
        createappTotal: action.users.getAllCreateApp
      };
    case createappConstants.GETALL_CREATE_APP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case createappConstants.UPDATE_CREATE_APP_REQUEST:
      return {
        ...state
      };
    case createappConstants.UPDATE_CREATE_APP_SUCCESS:
      return {
        ...state,
        addUserSuccess: true
      };
    case createappConstants.UPDATE_CREATE_APP_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case createappConstants.DELETE_CREATE_APP_REQUEST:
      return {
        ...state,
        loading: true
      };
    case createappConstants.DELETE_CREATE_APP_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        loading: false,
      };
    case createappConstants.DELETE_CREATE_APP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case createappConstants.DISABLE_CREATE_APP_REQUEST:
      return {
        ...state,
        loading: true
      };
    case createappConstants.DISABLE_CREATE_APP_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        loading: false,
      };
    case createappConstants.DISABLE_CREATE_APP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };




    default:
      return state
  }
}