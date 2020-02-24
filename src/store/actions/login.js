import { constants } from "../constants";

export const loggedIn = data => {
    return {
        type: constants.success,
        data
    };
};