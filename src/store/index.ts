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

const middlewares = [];
middlewares.push(sagaMiddleware);

const composer = compose(
  applyMiddleware(...middlewares),
  tron.getCreateEnhancer()
);

const store: Store<ApplicationState> = createStore(rootReducer, composer);

sagaMiddleware.run(rootSaga);

export default store;
