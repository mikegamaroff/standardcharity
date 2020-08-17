import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import Donate from "./pages/Donate";
import Receipt from "./pages/Receipt";
import Receive from "./pages/Receive";
import { createBrowserHistory } from "history";
import NavBar from "./components/NavBar";
import { TweenLite, Power4 } from "gsap";
import { getCurrency } from "./redux/actions/actions";
//Redux

import "./index.css";

// Pages

const myHistory = createBrowserHistory();

export class App extends Component {
  state = {
    //units: null
    splashShow: false,
  };
  btnPress = (e) => {
    TweenLite.to(e.target, 0.1, {
      scale: 0.9,
      delay: 0,
      yoyo: true,
      ease: Power4.easeOut,
      repeat: 1,
    });
  };
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(prevState);

    if (!prevState.price) {
      nextProps.getCurrency().then((res) => {
        return { price: res };
      });

      // return { price: "poo" };
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
            <NavBar />
          </div>

          <div>
            <Switch>
              <Route exact path="/" component={Home} />

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
});

export default connect(mapStateToProps, mapActionsToProps)(App);
