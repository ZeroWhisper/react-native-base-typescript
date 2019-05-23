import { call, put } from "redux-saga/effects";
import * as LoginActions from "./actions";
const teste = () => {
    console.log("Teste");
};
export function* loginSuccess() {
    try {
        const login = { token: "TESTE", refresh_token: "TESTE2" };
        // https://gist.githubusercontent.com/ZeroWhisper/13c5e83def91ff3948db9f777b38bde5/raw/66fdc4471a6bf20d624ffe3f6fd5a928ba3b3d02/list
        yield call(teste);
        put(LoginActions.loginSuccess(login));
    }
    catch (error) {
        put(LoginActions.loginFailure());
    }
}
//# sourceMappingURL=saga.js.map