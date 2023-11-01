import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../_reducers';
import {persistReducer, persistStore} from 'redux-persist'

 import storage from 'redux-persist/lib/storage';

 const persistConfig = {
    key:'persist-store',
    storage
 }

const persistedReducer = persistReducer(persistConfig,rootReducer)
const loggerMiddleware = createLogger();

export const store = createStore(
    persistedReducer,
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        ),
    );

export const persistor = persistStore(store)










/////////not 



// const loggerMiddleware = createLogger();

// export const store = createStore(
//     rootReducer,
//     applyMiddleware(
//         thunkMiddleware,
//         loggerMiddleware
//     )
// );