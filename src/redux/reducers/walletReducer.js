import {} from "../types";

const initialState = {
  loading: false,
  wallet: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    /*   case UPDATING_ADDRESS:
      return {
        ...state,
        loading: true,
      }; */

    default:
      return state;
  }
}
