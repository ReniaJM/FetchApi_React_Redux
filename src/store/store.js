import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducer from "../reducer/mainReducer";

const logger = store => next => action => {
    let result = next(action);
    return result;
};

export default createStore(reducer, applyMiddleware(logger, thunk))
