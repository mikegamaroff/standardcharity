import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import EthInput from "../components/EthInput";
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
    // const { price } = this.props;

    return (
      <div>
        <div className="mainContent">
          <div className="centerHeader">
            <h2>
              From <span id="yellow">your address:</span>
            </h2>
            <span id="key">0x931D387731bBbC988B312206c74F77D004D6B84b</span>
          </div>
          <div className="donateWallet">
            <div className="glowBox generic" id="yellow">
              <div id="label">Wallet balance:</div>
              <span id="total">$114.23</span>
              <div id="eth">0.032 ETH</div>
            </div>
          </div>
        </div>
        <div className="downArrow">
          <img src="/images/downArrow.svg" alt="Down" />
        </div>
        <div className="centerHeader">
          <h2>
            To <span id="yellow">Standard Charity's address</span>
          </h2>
          <span id="keybg">0x931D387731bBbC988B312206c74F77D004D6B84b</span>
        </div>

        <EthInput
          price={this.props.price && this.props.price.USD}
          btnPress={this.props.btnPress}
          heading={"Donation amount"}
        />
        <div
          className="donateButton"
          onMouseDown={this.props.btnPress}
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
  };
};

const mapActionsToProps = (dispatch) => ({
  // clearErrors: ggg => dispatch(clearErrors(ggg)),
});

export default compose(connect(mapStateToProps, mapActionsToProps))(Donate);
///////