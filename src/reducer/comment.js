import {ACTION_TYPES} from "../actions/comments";

const initState = {comment: null, isLoading: true, isError: false};

const comment = (state = initState, action) => {
    switch (action.type) {
        case ACTION_TYPES.COMMENT_FETCH:
            return {...initState};
        case ACTION_TYPES.COMMENT_FETCH_SUCCESS:
            return {comment: action.comment, isLoading: false, isError: false};
        case ACTION_TYPES.COMMENT_FETCH_ERROR:
            return {comment: null, isLoading: false, isError: true};
        default:
            return state;
    }
};
export default comment;
