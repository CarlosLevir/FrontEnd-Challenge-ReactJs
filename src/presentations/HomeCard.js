import React from 'react';

const HomeCard = ({ post }) => (
  <div key={post.id}>
    {post.title}
    {post.id}
    {post.userId}
    {post.body}
  </div>
);

export default HomeCard;
