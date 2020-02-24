import update from 'immutability-helper';
import loginCredentials from "../loginJson";
import { constants } from "../constants";

const initialState = {
    loginData: loginCredentials,
    loggedIn: false
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.loggedIn: return update(state, {
            data: { $set: action.data }
        });
        case constants.success: return update(state, {
            loggedIn: { $set: action.data }
        });
        default: return state;
    }
};

