import produce from 'immer';
import {
  SET_POSTS,
  POST_ERROR,
  DETAILS_ERROR,
  SET_POSTS_DETAILS,
} from './constants';

export const initialState = {
  loading: true,
  error: false,
  posts: [],
  postDetails: {},
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_POSTS:
        draft.loading = false;
        draft.error = false;
        draft.posts = action.payload;
        break;

      case POST_ERROR:
        draft.posts = [];
        draft.loading = false;
        draft.error = false;
        break;

      case SET_POSTS_DETAILS:
        draft.postDetails = action.payload;
        draft.loading = false;
        draft.error = false;
        break;

      case DETAILS_ERROR:
        draft.postDetails = {};
        draft.loading = false;
        draft.error = false;
        break;
    }
  });

export default appReducer;
