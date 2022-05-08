import { linkClasses } from '@mui/material';
import { SET_BACKDROP, ADD_PROJECT, EDIT_PROJECT, GET_PROJECT, DELETE_PROJECT, SIGN_IN, SIGN_OUT, GET_PROFILE, EDIT_PROFILE, NAVIGATIONDRAWER } from './types';


const initialState = {
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PROFILE:
            return {
                ...state,
                userinfo: action.payload[0]
            }
        case EDIT_PROFILE:
            return {
                ...state,
                userinfo: action.payload
            }
        case SIGN_IN:

            return {
                ...state,
                authenticated: true,
                user: action.payload,
            }
        case SIGN_OUT:
            return {
                ...state,
                authenticated: false,
                user: null,
            }
        case NAVIGATIONDRAWER:
            let temp = {}
            for (const [key, value] of Object.entries(state.drawer)) {
                action.payload == key ? temp[key] = true : temp[key] = false;

            }
            return {
                ...state,
                drawer: temp,
            }
        case GET_PROJECT:
            return {
                ...state,
                projects: action.payload
            }
        case EDIT_PROJECT:
            return {
                ...state,
            }
        case SET_BACKDROP:
            return {
                ...state,
                backdrop: state.backdrop ? false : true,
            }
        default:
            return state;
    }
}
