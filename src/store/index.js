import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import reduxLogger from "redux-logger";

const store = createStore(rootReducer, applyMiddleware(thunk, reduxLogger));

export default store;