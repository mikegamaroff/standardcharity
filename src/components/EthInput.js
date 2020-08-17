import React, { Component } from "react";
import PropTypes from "prop-types";

let dollarConvert;
let ethConvert;
class EthInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //units: null
      currency: "dollar",
    };
  }

  /*   componentWillMount() {}

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {}

  shouldComponentUpdate(nextProps, nextState) {}

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {} */
  handleChange = (e) => {
    console.log(this.props.price);
    this.setState({
      amount: e.target.value,
      conversion:
        this.state.currency === "dollar"
          ? parseFloat(
              (e.target.value / Number(this.props.price)).toFixed(2)
            ).toLocaleString()
          : parseFloat(
              (e.target.value * Number(this.props.price)).toFixed(2)
            ).toLocaleString(),
    });
  };
  currencySwitch = () => {
    dollarConvert = parseFloat(
      (this.state.amount / Number(this.props.price)).toFixed(2)
    ).toLocaleString();

    ethConvert = parseFloat(
      (this.state.amount * Number(this.props.price)).toFixed(2)
    ).toLocaleString();

    this.setState(
      {
        currency: this.state.currency === "dollar" ? "eth" : "dollar",
      },
      () => {
        this.setState({
          conversion:
            this.state.currency === "dollar" &&
            !isNaN(dollarConvert) &&
            !isNaN(ethConvert)
              ? dollarConvert
              : ethConvert,
        });
      }
    );
  };
  render() {
    return (
      <div>
        <div className="centerHeader">
          <h2>
            <span id="yellow">{this.props.heading}</span>
          </h2>
        </div>
        <div className="fieldBack">
          <div
            className="currencySwitcher"
            onClick={this.currencySwitch}
            onMouseDown={this.props.btnPress}
          >
            {this.state.currency === "dollar" ? (
              <img src="/images/currency_dollar.svg" alt="Dollar" />
            ) : (
              <img src="/images/currency_eth.svg" alt="Ether" />
            )}
          </div>
          <input onChange={this.handleChange} type="number" />
        </div>
        <div className="conversion">
          = {this.state.currency === "eth" ? "$" : null}
          {this.state.conversion}{" "}
          {this.state.currency === "dollar" ? "ETH" : null}
        </div>
      </div>
    );
  }
}

EthInput.propTypes = {};

export default EthInput;
