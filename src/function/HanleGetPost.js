import axios from "axios";
import { getPostsAction, getTotalPosts } from "../store/GetPostReducer";

export async function hanleGetPosts(dispatch, currentPage, searching) {
  try {
    let URL = `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=10`;

    if (searching) {
      URL += `&q=${searching}`;
    }
    const response = await axios.get(URL);
    console.log("response", response.headers["x-total-count"]);

    dispatch(getPostsAction(response.data));
    dispatch(getTotalPosts(response.headers["x-total-count"]));
  } catch (error) {
    console.log("error", error);
  }
}
