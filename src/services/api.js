import request from './request';

const getPosts = () => request.get('/posts');

const getComments = id => request.get(`/comments?postId=1${id}`);

export { getPosts, getComments };
