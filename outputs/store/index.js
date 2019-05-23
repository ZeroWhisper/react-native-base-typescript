import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import Reactotron from "./../config/ReactotronConfig";
import rootReducer from "./ducks/rootReducer";
import rootSaga from "./ducks/rootSaga";
const sagaMiddleware = createSagaMiddleware();
sagaMiddleware.run(rootSaga);
const middlewares = [];
middlewares.push(sagaMiddleware);
const applied = applyMiddleware(middlewares);
const composer = __DEV__
    ? compose(applied, Reactotron.createEnhancer())
    : applied;
const store = createStore(rootReducer, composer);
export default store;
//# sourceMappingURL=index.js.map