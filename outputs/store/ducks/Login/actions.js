import { action } from "typesafe-actions";
import { LoginTypes } from "./types";
export const loginRequest = (payload) => action(LoginTypes.REQUEST, payload);
export const loginSuccess = (payload) => action(LoginTypes.SUCCESS, payload);
export const loginFailure = (payload) => action(LoginTypes.FAILURE, payload);
//# sourceMappingURL=actions.js.map