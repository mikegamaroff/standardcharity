import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import EthInput from "../components/EthInput";
import FoxLoader from "../components/FoxLoader";
class Donate extends Component {
  state = {
    //units: null
  };

  //static getDerivedStateFromProps(nextProps, prevState) {}

  changeRoute = (route) => {
    this.props.history.push(route);
    // console.log(props);
  };
  render() {
    const { account, price, btnPress, sendTransaction, status } = this.props;

    return (
      <div>
        <div className="mainContent">
          <div className="centerHeader">
            <h2>
              From <span id="yellow">your address:</span>
            </h2>
            {/*  <span id="key">0x931D387731bBbC988B312206c74F77D004D6B84b</span> */}
            <span id="key">{account && account.wallet}</span>
          </div>
          <div className="donateWallet">
            <div className="glowBox generic" id="yellow">
              <div id="label">Wallet balance:</div>
              <span id="total">{account && account.balance + " ETH"}</span>
              <div id="eth">
                $
                {account && price ? (
                  <>
                    {parseFloat(
                      (account.balance * Number(price.USD)).toFixed(2)
                    ).toLocaleString()}{" "}
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <div className="downArrow">
          <img src="/images/downArrow.svg" alt="Down" />
        </div>
        <div className="centerHeader">
          {status === "sending" ? (
            <>
              {" "}
              <h2>
                <span id="gray">Sending transaction...</span>
                <div className="loadingFox">
                  <FoxLoader />
                </div>
              </h2>
            </>
          ) : status === "hash" ? (
            <>
              <span id="blue">Generating receipt...</span>
              <div className="loadingFox">
                <FoxLoader />
              </div>
            </>
          ) : status === "receipt" ? (
            <>
              <span id="yellow">Saving receipt...</span>
              <div className="loadingFox">
                <FoxLoader />
              </div>
            </>
          ) : status === "sent" ? (
            <>
              <span id="green">Transaction complete!</span>
              <div className="loadingFox">
                <img src="/images/tick.svg" />
              </div>
            </>
          ) : (
            <>
              <h2>
                To <span id="yellow">Standard Charity's address</span>
              </h2>
              <span id="keybg">0xCDE896b4C249F337D231F625Fc541189e96C6c7f</span>
            </>
          )}
        </div>

        <EthInput
          price={price && price.USD}
          btnPress={btnPress}
          heading={"Donation amount"}
        />
        <div
          className="donateButton"
          onMouseDown={btnPress}
          onClick={sendTransaction}
          style={{ marginTop: "10px", marginBottom: "20px" }}
        >
          Donate
          <img src="/images/btn_donate_arrow.svg" alt="Donate" id="dead" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //const user = users[id];

  return {
    state: state,
    price: state.UI.price,
    account: state.wallet.account,
  };
};

const mapActionsToProps = (dispatch) => ({
  // clearErrors: ggg => dispatch(clearErrors(ggg)),
});

export default compose(connect(mapStateToProps, mapActionsToProps))(Donate);
///////
