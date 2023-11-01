import { balanceConstants } from '../_constants';

const initialState = {
  staticCoin: 10,
};

export const balances = (state = initialState, action) => {
  switch (action.type) {
    case balanceConstants.UPDATE_STATIC_COIN:
      return {
        ...state,
        staticCoin: action.payload
      };

    // Api Methos Apply 
    case balanceConstants.UPDATE_COIN_REQUEST:
      return {
        ...state,
        loading: true
      };
    case balanceConstants.UPDATE_COIN_SUCCESS:
      return {
        ...state,
        loading: false,
        // activeSportItems: action.users.activeSport
      };
    case balanceConstants.UPDATE_COIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    default:
      return state;
  }
};


