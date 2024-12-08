// Redux with JavaScript

// LifeCycle : State -> Dispatch action -> Reducer -> Store

const { createStore } = require("redux");

//Defening Constants
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";

//States
const initialCounterState = {
  count: 0,
};

const initialUserState = {
  user: [{ name: "Supriyo Das" }],
};

// Actions : Object => {type, payload}

// Action Creater
const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};

const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};

const addUser = () => {
  return {
    type: ADD_USER,
    payload: { name: "Rishika Das" },
  };
};

// Create Reducer
const counterReducer = (state = initialCounterState, action) => {
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
    default:
      state;
  }
};

// Store: getState(), dispatch(), subscribe()

// Create Store
const store = createStore(counterReducer);

// Subscribe Store
store.subscribe(() => {
  console.log(store.getState()); // getState Store
});

// Dispatch Store
store.dispatch({ type: INCREMENT });
store.dispatch({ type: INCREMENT });
store.dispatch({ type: INCREMENT });
store.dispatch({ type: DECREMENT });
