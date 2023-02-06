/*
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
How to install redux?
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
use npm lol

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Where to create your store in vanilla React?
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Add your store in index.js!!
import { createStore } from 'redux';

{typical flow}
// STORE -> GLOBALISED STATE

// ACTION
const increment = () => {
  return {
    type: 'INCREMENT',
  }
}

const decrement = () => {
  return {
    type: 'DECREMENT',
  }
}

// REDUCER
const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;  
    default:
      return state;  
  }
}
let store = createStore(counterReducer);

// test using console.log()
store.subscribe(() => {
  console.log(store.getState());
})

// DISPATCH
store.dispatch(increment());

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Combined reducer
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
combining all the reducer functions together 

import { createStore, combineReducers } from 'redux';

in index.js reducers:
import loggedReducer from "./isLogged";
import counterReducer from "./counter";
import { combineReducers } from "redux";

export const allReducer = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer
})

in root index.js:
const store = createStore(
  allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
useSelector hook
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
The useSelector hook is used to retrieve a specific piece of data (or "slice") from the Redux store's state. 
In the example code, useSelector is used to retrieve two slices of state: counter and isLogged.

import { useSelector } from "react-redux";

function App() {
  const counter = useSelector(state => {
    return state.counter;
  });
  const isLogged = useSelector(state => {
    return state.isLogged;
  })
}

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
useDispatch hook
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
useDispatch is a hook that returns the Redux store's dispatch function. 
The dispatch function is used to dispatch actions to the Redux store, which update the store's state.

import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./actions";

function App() {
  const counter = useSelector(state => {
    return state.counter;
  });
  const isLogged = useSelector(state => {
    return state.isLogged;
  })
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      {isLogged ? <h3>Valuable Information I should not see</h3> : ''}
    </div>
  );
}

export default App;























*/