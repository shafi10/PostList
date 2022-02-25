/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const makeSelectLoading = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.error,
  );

const makeSelectPosts = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.posts,
  );

const makeSelectPostsDetails = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.postDetails,
  );

export {
  selectGlobal,
  makeSelectLoading,
  makeSelectError,
  makeSelectPosts,
  makeSelectPostsDetails,
};
