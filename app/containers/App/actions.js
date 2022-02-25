import {
  GET_POSTS,
  SET_POSTS,
  POST_ERROR,
  GET_POSTS_DETAILS,
  SET_POSTS_DETAILS,
  DETAILS_ERROR,
} from './constants';

export function getPost() {
  return {
    type: GET_POSTS,
  };
}

export function setPost(posts) {
  return {
    type: SET_POSTS,
    payload: posts,
  };
}

export function repoLoadingError(error) {
  return {
    type: POST_ERROR,
    error,
  };
}

export function getPostDetails(id) {
  return {
    type: GET_POSTS_DETAILS,
    id,
  };
}

export function setPostDetails(posts) {
  return {
    type: SET_POSTS_DETAILS,
    payload: posts,
  };
}

export function detailesLoadingError(error) {
  return {
    type: DETAILS_ERROR,
    error,
  };
}
