import {
  creditWithdrawConstants
} from '../_constants';

export function creditWithdraw(state = {}, action) {

  switch (action.type) {
    case creditWithdrawConstants.DEPOSIT_WITHDRAW_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        creditDataSuccess: false,
        profileDataSuccess: false,
      };
    case creditWithdrawConstants.DEPOSIT_WITHDRAW_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        dWRowDataSuccess: true,
        depositwithdrawItems: action.users.depositwithdrawdata
      };
    case creditWithdrawConstants.DEPOSIT_WITHDRAW_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case creditWithdrawConstants.CHILD_LIST_USER_REQUEST:
      return {
        ...state,
        loading: true,
        updateActivitySuccess: false,
        changePassSuccess: false,
        userLockSuccess: false,
        editProfileSuccess: false,
        profileDataSuccess: false,
        creditDataSuccess: false,
        dWRowDataSuccess: false,
        addUserSuccess: false,
      };
    case creditWithdrawConstants.CHILD_LIST_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        userLockSuccess: false,
        editProfileSuccess: false,

        updateActivitySuccess: false,
        childListUserItems: action.users.childListUser
      };
    case creditWithdrawConstants.CHILD_LIST_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };


    case creditWithdrawConstants.CHILD_LIST_ACTIVE_USER_CREDIT_REQUEST:
      return {
        ...state,
        loading: true,
        updateActivitySuccess: false,
        changePassSuccess: false,
        userLockSuccess: false,
        editProfileSuccess: false,
        profileDataSuccess: false,
        creditDataSuccess: false,
        dWRowDataSuccess: false,
        addUserSuccess: false,
      };
    case creditWithdrawConstants.CHILD_LIST_ACTIVE_USER_CREDIT_SUCCESS:
      return {
        ...state,
        loading: false,
        userLockSuccess: false,
        editProfileSuccess: false,
        updateActivitySuccess: false,
        bankDataSuccess: true,
        childListActiveItems: action.users.childListActiveUserCredit
      };
    case creditWithdrawConstants.CHILD_LIST_ACTIVE_USER_CREDIT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case creditWithdrawConstants.UPDATE_USER_INFO_REQUEST:
      return {
        ...state,
        // loading: true,
      };
    case creditWithdrawConstants.UPDATE_USER_INFO_SUCCESS:
      return {
        ...state,
        profileDataSuccess: false,
        editProfileSuccess: true,
        // depositChipsPnlItems: action.users.depositChipsPnl
      };
    case creditWithdrawConstants.UPDATE_USER_INFO_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case creditWithdrawConstants.UPDATE_BET_ACCOUNT_STATUS_REQUEST:
      return {
        ...state,
        // loading: true,
      };
    case creditWithdrawConstants.UPDATE_BET_ACCOUNT_STATUS_SUCCESS:
      return {
        ...state,
        userLockSuccess: true,
        // depositChipsPnlItems: action.users.depositChipsPnl
      };
    case creditWithdrawConstants.UPDATE_BET_ACCOUNT_STATUS_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case creditWithdrawConstants.CHANGE_PASSOWRD_REQUEST:
      return {
        ...state,
        // loading: true,
      };
    case creditWithdrawConstants.CHANGE_PASSOWRD_SUCCESS:
      return {
        ...state,
        profileDataSuccess: false,
        changePassSuccess: true
        // depositChipsPnlItems: action.users.depositChipsPnl
      };
    case creditWithdrawConstants.CHANGE_PASSOWRD_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case creditWithdrawConstants.CHILD_PROFILE_REQUEST:
      return {
        ...state,
        // loading: true,
      };
    case creditWithdrawConstants.CHILD_PROFILE_SUCCESS:
      return {
        ...state,
        profileDataSuccess: true,
        childProfileItems: action.users.childProfile
      };
    case creditWithdrawConstants.CHILD_PROFILE_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case creditWithdrawConstants.WITHDRAW_CHIPS_PNL_REQUEST:
      return {
        ...state,
        // loading: true,
      };
    case creditWithdrawConstants.WITHDRAW_CHIPS_PNL_SUCCESS:
      return {
        ...state,
        dWRowDataSuccess: false,
        updateActivitySuccess: true
        // depositChipsPnlItems: action.users.depositChipsPnl
      };
    case creditWithdrawConstants.WITHDRAW_CHIPS_PNL_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case creditWithdrawConstants.DEPOSIT_CHIPS_PNL_REQUEST:
      return {
        ...state,
        // loading: true,
      };
    case creditWithdrawConstants.DEPOSIT_CHIPS_PNL_SUCCESS:
      return {
        ...state,
        dWRowDataSuccess: false,
        updateActivitySuccess: true
        // depositChipsPnlItems: action.users.depositChipsPnl
      };
    case creditWithdrawConstants.DEPOSIT_CHIPS_PNL_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case creditWithdrawConstants.ACCOUNT_HISTORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case creditWithdrawConstants.ACCOUNT_HISTORY_SUCCESS:
      return {
        ...state,
        loading: false,
        accountHistoryItems: action.users.accountHistory
      };
    case creditWithdrawConstants.ACCOUNT_HISTORY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case creditWithdrawConstants.DEPOSIT_CREDIT_REQUEST:
      return {
        ...state,
        // loading: true,
      };
    case creditWithdrawConstants.DEPOSIT_CREDIT_SUCCESS:
      return {
        ...state,
        creditDataSuccess: false,
        updateActivitySuccess: true
      };
    case creditWithdrawConstants.DEPOSIT_CREDIT_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case creditWithdrawConstants.CREDIT_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        addUserSuccess: false,
        dWRowDataSuccess: false,
        updateUserSuccess: false
      };
    case creditWithdrawConstants.CREDIT_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        creditDataSuccess: true,
        creditdataItems: action.users.creditdata
      };
    case creditWithdrawConstants.CREDIT_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case creditWithdrawConstants.ADD_CREDIT_WITHDRAW_REQUEST:
      return {
        ...state
      };
    case creditWithdrawConstants.ADD_CREDIT_WITHDRAW_SUCCESS:
      return {
        ...state,
        creditDataSuccess: false,
        updateActivitySuccess: true
      };
    case creditWithdrawConstants.ADD_CREDIT_WITHDRAW_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case creditWithdrawConstants.GET_LIST_CREDIT_WITHDRAW_REQUEST:
      return {
        ...state,
        loading: true
      };
    case creditWithdrawConstants.GET_LIST_CREDIT_WITHDRAW_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        loading: false,
        items: action.users.getCreditWithdrawList.list,
        total: action.users.getCreditWithdrawList.total
      };
    case creditWithdrawConstants.GET_LIST_CREDIT_WITHDRAW_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case creditWithdrawConstants.GETALL_CREDIT_WITHDRAW_REQUEST:
      return {
        ...state,
        loading: true
      };
    case creditWithdrawConstants.GETALL_CREDIT_WITHDRAW_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        loading: false,
        creditWithdrawItems: action.users.getAllCreditWithdraw,
        creditWithdrawTotal: action.users.getAllCreditWithdraw
      };
    case creditWithdrawConstants.GETALL_CREDIT_WITHDRAW_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case creditWithdrawConstants.UPDATE_CREDIT_WITHDRAW_REQUEST:
      return {
        ...state
      };
    case creditWithdrawConstants.UPDATE_CREDIT_WITHDRAW_SUCCESS:
      return {
        ...state,
        addUserSuccess: true
      };
    case creditWithdrawConstants.UPDATE_CREDIT_WITHDRAW_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case creditWithdrawConstants.DELETE_CREDIT_WITHDRAW_REQUEST:
      return {
        ...state,
        // loading: true
      };
    case creditWithdrawConstants.DELETE_CREDIT_WITHDRAW_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        // loading: false,
      };
    case creditWithdrawConstants.DELETE_CREDIT_WITHDRAW_FAILURE:
      return {
        ...state,
        // loading: false,
        error: action.error
      };
    case creditWithdrawConstants.DISABLE_CREDIT_WITHDRAW_REQUEST:
      return {
        ...state,
        // loading: true
      };
    case creditWithdrawConstants.DISABLE_CREDIT_WITHDRAW_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        // loading: false,
      };
    case creditWithdrawConstants.DISABLE_CREDIT_WITHDRAW_FAILURE:
      return {
        ...state,
        // loading: false,
        error: action.error
      };




    default:
      return state
  }
}