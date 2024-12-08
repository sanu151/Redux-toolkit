// Redux Counter App

const { createStore } = require("redux");

// CONSTANTS
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

// STATE
const initialState = {
  count: 0,
};

// ACTION
const incrementAction = () => {
  return {
    type: INCREMENT,
  };
};
const decrementAction = () => {
  return {
    type: DECREMENT,
  };
};
const resetAction = () => {
  return {
    type: RESET,
  };
};

// REDUCER
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };
    default:
      state;
  }
};

// STORE
const store = createStore(counterReducer);

store.subscribe(() => console.log(store.getState()));

store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(decrementAction());
store.dispatch(decrementAction());
store.dispatch(resetAction());
store.dispatch(incrementAction());
