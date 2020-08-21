import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import Donate from "./pages/Donate";
import Receipt from "./pages/Receipt";
import Web3 from "web3";
import Receive from "./pages/Receive";
import { createBrowserHistory } from "history";
import NavBar from "./components/NavBar";
import { TweenLite, Power4 } from "gsap";
import { getCurrency, getWallet } from "./redux/actions/actions";
//Redux

import "./index.css";

// Pages

const myHistory = createBrowserHistory();

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { splashShow: false, synced: false, walletChecked: false };
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
  async componentDidMount() {
    const metamaskInstalled = typeof window.web3 !== "undefined";

    this.setState({ metamaskInstalled: metamaskInstalled });
    if (metamaskInstalled) {
      await this.checkBrowser();
      await this.loadBlockChainData();
    } else {
      console.log("no Metamask");
    }
  }
  async loadBlockChainData() {
    const web3 = window.web3;
    const account = {};
    const accounts = await web3.eth.getAccounts();

    if (accounts) {
      this.setState({ synced: true });
      account.wallet = accounts[0];
      const networkId = await web3.eth.net.getId();
      account.networkId = networkId;
      const balance = await web3.eth.getBalance(accounts[0]);
      account.balance = balance;

      this.props.getWallet(account);
    } else {
      console.log("cannot find the account");
    }
  }
  async checkBrowser() {
    /*  if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);

      await window.ethereum.enable();
    } else  */ if (
      window.web3
    ) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert("Non-Etherum browser detected.");
    }
  }

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
                  <Home btnPress={this.btnPress} synced={this.state.synced} />
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
                render={() => <Donate btnPress={this.btnPress} />}
              />
              {/*  <Route exact path="/donate" component={Donate} /> */}

              <Route
                exact
                path="/receipt"
                render={() => <Receipt btnPress={this.btnPress} />}
              />

              <Route
                exact
                path="/receive"
                render={() => <Receive btnPress={this.btnPress} />}
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
    mode: state.UI && state.UI.mode === "dark" ? "dark" : "light",
  };
};

const mapActionsToProps = (dispatch) => ({
  // getCurrency: (ggg) => dispatch(getCurrency(ggg)),
  getCurrency: (ggg) => dispatch(getCurrency(ggg)),
  getWallet: (hhh) => dispatch(getWallet(hhh)),
});

export default connect(mapStateToProps, mapActionsToProps)(App);
