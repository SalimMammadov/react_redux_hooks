import * as actionTypes from "./actionTypes";
import axios from "axios";

export function changeCategory(category) {
  return {
    type: actionTypes.CHANGE_CATEGORY,
    payload: category,
  };
}

export function getCategoriesSuccess(categories) {
  return {
    type: actionTypes.GET_CATEGORIES_SUCCESS,
    payload: categories,
  };
}

export function getCategories() {
  return function (dispatch) {
    let url = "http://localhost:3000/categories";
    return axios.get(url).then((r) => {
      dispatch(getCategoriesSuccess(r.data));
    });
  };
}
