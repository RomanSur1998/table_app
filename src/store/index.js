import { applyMiddleware, combineReducers, createStore } from "redux";
import { PostReducer } from "./GetPostReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  posts: PostReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
