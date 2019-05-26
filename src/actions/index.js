import uuidv4 from "uuid/v4";
import { ADD_POST, DELETE_POST } from "./type";
import axios from "axios";

export const createPost = ({ title, body }) => dispatch => {
  axios
    .post("http://localhost:3008/posts", { title: title, body: body })
    .then(res =>
      dispatch({
        type: ADD_POST,
        payload: { id: uuidv4(), title, body }
      })
    );
};
export const deletePost = id => ({
  type: DELETE_POST,
  payload: {
    id
  }
});
