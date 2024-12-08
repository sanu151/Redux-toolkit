//Multiple Reducer

const { combineReducers, createStore } = require("redux");

// Product Constants
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

//Cart Constants
const GET_CART = "GET_CART";
const ADD_CART = "ADD_CART";

// Product State
const initialProductState = {
  products: ["Sugar", "Salt"],
  numberOfProducts: 2,
};
const initialCartState = {
  cart: ["Sugar"],
  numberOfProducts: 1,
};

// Product Actions
const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};
const addProducts = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

// Cart Actions
const getCart = () => {
  return {
    type: GET_CART,
  };
};
const addCart = (product) => {
  return {
    type: ADD_CART,
    payload: product,
  };
};

// Product Reducer
const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };
    case ADD_PRODUCT:
      return {
        products: [...state.products, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };
    default:
      return state;
  }
};

// Cart Reducer
const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case GET_CART:
      return {
        ...state,
      };
    case ADD_CART:
      return {
        cart: [...state.cart, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };
    default:
      return state;
  }
};

// Combine Reducer
const rootReducer = combineReducers({
  productR: productReducer,
  cartR: cartReducer,
});

// Store
const store = createStore(rootReducer);
store.subscribe(() => {
  console.log(store.getState());
});

// Product dispatch
store.dispatch(getProducts());
store.dispatch(addProducts("Tea"));

// Store dispatch
store.dispatch(getCart());
store.dispatch(addCart("Rice"));
