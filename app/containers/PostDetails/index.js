import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useInjectSaga } from 'utils/injectSaga';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectPostsDetails,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import H1 from 'components/H1';
import saga from './saga';
import { getPostDetails } from '../App/actions';
import Container from './Container';

const key = 'details';

function PostDetailsPage({ loading, loadPostsDetails, postDetails, match }) {
  useInjectSaga({ key, saga });

  useEffect(() => {
    loadPostsDetails(match.params.id);
  }, []);

  //console.log(props, 'props');
  return (
    <div>
      <Helmet>
        <title>Post Details</title>
        <meta
          name="description"
          content="Post details page of React.js application"
        />
      </Helmet>
      <Container>
        <H1>Post Details Page</H1>
      </Container>
    </div>
  );
}

PostDetailsPage.propTypes = {
  loading: PropTypes.bool,
  postDetails: PropTypes.object,
  loadPostsDetails: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  postDetails: makeSelectPostsDetails(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    loadPostsDetails: id => dispatch(getPostDetails(id)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(PostDetailsPage);
