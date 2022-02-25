import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_POSTS } from 'containers/App/constants';
import { setPost, repoLoadingError } from 'containers/App/actions';

import request from 'utils/request';

export function* getPostDetails() {
  const requestURL = `https://jsonplaceholder.typicode.com/posts`;

  try {
    const posts = yield call(request, requestURL);
    yield put(setPost(posts.slice(0, 10)));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

export default function* gitPostData() {
  yield takeLatest(GET_POSTS, getRepos);
}
