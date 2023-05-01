import axios from "axios";
import {
  POST_PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
} from "./actionTypes";

export const addProduct = (newProduct) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .post("http://localhost:8080/products", newProduct)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: POST_PRODUCT_SUCCESS });
    })
    .catch((err) => {
      console.log(err.message);
      dispatch({ type: PRODUCT_FAILURE });
    });
};
