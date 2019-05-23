/**
 * Action types
 */
export enum LoginTypes {
  REQUEST = "@login/REQUEST",
  SUCCESS = "@login/SUCCESS",
  FAILURE = "@login/FAILURE"
}

/**
 * Data types
 */
export interface Login {
  token: String;
  refresh_token: String;
}

/**
 * State type
 */
export interface LoginState {
  readonly data?: Login;
  readonly loading: boolean;
  readonly error: boolean;
}
