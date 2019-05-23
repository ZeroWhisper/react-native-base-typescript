import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import Reactotron from "./../config/reactotron";
import rootReducer from "./ducks/rootReducer";
import rootSaga from "./ducks/rootSaga";
const tron = new Reactotron();
const sagaMonitor = tron.getCreateSagaMonitor();
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const middlewares = [];
middlewares.push(sagaMiddleware);
const composer = compose(applyMiddleware(...middlewares), tron.getCreateEnhancer());
const store = createStore(rootReducer, composer);
sagaMiddleware.run(rootSaga);
export default store;
//# sourceMappingURL=index.js.map