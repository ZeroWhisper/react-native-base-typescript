import { LoginState, LoginTypes } from "./types";
import { Reducer } from "redux";

const INITIAL_STATE: LoginState = {
  data: undefined,
  error: false,
  loading: false
};

const reducer: Reducer<LoginState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LoginTypes.REQUEST:
      return { ...INITIAL_STATE, loading: true };
    case LoginTypes.SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case LoginTypes.FAILURE:
      return { ...INITIAL_STATE, error: true };
    default:
      return state;
  }
};

export default reducer;
