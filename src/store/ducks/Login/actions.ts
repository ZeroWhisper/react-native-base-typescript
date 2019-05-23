import { action } from "typesafe-actions";
import { LoginTypes, Login } from "./types";

export const loginRequest = () => action(LoginTypes.REQUEST);

export const loginSuccess = (data: Login) =>
  action(LoginTypes.SUCCESS, { data });

export const loginFailure = () => action(LoginTypes.FAILURE);
