import { call, put } from "redux-saga/effects";
import * as LoginActions from "./actions";
const teste = () => {
    console.log("Teste");
};
export function* loginSuccess() {
    try {
        const login = { token: "TESTE", refresh_token: "TESTE2" };
        yield call(teste);
        put(LoginActions.loginSuccess(login));
    }
    catch (error) {
        put(LoginActions.loginFailure());
    }
}
//# sourceMappingURL=saga.js.map