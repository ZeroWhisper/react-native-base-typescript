import { action } from "typesafe-actions";
import { LoginTypes } from "./types";
export const loginRequest = () => action(LoginTypes.REQUEST);
export const loginSuccess = (data) => action(LoginTypes.SUCCESS, { data });
export const loginFailure = () => action(LoginTypes.FAILURE);
//# sourceMappingURL=actions.js.map