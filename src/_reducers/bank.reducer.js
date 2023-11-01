import {
  bankConstants
} from '../_constants';

export function bank(state = {}, action) {

  switch (action.type) {
    case bankConstants.BANK_DEPOSIT_WITHDRAW_REQUEST:
      return {
        ...state,
        loading: true
      };
    case bankConstants.BANK_DEPOSIT_WITHDRAW_SUCCESS:
      return {
        ...state,
        updateUserSuccess: true,
        loading: false,
        bankDeposit: action.users.bankDepositWithdraw,
      };
    case bankConstants.BANK_DEPOSIT_WITHDRAW_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case bankConstants.GET_BANK_BY_ID_REQUEST:
      return {
        ...state,
        loading: true
      };
    case bankConstants.GET_BANK_BY_ID_SUCCESS:
      return {
        ...state,
        updateUserSuccess: true,
        loading: false,
        bankRowData: action.users.getBankById,
      };
    case bankConstants.GET_BANK_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case bankConstants.ADD_BANK_REQUEST:
      return {
        ...state
      };
    case bankConstants.ADD_BANK_SUCCESS:
      return {
        ...state,
        addUserSuccess: true
      };
    case bankConstants.ADD_BANK_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case bankConstants.GET_LIST_BANK_REQUEST:
      return {
        ...state,
        loading: true
      };
    case bankConstants.GET_LIST_BANK_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        loading: false,
        items: action.users.getBankList.list,
        total: action.users.getBankList.total
      };
    case bankConstants.GET_LIST_BANK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case bankConstants.GETALL_BANK_REQUEST:
      return {
        ...state,
        loading: true
      };
    case bankConstants.GETALL_BANK_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        loading: false,
        bankItems: action.users.getAllBank,
        bankTotal: action.users.getAllBank
      };
    case bankConstants.GETALL_BANK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case bankConstants.UPDATE_BANK_REQUEST:
      return {
        ...state
      };
    case bankConstants.UPDATE_BANK_SUCCESS:
      return {
        ...state,
        addUserSuccess: true
      };
    case bankConstants.UPDATE_BANK_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case bankConstants.DELETE_BANK_REQUEST:
      return {
        ...state,
        loading: true
      };
    case bankConstants.DELETE_BANK_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        loading: false,
      };
    case bankConstants.DELETE_BANK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case bankConstants.DISABLE_BANK_REQUEST:
      return {
        ...state,
        loading: true
      };
    case bankConstants.DISABLE_BANK_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        loading: false,
      };
    case bankConstants.DISABLE_BANK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };




    default:
      return state
  }
}