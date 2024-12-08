// redux require
const { createStore } = require("redux");

// CONSTANTS
const ADD_USER = "ADD_USER";

// state
const initialUser = {
  users: ["Supriyo Das"],
};

// action
const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

// reducer
const userReducer = (state = initialUser, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        users: [...state.users, action.payload],
      };
    default:
      state;
  }
};

// store
const store = createStore(userReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addUser("Rupa Das"));
store.dispatch(addUser("Rishika Das"));
