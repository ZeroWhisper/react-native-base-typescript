import { call, put } from "redux-saga/effects";

import * as LoginActions from "./actions";
import { Login } from "./types";

const teste = () => {
  console.log("Teste");
};

export function* loginSuccess(): any {
  try {
    const login: Login = { token: "TESTE", refresh_token: "TESTE2" };

    yield call(teste);

    put(LoginActions.loginSuccess(login));
  } catch (error) {
    put(LoginActions.loginFailure());
  }
}
