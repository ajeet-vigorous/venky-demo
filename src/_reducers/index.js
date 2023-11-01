import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { creditWithdraw } from './creditWithdraw.reducer';
import { createapp } from './createapp.reducer';
import { bank } from './bank.reducer';
import { master } from './master.reducer';
import { bet } from './bet.reducer';
import { createAccount } from './createAccount.reducer';
import  { balances }  from './balance.reducer';

const rootReducer = combineReducers({
  authentication,
  users,
  alert,
  creditWithdraw,
  createapp,
  bank,
  master,
  bet,
  createAccount,
  balances,
});

export default rootReducer;
