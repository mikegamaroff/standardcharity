import { GET_WALLET } from "../types";

const initialState = {
  loading: false,
  wallet: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_WALLET:
      return {
        ...state,
        account: action.payload,
      };

    default:
      return state;
  }
}
