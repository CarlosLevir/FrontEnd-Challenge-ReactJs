import { getComments } from '../services/api';

const commentsAction = (e) => {
  getComments(e)
    .then(response => ({
      type: 'GET_COMMENTS',
      payload: response.data
    }))
    .catch(error => console.log('error ', error));
};

export default commentsAction;
