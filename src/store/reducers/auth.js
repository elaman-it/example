import { AUTH_FAIL, AUTH_SUCCESS, AUTH_START } from "../actions/types";

const initialState = {
  id: null,
  token: null,
  error: null,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_START:
      return {
        ...initialState
      };
    case AUTH_SUCCESS:
      return {
        token: action.token,
        id: action.id
      };
    case AUTH_FAIL:
      return {
        error: action.error.message
      };
  
    default:
      return state;
  }
}

export default auth;