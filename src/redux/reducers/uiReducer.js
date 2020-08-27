import {
  SET_ERRORS,
  LOADING_UI,
  CLEAR_ERRORS,
  GET_CURRENCY,
  GET_DONATIONS,
  GET_LATEST,
  GET_LEADERBOARD,
  GET_TOTAL_EXPENDITURE,
  GET_PLATES,
} from "../types";

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

    case GET_CURRENCY:
      return {
        ...state,
        price: action.payload,
        loading: false,
      };
    case GET_DONATIONS:
      return {
        ...state,
        donations: action.payload,
        loading: false,
      };
    case GET_LATEST:
      return {
        ...state,
        latest: action.payload,
        loading: false,
      };
    case GET_LEADERBOARD:
      return {
        ...state,
        leaderboard: action.payload,
        loading: false,
      };
    case GET_TOTAL_EXPENDITURE:
      return {
        ...state,
        expenditures: action.payload,
        loading: false,
      };
    case GET_PLATES:
      return {
        ...state,
        plates: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}
