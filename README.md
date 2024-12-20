
![image](https://github.com/user-attachments/assets/71ea29a0-b113-4756-b29e-8eb26a9ae73d)


# Redux

## **Redux Packages and Libraries useful links**

**Redux Ecosystem: A Comprehensive Table**

| Package/Library | Description | Installation Command | Resource Link |
|---|---|---|---|
| **Redux** | Core library for state management | `npm install redux` | [https://redux.js.org/](https://redux.js.org/) |
| **Redux-Logger** | Popular middleware for Redux applications that logs actions and state changes to the console. | `npm install redux-logger` | [https://www.npmjs.com/package/redux-logger](https://www.npmjs.com/package/redux-logger) |
| **React Redux** | Connects React components to Redux store | `npm install react-redux` | [https://react-redux.js.org/introduction/getting-started](https://react-redux.js.org/introduction/getting-started) |
| **Redux Toolkit** | Simplifies Redux development with RTK Query and other features | `npm install @reduxjs/toolkit` | [https://redux-toolkit.js.org/](https://redux-toolkit.js.org/) |
| **Redux Thunk** | Middleware for handling asynchronous actions | `npm install redux-thunk` | [https://www.geeksforgeeks.org/what-is-the-use-of-middleware-redux-thunk/](https://www.geeksforgeeks.org/what-is-the-use-of-middleware-redux-thunk/) |
| **Redux Saga** | Advanced middleware for managing side effects and complex asynchronous flows | `npm install redux-saga` | [https://redux-saga.js.org/](https://redux-saga.js.org/) |
| **Redux DevTools Extension** | Browser extension for debugging Redux apps | - (Browser extension) | [https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en](https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) |
| **ReSelect** | Library for creating memoized selectors to optimize performance | `npm install reselect` | [https://github.com/reduxjs/reselect](https://github.com/reduxjs/reselect) |
| **Immer** | Library for creating immutable state updates efficiently | `npm install immer` | [https://immerjs.github.io/immer/](https://immerjs.github.io/immer/) |

**Additional Resources:**

* **Redux Documentation:** [https://redux.js.org/](https://redux.js.org/)
* **React Redux Documentation:** [https://react-redux.js.org/introduction/getting-started](https://react-redux.js.org/introduction/getting-started)
* **Redux Toolkit Documentation:** [https://redux-toolkit.js.org/](https://redux-toolkit.js.org/)



## Introduction to Redux

Redux is a predictable state container for JavaScript applications. It helps manage complex application state in a centralized, organized, and efficient way. 

**Why Use Redux?**

* **Predictable State Changes:** Redux enforces a strict pattern for state updates, making it easier to understand and debug.
* **Centralized State Management:** All application state is stored in a single source of truth, making it easier to manage and reason about.
* **Time Travel Debugging:** Redux DevTools allow you to inspect past states and actions, making debugging much simpler.
* **Community and Ecosystem:** A large and active community with a wealth of tools and libraries to support Redux development.

**Core Concepts of Redux**

1. **Store:**
   * A single source of truth that holds the entire application state.
   * It's an object tree that can be accessed and updated in a predictable way.

2. **Actions:**
   * Plain JavaScript objects that describe what happened.
   * They are sent to the store to trigger state changes.

3. **Reducers:**
   * Pure functions that take the current state and an action as input and return a new state.
   * They are responsible for updating the state based on the received action.

**Redux Workflow**

1. **Dispatch an Action:**
   * An action is created and dispatched to the store.
2. **Reducer Updates State:**
   * The reducer receives the action and the current state.
   * It calculates the new state based on the action type and payload.
3. **Store Notifies Subscribers:**
   * The store notifies any components that are subscribed to state changes.
4. **Components Re-render:**
   * Components re-render with the updated state.

  ![image](https://github.com/user-attachments/assets/aab85709-8f56-42e9-8aa8-d403619f667c)


**Example:**

```javascript
// Action
const INCREMENT = 'INCREMENT';
const incrementAction = { type: INCREMENT };

// Reducer
const initialState = { count: 0 };
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    default:
      return state;
  }
};

// Store
const store = createStore(counterReducer);

// Dispatching an Action
store.dispatch(incrementAction);
```

**Key Benefits of Redux**

* **Improved State Management:** Centralized state management makes it easier to understand and debug complex applications.
* **Time Travel Debugging:** Redux DevTools allow you to inspect past states and actions.
* **Predictable State Changes:** Immutable state and pure functions ensure predictable state updates.
* **Community and Ecosystem:** A large and active community with a wealth of tools and libraries.

## Redux: A Simplified Explanation

Redux is a powerful state management library for JavaScript applications. It helps manage complex application state in a predictable and organized way.

### **Core Concepts:**

![image](https://github.com/user-attachments/assets/c40fd40c-9ccb-40c2-9b1b-e7b6ee73d8dc)


1. **State:**
   - The single source of truth for your application's data.
   - It's an object that represents the current state of your app.
   - **Example:**
     ```javascript
     const initialState = {
       count: 0
     };
     ```

2. **Actions:**
   - Plain JavaScript objects that describe what happened.
   - They are sent to the store to trigger state changes.
   - **Example:**
     ```javascript
     const incrementAction = {
       type: 'INCREMENT'
     };
     ```

3. **Reducers:**
   - Pure functions that take the current state and an action as input and return a new state.
   - They are responsible for updating the state based on the received action.
   - **Example:**
     ```javascript
     const counterReducer = (state = initialState, action) => {
       switch (action.type) {
         case 'INCREMENT':
           return { count: state.count + 1 };
         default:
           return state;
       }
     };
     ```

4. **Store:**
   - The heart of Redux.
   - It holds the application's state, listens to actions, and triggers state changes using reducers.
   - **Example:**
     ```javascript
     import { createStore } from 'redux';

     const store = createStore(counterReducer);
     ```

**How it Works:**

1. **Dispatch an Action:**
   - You dispatch an action to the store.
   - This action is a plain JavaScript object that describes what happened.
2. **Reducer Updates State:**
   - The store passes the action to the reducer.
   - The reducer processes the action and returns a new state.
3. **Store Notifies Subscribers:**
   - The store updates its internal state with the new state.
   - It notifies any components that are subscribed to state changes.
4. **Components Re-render:**
   - The subscribed components re-render with the updated state.

**Simple Example:**

```javascript
import { createStore } from 'redux';

// Initial state
const initialState = {
  count: 0
};

// Reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    default:
      return state;
  }
};

// Create the store
const store = createStore(counterReducer);

// Subscribe to state changes
store.subscribe(() => {
  console.log(store.getState());
});

// Dispatch an action
store.dispatch({ type: 'INCREMENT' });
```

**Key Points:**

- **Immutability:** Always return a new state object instead of modifying the existing one.
- **Pure Functions:** Reducers should be pure functions, meaning they should not have side effects and should always return the same output for the same input.
- **Centralized State:** The Redux store acts as a single source of truth for your application's state.

### **Payload in Redux**

A payload in Redux is additional data that is often included within an action object. It provides context or specific information to the reducer, allowing it to make more precise state updates. 

**Simple Example:**

Let's consider a counter application where we want to increment the counter by a specific value, not just by 1.

**Action:**

```javascript
const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE';

const incrementByValueAction = (value) => ({
  type: INCREMENT_BY_VALUE,
  payload: value
});
```

**Reducer:**

```javascript
const initialState = {
  count: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_BY_VALUE:
      return { count: state.count + action.payload };
    default:
      return state;
  }
};
```

**Explanation:**

1. **Action Creation:**
   - The `incrementByValueAction` function creates an action object with two properties:
     - `type`: The action type, which is a string identifier.
     - `payload`: The value to increment the counter by.

2. **Reducer Handling:**
   - The `counterReducer` checks the action type.
   - If the type is `INCREMENT_BY_VALUE`, it accesses the `payload` property of the action to get the increment value.
   - It then updates the `count` state by adding the `payload` value to the current count.

**Dispatching the Action:**

```javascript
store.dispatch(incrementByValueAction(5));
```

This will increment the counter by 5.

**Use Cases for Payloads:**

- **Passing data to reducers:** For example, passing user input, API response data, or other relevant information.
- **Conditional state updates:** Using the payload to determine how the state should be updated based on specific conditions.
- **Batch actions:** Combining multiple actions into a single action with a payload containing an array of changes.

### **Multiple Reducers and `combineReducers`**

As your application grows, managing a single, monolithic reducer can become cumbersome. To address this, Redux provides the `combineReducers` function, which allows you to split your state into smaller, more manageable pieces, each handled by its own reducer.

**How `combineReducers` Works:**

1. **Create Multiple Reducers:**
   - Each reducer handles a specific slice of the state.
   - Reducers are pure functions that take the current state and an action, returning the new state.

2. **Combine Reducers:**
   - Use the `combineReducers` function to combine multiple reducers into a single root reducer.
   - This creates a new reducer that handles the entire application state.

3. **Provide the Root Reducer to the Store:**
   - Pass the combined reducer to the `createStore` function to create the store.

**Example:**

```javascript
import { combineReducers } from 'redux';

// Reducer for the counter slice
const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    default:
      return state;
  }
};

// Reducer for the theme slice
const themeReducer = (state = { theme: 'light' }, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { theme: state.theme === 'light' ? 'dark' : 'light' };
    default:
      return state;
  }
};

// Combine reducers
const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer
});

// Create the store
const store = createStore(rootReducer);
```

**Key Points:**

- **State Shape:** The combined state will be an object with keys corresponding to the reducer names.
- **Accessing State:** To access a specific slice of the state, use dot notation:
   ```javascript
   const state = store.getState();
   const count = state.counter.count;
   const theme = state.theme.theme;
   ```
- **Dispatching Actions:** Dispatching actions remains the same. The reducer responsible for handling the action will be invoked.

**Benefits of `combineReducers`:**

- **Improved Organization:** Separating concerns into smaller reducers makes your code more modular and easier to maintain.
- **Scalability:** As your application grows, adding new features becomes simpler by introducing new reducers.
- **Testability:** Testing individual reducers becomes more straightforward.

## **Middleware in Redux**

Middleware in Redux provides a way to intercept and modify actions before they reach the reducer. It's a powerful tool for handling asynchronous operations, logging, and other side effects that are not directly related to updating the state.

**How Middleware Works:**

1. **Action Dispatch:**
   - An action is dispatched to the store.
2. **Middleware Intercept:**
   - Middleware functions intercept the action.
   - They can modify the action, delay it, or even prevent it from reaching the reducer.
3. **Reducer Update:**
   - If the action passes through the middleware, it reaches the reducer.
   - The reducer processes the action and updates the state.

**Common Use Cases for Middleware:**

- **Asynchronous Operations:**
   - Handling API calls, timers, and other asynchronous tasks.
   - Common middleware libraries like Redux Thunk and Redux Saga are used for this purpose.
- **Logging:**
   - Logging actions and state changes for debugging and monitoring.
- **Error Handling:**
   - Catching and handling errors that occur during action processing.
- **Authentication and Authorization:**
   - Adding authentication and authorization checks to actions.

**Example: Logging Middleware**

```javascript
const loggerMiddleware = (store) => (next) => (action) => {
  console.log('Dispatching:', action);
  const result = next(action);
  console.log('Next state:', store.getState());
  return result;
};

const store = createStore(reducer, applyMiddleware(loggerMiddleware));
```

**Explanation:**

1. **Middleware Function:**
   - The `loggerMiddleware` function takes three arguments: `store`, `next`, and `action`.
2. **Logging:**
   - Before dispatching the action to the next middleware or reducer, it logs the action to the console.
3. **Next Middleware:**
   - The `next` function is called to pass the action to the next middleware or the reducer.
4. **Logging After:**
   - After the action is processed, it logs the new state to the console.

**Additional Tips:**

- **Use Middleware Libraries:** Consider using popular middleware libraries like Redux Thunk or Redux Saga to simplify asynchronous operations and error handling.
- **Compose Middleware:** You can compose multiple middleware functions to create a chain of middleware.
- **Be Mindful of Order:** The order in which middleware functions are applied can affect their behavior.

### **Redux-Logger: A Powerful Debugging Tool**

**Redux-logger** is a popular middleware for Redux applications that logs actions and state changes to the console. It's a valuable tool for debugging and understanding the flow of actions and state updates in your application.

**Installation:**

```bash
npm install redux-logger
```

**Usage:**

```javascript
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(logger));
```

**How it Works:**

1. **Action Dispatch:**
   - When an action is dispatched, the `redux-logger` middleware intercepts it.
2. **Logging:**
   - The middleware logs the following information to the console:
     - **Previous state:** The state before the action was processed.
     - **Action:** The dispatched action object.
     - **Next state:** The state after the action was processed.
3. **Action Propagation:**
   - The middleware then passes the action to the next middleware or reducer.

**Key Benefits:**

- **Debugging:** Helps identify issues and understand the state flow.
- **Learning:** Provides a clear visual representation of Redux's inner workings.
- **Performance Monitoring:** Can be used to identify performance bottlenecks by logging action dispatch and state update times.

**Customization:**

`redux-logger` offers various customization options:

- **Level of Logging:** Control the level of detail logged (e.g., log only actions, or actions and state changes).
- **Formatting:** Customize the output format of the logs.
- **Predicate:** Filter actions based on specific criteria.
- **Duration:** Log the time taken for an action to be processed.

### **Fetching Data with Redux-Thunk**

Redux-Thunk is a popular middleware for Redux that allows you to dispatch functions instead of plain actions. This makes it easier to handle asynchronous operations like fetching data from APIs. 

**Here's a step-by-step guide on how to fetch data using Redux-Thunk:**

**1. Install Redux-Thunk:**

```bash
npm install redux-thunk
```

**2. Create an Action Creator:**

```javascript
export const fetchData = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_DATA_FAILURE', error });
    }
  };
};
```

**3. Create a Reducer:**

```javascript
const initialState = {
  data: [],
  loading: false,
  error: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_DATA_SUCCESS':
      return { ...state, loading: false, data: action.payload };
    case 'FETCH_DATA_FAILURE':
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};
```

**4. Configure the Store:**

```javascript
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(dataReducer, applyMiddleware(thunk));
```

**5. Dispatch the Action:**

```javascript
store.dispatch(fetchData());
```

**Explanation:**

1. **Action Creator:**
   - The `fetchData` action creator returns a function that takes `dispatch` as an argument.
   - It fetches data from the API using the `fetch` API.
   - On success, it dispatches a `FETCH_DATA_SUCCESS` action with the fetched data as the payload.
   - On failure, it dispatches a `FETCH_DATA_FAILURE` action with the error.

2. **Reducer:**
   - The `dataReducer` handles three action types:
     - `FETCH_DATA_REQUEST`: Sets the `loading` state to `true`.
     - `FETCH_DATA_SUCCESS`: Sets the `loading` state to `false` and updates the `data` state with the fetched data.
     - `FETCH_DATA_FAILURE`: Sets the `loading` state to `false` and updates the `error` state with the error.

3. **Store Configuration:**
   - The `thunk` middleware is applied to the store to enable dispatching functions.

4. **Dispatching the Action:**
   - When the `fetchData` action is dispatched, it triggers the asynchronous fetch and subsequent state updates.

**Key Points:**

- **Asynchronous Operations:** Redux-Thunk allows you to handle asynchronous operations within your actions.
- **Error Handling:** The `try...catch` block ensures proper error handling and dispatching of appropriate actions.
- **State Management:** The reducer manages the loading, data, and error states.
- **Component Rendering:** Your React components can subscribe to the store and re-render based on the updated state.

## **Fetching Data with Axios in React-Redux**

**1. Install Required Packages:**

```bash
npm install axios redux-thunk
```

**2. Create an Action Creator:**

```javascript
// actions.js
import axios from 'axios';

export const fetchData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://api.example.com/data');
      dispatch({ type: 'FETCH_DATA_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'FETCH_DATA_FAILURE', error });
    }
  };
};
```

**3. Create a Reducer:**

```javascript
// reducer.js
const initialState = {
  data: [],
  loading: false,
  error: null,
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_DATA_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_DATA_SUCCESS':
      return { ...state, loading: false, data: action.payload };
    case 'FETCH_DATA_FAILURE':
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
}
```

**4. Connect to the Store and Fetch Data:**

```javascript
// App.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './actions';

function App() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  // ... rest of your app logic
}
```

**Explanation:**

1. **Action Creator:**
   - Dispatches `FETCH_DATA_REQUEST` to indicate loading.
   - Fetches data using Axios.
   - Dispatches `FETCH_DATA_SUCCESS` or `FETCH_DATA_FAILURE` based on the API response.

2. **Reducer:**
   - Handles the different action types to update the state:
     - `FETCH_DATA_REQUEST`: Sets `loading` to `true`.
     - `FETCH_DATA_SUCCESS`: Sets `loading` to `false` and updates `data`.
     - `FETCH_DATA_FAILURE`: Sets `loading` to `false` and updates `error`.

3. **Component:**
   - Dispatches the `fetchData` action on component mount.
   - Uses `useSelector` to access the `data`, `loading`, and `error` states.
   - Renders the data, loading indicator, or error message based on the state.

**Key Points:**

- **Asynchronous Operations:** Redux-Thunk allows you to handle asynchronous operations within your actions.
- **Error Handling:** The `try...catch` block ensures proper error handling and dispatching of appropriate actions.
- **State Management:** The reducer manages the loading, data, and error states.
- **Component Rendering:** The component re-renders based on the updated state, providing a seamless user experience.

## **React Toolkit**

React Toolkit simplifies Redux development by providing a number of helpful utilities and conventions. 

### Create a Counter App using React Toolkit

**1. Install React Toolkit:**

```bash
npm install @reduxjs/toolkit
```

**2. Create a Redux Slice:**

```javascript
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
```

**3. Create a React Component:**

```javascript
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from './counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
    </div>
  );
}

export default Counter;
```

**4. Set Up the Store:**

```javascript
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

**Explanation:**

1. **Redux Toolkit Slice:**
   - Defines the initial state, action types, and action reducers.
   - The `createSlice` helper function generates action creators and reducer functions.

2. **React Component:**
   - Uses `useSelector` to access the `count` state.
   - Uses `useDispatch` to dispatch actions to the Redux store.
   - Dispatches the appropriate action on button clicks.

3. **Store Configuration:**
   - Uses `configureStore` to create the Redux store.
   - Adds the `counterReducer` to the store's reducer.

**Key Benefits of Using React Toolkit:**

- **Simplified State Management:** The `createSlice` helper function makes it easier to define state slices and actions.
- **Immer Integration:** Immutability is handled automatically, reducing boilerplate code.
- **Enhanced Developer Experience:** Clear syntax, concise code, and improved tooling.

### **Fetching Data with Axios, Redux-Toolkit, and React**

**1. Set Up the Project:**
Ensure you have a React project set up. Install the necessary dependencies:

```bash
npm install @reduxjs/toolkit axios
```

**2. Create a Redux Slice:**

```javascript
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const response = await axios.get('https://api.example.com/data');
  return response.data;
});

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;
```

**3. Create a React Component:**

```javascript
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './dataSlice';

function App() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

**Explanation:**

1. **Redux Toolkit Slice:**
   - **`createAsyncThunk`:** Defines an asynchronous action that fetches data using Axios.
   - **`extraReducers`:** Handles the different states of the asynchronous operation:
     - `pending`: Sets `loading` to `true`.
     - `fulfilled`: Sets `loading` to `false` and updates `data`.
     - `rejected`: Sets `loading` to `false` and updates `error`.

2. **React Component:**
   - Dispatches the `fetchData` action on component mount.
   - Uses `useSelector` to access the `data`, `loading`, and `error` states.
   - Renders different UI elements based on the state:
     - Loading indicator while fetching data.
     - Error message if there's an error.
     - List of data items if the fetch is successful.

**Key Points:**

- **Asynchronous Operations:** `createAsyncThunk` simplifies handling asynchronous actions.
- **Error Handling:** The `extraReducers` handle both success and failure cases.
- **State Management:** The Redux Toolkit slice manages the loading, data, and error states.
- **Component Rendering:** The component re-renders based on the updated state.

### **Setting Up Project with react-redux, fetch data, react-toolkit:**

1. **Create a new React app:**
   ```bash
   npx create-react-app my-app
   cd my-app
   ```
2. **Install dependencies:**
   ```bash
   npm install @reduxjs/toolkit axios react-redux
   ```

**Project Structure:**

```
my-app/
  public/
  src/
    App.js
    store/
      index.js
      dataSlice.js
    components/
      DataComponent.js
```

**Creating the Redux Store:**

1. **Create a Redux store:**
   ```javascript
   // src/store/index.js
   import { configureStore } from '@reduxjs/toolkit';
   import dataReducer from './dataSlice';

   export const store = configureStore({
       reducer: {
           data: dataReducer,
       },
   });
   ```

**Creating the Data Slice:**

```javascript
// src/store/dataSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    data: [],
    loading: false,
    error: null,
};

export const fetchData = createAsyncThunk('data/fetchData', async () => {
    const response = await axios.get('https://api.example.com/data');
    return response.data;
});

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default dataSlice.reducer;
```

**Creating the React Component:**

```javascript
// src/components/DataComponent.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../store/dataSlice';

function DataComponent() {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.data);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <ul>
                    {data.map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default DataComponent;
```

**Integrating into the App:**

```javascript
// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import DataComponent from './components/DataComponent';

function App() {
    return (
        <Provider store={store}>
            <DataComponent />
        </Provider>
    );
}

export default App;
```

**Explanation:**

1. **Redux Toolkit:**
   - `createSlice` creates a slice of state with reducers and actions.
   - `createAsyncThunk` handles asynchronous actions, including fetching data.
2. **Fetching Data:**
   - The `fetchData` thunk dispatches actions to update the state during different stages of the fetch process.
3. **Component Rendering:**
   - The `DataComponent` fetches data on mount using the `useEffect` hook.
   - It renders different UI elements based on the `loading`, `error`, and `data` states.

By following these steps and understanding the code, you can effectively fetch and display data from an API using Axios, Redux Toolkit, and React.
