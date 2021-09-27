import { combineReducers, createStore, applyMiddleware } from "redux";
import userReducer from "./ducks/counter";
import counterReducer from "./ducks/counter";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./sagas/rootSaga";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  {},
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(watcherSaga);

export default store;
