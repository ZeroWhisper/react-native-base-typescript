import { LoginTypes } from "./types";
const INITIAL_STATE = {
    data: undefined,
    error: false,
    loading: false
};
const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LoginTypes.REQUEST:
            return Object.assign({}, INITIAL_STATE, { loading: true });
        case LoginTypes.REQUEST:
            return Object.assign({}, state, { loading: false, data: action.payload });
        case LoginTypes.REQUEST:
            return Object.assign({}, INITIAL_STATE, { error: true });
        default:
            return state;
    }
};
export default reducer;
//# sourceMappingURL=index.js.map