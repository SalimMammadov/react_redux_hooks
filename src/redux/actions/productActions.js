import * as actionTypes from "./actionTypes";
import axios from "axios";

export function getProductsSuccess(products) {
  return {
    type: actionTypes.GET_PRODUCTS_SUCCES,
    payload: products,
  };
}


export function getProducts(categoryId) {
  return function (dispatch) {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url = url + "?categoryId=" + categoryId;
    }
    return axios.get(url).then((r) => {
      dispatch(getProductsSuccess(r.data));
    });
  };
}

export function createProductSuccess(product) {
  return {
    type: actionTypes.CREATE_PRODUCT,
    payload: product,
  };
}

export function updateProductSuccess(product) {
  return {
    type: actionTypes.UPDATE_PRODUCT,
    payload: product,
  };
}

export function saveProductApi(product) {
  //Eger id gonderilibse bu UPDATE , yox eger id yoxdursa demeli bu CREATE funksiyasidir
  return fetch("http://localhost:3000/products/" + (product.id || ""), {
    method: product.id ? "PUT" : "POST",
    headers : {'content-type' : "application/json"},
    body: JSON.stringify(product),
  })
    .then(handleResponse)
    .catch(handleError);
}  

export function saveProduct(product) {
  return function (dispatch) {
    return saveProductApi(product)
      .then((savedProduct) => {
        product.id
          ? dispatch(updateProductSuccess(savedProduct))
          : dispatch(createProductSuccess(savedProduct));
      })
      .catch((error) => {
        throw error;
      });
  };
}

// Meselen fetch ile ..then(response => {response.json()}).then(result => {getProducts(result)})
export async function handleResponse(response) {
  if (response.ok) {
    return response.json();
  }
  const error = await response.text();
  throw new Error(error);
}

export function handleError(error) {
  throw error;
}

export function createProduct() {}
