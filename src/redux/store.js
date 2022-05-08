import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import dataReducer from './dataReducer'

const initialState = {
    userinfo: null,
    authenticated: false,
    projects: null,
    user: null,
    drawer: { dashboard: true, project: false, portfolio: false, contact: false, about: false },
    backdrop: false,
};

const middleware = [thunk];



const store = createStore(dataReducer, initialState, compose(applyMiddleware(...middleware),
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "undefined" ? a => a
        : window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;