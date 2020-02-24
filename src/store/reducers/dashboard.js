import update from 'immutability-helper';
import dashboardJson from "../dashboardJson";
import { constants } from "../constants";

const initialState = {
    dashboardData: dashboardJson
}

export const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.employeeData: return update(state, {
            login: { $set: true },
            data: { $set: action.data }
        });
        default: return state;
    }
};