import {combineReducers} from 'redux'
import accountReducer from './account'
import sessionReducer from './session'

import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage/session'


const persistConfig={

    key:"session",
    storage,
    whitelist:["sessionReducer"]
};

const rootReducer=combineReducers({
    accountReducer,
    sessionReducer
});

export default persistReducer(persistConfig,rootReducer);

