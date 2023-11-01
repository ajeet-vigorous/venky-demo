import { balanceConstants } from '../_constants'

export const updateCoin = (newCoinValue) => {
  console.log("action newCoinValue  ", newCoinValue);
  return {
    type: balanceConstants.UPDATE_STATIC_COIN,
    payload: newCoinValue,
  };
};





// export const updatedCoin = (data)  => {

//   console.log("aaaaaaaaaaa1111111",data)
 

// };


// function request() { return { type: balanceConstants.UPDATE_COIN_REQUEST } }
// function success() { return { type: balanceConstants.UPDATE_COIN_SUCCESS,  } }
// function failure() { return { type: balanceConstants.UPDATE_COIN_FAILURE,  } }

