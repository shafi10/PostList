import React from 'react';
import Link from './Link';

import PostBody from './PostBody';
import H3 from '../../components/H3';

export function PostListPage({ post }) {
  return (
    <Link to={`/post/${post.id}`}>
      <PostBody>
        <H3>Title : {post.title}</H3>
        <div>Body : {post.body}</div>
      </PostBody>
    </Link>
  );
}
