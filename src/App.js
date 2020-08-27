import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import Donate from "./pages/Donate";
import Receipt from "./pages/Receipt";
import HowItWorks from "./pages/HowItWorks";
import About from "./pages/About";
import Web3 from "web3";
import Receive from "./pages/Receive";
import { createBrowserHistory } from "history";
import NavBar from "./components/NavBar";
import { ContractABI } from "./contracts/ContractABI";
import { TweenLite, Power4 } from "gsap";
import {
  getCurrency,
  getWallet,
  getDonations,
  getLatest,
  getLeaderboard,
  getTotalExpenditure,
  getPlates,
} from "./redux/actions/actions";
//Redux

import "./index.css";

// Pages

const myHistory = createBrowserHistory();
const standardWallet = "0xef64DdA0290c719b8E72ab5c4036b0cBB3481FB5";
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      splashShow: false,
      synced: false,
      walletChecked: false,
      status: "",
      fields: {},
    };
  }

  btnPress = (e) => {
    TweenLite.to(e.target, 0.1, {
      scale: 0.9,
      delay: 0,
      yoyo: true,
      ease: Power4.easeOut,
      repeat: 1,
    });
  };

  setAmount = (amount, currency, conversion) => {
    this.setState({ amount, currency, conversion }, console.log(this.state));
  };

  setInput = (inp) => {
    this.setState(
      { fields: { ...this.state.fields, [inp.name]: inp.val } },
      () => {
        console.log(this.state);
      }
    );
  };

  async componentDidMount() {
    const metamaskInstalled = typeof window.web3 !== "undefined";

    this.setState({ metamaskInstalled: metamaskInstalled });
    if (metamaskInstalled) {
      await this.checkBrowser();

      await this.loadBlockChainData();

      //      this.props.getWallet();
    } else {
      console.log("no Metamask");
    }
  }
  async loadBlockChainData() {
    const web3 = window.web3;

    const accounts = await web3.eth.getAccounts();
    const check = await web3.eth.getBlock("latest");
    const account = {};
    console.log(check);

    if (accounts && accounts.length > 0) {
      console.log(accounts);
      this.setState({ synced: true });
      account.wallet = accounts[0];
      const networkId = await web3.eth.net.getId();
      account.networkId = networkId;
      const balance = await web3.eth.getBalance(accounts[0]);

      account.balance = balance / 1e18;
      account.standardWallet = standardWallet;
      this.props.getWallet(account);
      this.props.getLatest();
      this.props.getLeaderboard();
      this.props.getTotalExpenditure();
      this.props.getPlates();
    } else {
      console.log("cannot find the account");
      this.setState({ synced: false });
    }
  }
  async checkBrowser() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);

      await window.ethereum.enable();
      return true;
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
      return true;
    } else {
      window.alert("Non-Etherum browser detected.");
      return false;
    }
  }

  /*   async sendTransaction() {
    const web3 = window.web3;
    const transaction = await web3.eth.sendTransaction({
      from: "0x26A4511212D02ccd0dbfeC1E11183f603b0E07D6",
      to: "0xCDE896b4C249F337D231F625Fc541189e96C6c7f",
      value: "1000000000000000",
    });
    console.log(transaction);
    const receipt = await transaction;

    console.log(receipt);
    return receipt;
  } */
  // using the event emitter
  /*
  sendTransaction = () => {
    this.setState({ status: "sending" });
    const web3 = window.web3;
    web3.eth
      .sendTransaction({
        from: "0xC7D513ae6B640B8b7Be58d2925E08465268A9055",
        to: "0xCDE896b4C249F337D231F625Fc541189e96C6c7f",
        value: "1000000000000000",
      })
      .on("transactionHash", (hash) => {
        console.log(hash);
        this.setState({ status: "hash" });
      })
      .on("receipt", (receipt) => {
        console.log(receipt);
        this.setState({ status: "receipt" });
      })
      .on("confirmation", (confirmationNumber, receipt) => {
        console.log(confirmationNumber, receipt);
        this.setState({ status: "sent" });
      })
      .on("error", (error, receipt) => {
        console.log(error, receipt);
        this.setState({ status: "error" });
        if (receipt) {
          console.error(error);
        }
      }); // If a out of gas error, the second parameter is the receipt.
  };
 */

  ethToDollar = (amount) => {
    return parseFloat(
      (amount * Number(this.props.price)).toFixed(2)
    ).toLocaleString();
  };

  sendTransaction = () => {
    this.setState({ status: "sending" });
    const web3 = window.web3;
    var contractInstance = new web3.eth.Contract(ContractABI, standardWallet);

    console.log(contractInstance);

    contractInstance.methods
      .donate()
      .send({
        from: this.props.wallet && this.props.wallet.account.wallet,
        to: standardWallet,
        value:
          this.state.currency == "eth"
            ? this.state.amount * 1e18
            : this.state.conversion * 1e18,
      })
      .on("transactionHash", (hash) => {
        console.log(hash);
        this.setState({ status: "hash" });
      })
      .on("receipt", (receipt) => {
        console.log(receipt);
        this.setState({ status: "receipt" });
      })
      .on("confirmation", (confirmationNumber, receipt) => {
        console.log(confirmationNumber, receipt);
        this.setState({ status: "sent" });
      })
      .on("error", (error, receipt) => {
        console.log(error, receipt);
        this.setState({ status: "error" });
        if (receipt) {
          console.error(error);
        }
      }); // If a out of gas error, the second parameter is the receipt.
  };
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(prevState);

    if (!prevState.price) {
      nextProps.getCurrency().then((res) => {
        return { price: res };
      });
    } else {
      return null;
    }

    return null;
  }
  componentDidUpdate(nextProps) {}

  modeToggle = () => {
    this.props.toggleMode();
  };

  render() {
    return (
      <Router history={myHistory}>
        <div>
          <div>
            {this.state.synced ? <NavBar synced={this.state.synced} /> : null}
          </div>

          <div>
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <Home
                    btnPress={this.btnPress}
                    synced={this.state.synced}
                    metamaskInstalled={this.state.metamaskInstalled}
                    ethToDollar={this.ethToDollar}
                  />
                )}
              />
              <Route
                exact
                path="/leaderboard"
                render={() => <Leaderboard btnPress={this.btnPress} />}
              />
              <Route
                exact
                path="/donate"
                render={() => (
                  <Donate
                    btnPress={this.btnPress}
                    sendTransaction={this.sendTransaction}
                    status={this.state.status}
                    setAmount={this.setAmount}
                  />
                )}
              />
              {/*  <Route exact path="/donate" component={Donate} /> */}

              <Route
                exact
                path="/receipt"
                render={() => <Receipt btnPress={this.btnPress} />}
              />
              <Route
                exact
                path="/howitworks"
                render={() => <HowItWorks btnPress={this.btnPress} />}
              />
              <Route
                exact
                path="/about"
                render={() => <About btnPress={this.btnPress} />}
              />
              <Route
                exact
                path="/receive"
                render={() => (
                  <Receive
                    btnPress={this.btnPress}
                    setAmount={this.setAmount}
                    setInput={this.setInput}
                  />
                )}
              />
            </Switch>
            <div className="nav"></div>
          </div>
        </div>
      </Router>
    );
  }
}

/* export default App; */

const mapStateToProps = (state) => {
  return {
    wallet: state.wallet,
    price: state.UI.price,
  };
};

const mapActionsToProps = (dispatch) => ({
  // getCurrency: (ggg) => dispatch(getCurrency(ggg)),
  getCurrency: (currency) => dispatch(getCurrency(currency)),
  getWallet: (wallet) => dispatch(getWallet(wallet)),
  getDonations: () => dispatch(getDonations()),
  getLatest: () => dispatch(getLatest()),
  getLeaderboard: () => dispatch(getLeaderboard()),
  getLatest: () => dispatch(getLatest()),
  getTotalExpenditure: () => dispatch(getTotalExpenditure()),
  getPlates: () => dispatch(getPlates()),
});

export default connect(mapStateToProps, mapActionsToProps)(App);
