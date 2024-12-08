//redux-logger Middleware

const { applyMiddleware } = require("redux");
const { createStore } = require("redux");
const { default: logger } = require("redux-logger");

// constants
const GET_PRODUCT = "GET_PRODUCT";
const ADD_PRODUCT = "ADD_PRODUCT";

// state
const initialProducts = {
  products: ["Sugar", "Milk"],
  count: 2,
};

// action
const getProduct = () => {
  return {
    type: GET_PRODUCT,
  };
};
const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

// reducer
const productReducer = (state = initialProducts, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
      };
    case ADD_PRODUCT:
      return {
        products: [...state.products, action.payload],
        count: state.count + 1,
      };
    default:
      return state;
  }
};

// store
const store = createStore(productReducer, applyMiddleware(logger));
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProduct());
store.dispatch(addProduct("Tea"));
