const initialState = {
  comments: [
    {
      name: 'Lorem Ipsum',
      email: 'lorem@ipsum',
      body: 'Lorem Ipsum'
    },
    {
      name: 'Lorem Ipsum',
      email: 'lorem@ipsum',
      body: 'Lorem Ipsum'
    }
  ]
};
const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_COMMENTS':
      return {
        ...state,
        comments: action.payload
      };
    default:
      return state;
  }
};

export default commentsReducer;
