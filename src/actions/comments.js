export const ACTION_TYPES = {
  COMMENT_FETCH: "COMMENT_FETCH",
  COMMENT_FETCH_SUCCESS: "COMMENT_FETCH_SUCCESS",
  COMMENT_FETCH_ERROR: "COMMENT_FETCH_ERROR"
};

export function fetchComment(comment) {
  return {
    type: ACTION_TYPES.COMMENT_FETCH,
    comment
  };
}

export function fetchCommentSuccess(comment) {
  return {
    type: ACTION_TYPES.COMMENT_FETCH_SUCCESS,
    comment
  };
}

export function fetchCommentError() {
  return {
    type: ACTION_TYPES.COMMENT_FETCH_ERROR
  };
}

export const getComments = () => {
  const URL = "https://jsonplaceholder.typicode.com/comments";
  return fetch(URL, { method: "GET" }).then(response =>
    Promise.all([response, response.json()])
  );
};

export const fetchCommentsToApp = () => {
  return dispatch => {
    dispatch(fetchComment());
    return getComments().then(([response, json]) => {
      if (response.status === 200) {
        dispatch(fetchCommentSuccess(json));
      } else {
        dispatch(fetchCommentError());
      }
    });
  };
};
