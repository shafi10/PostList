import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectPosts,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import Section from './Section';
import { getPost } from '../App/actions';
import saga from './saga';
import { PostListPage } from './PostLIst';

const key = 'home';

export function HomePage({ loading, posts, loadPosts }) {
  useInjectSaga({ key, saga });

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <>
      {loading ? (
        <div> loading.... </div>
      ) : (
        <article>
          <Helmet>
            <title>Home Page</title>
            <meta
              name="description"
              content="A React.js Boilerplate application homepage"
            />
          </Helmet>
          <Section>
            {posts.map(data => (
              <PostListPage post={data} key={data.id} />
            ))}
          </Section>
        </article>
      )}
    </>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  posts: PropTypes.array,
  loadPosts: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  posts: makeSelectPosts(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    loadPosts: () => dispatch(getPost()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
