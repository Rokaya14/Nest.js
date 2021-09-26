import { combineReducers, createStore, applyMiddleware } from "redux";
import userReducer from "./ducks/counter";
import counterReducer from "./ducks/counter";
import createSagaMiddleware from "redux-saga";
const reducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

const sagaMiddleware = createSagaMiddleware();
const middleWare = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleWare));

export default store;
