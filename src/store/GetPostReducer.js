const InitialState = {
  posts: [],
  totalPosts: 1,
};
export const GET_POSTS = "GET_POSTS";
export const GET_ALL_POSTS = "GET_ALL_POSTS";
export const PostReducer = (state = InitialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: (state.posts = action.payload),
      };
    case GET_ALL_POSTS:
      return {
        ...state,
        totalPosts: (state.totalPosts = action.payload),
      };
    default:
      return state;
  }
};

export const getPostsAction = (payload) => ({
  type: GET_POSTS,
  payload: payload,
});
export const getTotalPosts = (payload) => ({
  type: GET_ALL_POSTS,
  payload: payload,
});
