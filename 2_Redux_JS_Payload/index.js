// Action With Payload

// create store
const { createStore } = require("redux");

// CONSTANTS
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";

// state
const initialState = {
  count: 0,
};

// action
const incrementByValue = (value) => {
  return {
    type: INCREMENT_BY_VALUE,
    payload: value,
  };
};

// reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_BY_VALUE:
      return {
        ...state,
        count: state.count + action.payload,
      };
    default:
      state;
  }
};

// store
const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementByValue(5));
store.dispatch(incrementByValue(10));
