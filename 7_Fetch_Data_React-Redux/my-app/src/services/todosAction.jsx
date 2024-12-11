import axios from "axios";
import {
  GET_TODOS_REQUEST,
  API_URL,
  GET_TODOS_FAILED,
  GET_TODOS_SUCCESS,
} from "./todosConstants";

export const getAllTodos = () => async (dispatch) => {
  dispatch({ type: GET_TODOS_REQUEST });
  try {
    const res = await axios.get(API_URL);
    dispatch({ type: GET_TODOS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_TODOS_FAILED, payload: error.message });
  }
};
