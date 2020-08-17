import { GET_CURRENCY } from "../types";
import axios from "axios";

export function getCurrency() {
  return function (dispatch) {
    return axios
      .get("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD")
      .then((res) => {
        dispatch({ type: GET_CURRENCY, payload: res.data });
        return res.data;
        // This is where you push all the selecter unit data to the redux state so it can be immediately updated
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  };
}
