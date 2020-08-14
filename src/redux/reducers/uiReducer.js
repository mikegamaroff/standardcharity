import { SET_ERRORS, LOADING_UI, CLEAR_ERRORS } from "../types";

const initialState = {
  loading: false,
  errors: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_ERRORS:
      return {
        ...state,
        loading: false,
        updating: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        loading: false,
        updating: false,
        errors: null,
      };
    case LOADING_UI:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}
