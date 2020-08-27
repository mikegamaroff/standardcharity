import {
  GET_CURRENCY,
  GET_WALLET,
  GET_DONATIONS,
  GET_LATEST,
  GET_LEADERBOARD,
  GET_TOTAL_EXPENDITURE,
  GET_PLATES,
} from "../types";
import axios from "axios";
const api = "https://api-dev.standardcharity.org/";
export function getCurrency() {
  return function (dispatch) {
    return axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum"
      )
      .then((res) => {
        console.log(res.data[0].current_price);
        dispatch({ type: GET_CURRENCY, payload: res.data[0].current_price });
        return res.data;
        // This is where you push all the selecter unit data to the redux state so it can be immediately updated
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  };
}

export function getWallet(account) {
  alert(account);
  return function (dispatch) {
    dispatch({
      type: GET_WALLET,
      payload: account /* { account, standardWallet } */,
    });
  };
}

export function getDonations(account) {
  return function (dispatch) {
    return axios
      .get(api + "donations/all?page=1&pageSize=10")
      .then((res) => {
        dispatch({
          type: GET_DONATIONS,
          payload: res.data.payload.donations /* { account, standardWallet } */,
        });
        return res.data;
        // This is where you push all the selecter unit data to the redux state so it can be immediately updated
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  };
}

export function getLatest() {
  return function (dispatch) {
    return axios
      .get(api + "donations/latest")
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: GET_LATEST,
          payload: res.data.payload /* { account, standardWallet } */,
        });
        return res.data;
        // This is where you push all the selecter unit data to the redux state so it can be immediately updated
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  };
}

export function getLeaderboard() {
  return function (dispatch) {
    return axios
      .get(api + "donations/max?count=10")
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: GET_LEADERBOARD,
          payload: res.data.payload /* { account, standardWallet } */,
        });
        return res.data;
        // This is where you push all the selecter unit data to the redux state so it can be immediately updated
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  };
}

export function getPlates() {
  return function (dispatch) {
    return axios
      .get(api + "expenditures/plates")
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: GET_PLATES,
          payload: res.data.payload /* { account, standardWallet } */,
        });
        return res.data;
        // This is where you push all the selecter unit data to the redux state so it can be immediately updated
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  };
}

export function getTotalExpenditure() {
  return function (dispatch) {
    return axios
      .get(api + "expenditures/totalEth")
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: GET_TOTAL_EXPENDITURE,
          payload: res.data.payload /* { account, standardWallet } */,
        });
        return res.data;
        // This is where you push all the selecter unit data to the redux state so it can be immediately updated
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  };
}
