import { all, takeLatest } from "redux-saga/effects";
import { LoginTypes } from "./Login/types";
import { loginSuccess } from "./Login/saga";
export default function* rootSaga() {
    const effects = [];
    effects.push(takeLatest(LoginTypes.SUCCESS, loginSuccess));
    return yield all(effects);
}
//# sourceMappingURL=rootSaga.js.map