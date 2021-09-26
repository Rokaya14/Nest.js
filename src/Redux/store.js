import { combineReducers, createStore } from "redux";
import userReducer from "./ducks/counter";
import counterReducer from "./ducks/counter";

const reducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

const store = createStore(reducer);

export default store;
