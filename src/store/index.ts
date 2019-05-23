import { createStore, compose, applyMiddleware, Store } from "redux";
import createSagaMiddleware from "redux-saga";

import Reactotron from "./../config/reactotron";

import rootReducer from "./ducks/rootReducer";
import rootSaga from "./ducks/rootSaga";

import { LoginState } from "./ducks/Login/types";

export interface ApplicationState {
  login: LoginState;
}

const tron = new Reactotron();

const sagaMonitor = tron.getCreateSagaMonitor();
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
sagaMiddleware.run(rootSaga);

const middlewares = [];
middlewares.push(sagaMiddleware);

const applied = applyMiddleware(...middlewares);

const composer = __DEV__
  ? compose(
      applied,
      tron.getCreateEnhancer()
    )
  : applied;

const store: Store<ApplicationState> = createStore(rootReducer, composer);

export default store;
