import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import NavBar from "../components/NavBar";
class Home extends Component {
  state = {
    //units: null
    splashShow: false,
  };

  static getDerivedStateFromProps(nextProps, prevState) {}

  componentDidMount() {}

  changeRoute = (route) => {
    this.props.history.push(route);
    // console.log(props);
  };
  render() {
    const {} = this.props;
    console.log(this.props);
    return (
      <div>
        {this.state.splashShow ? (
          <div className="splashGrid">
            <div className="splashLogo">
              <img src="/images/logo.png" />
            </div>
            <div className="splashBlurbContainer">
              <div className="splashBlurb">
                A new standard in <span id="yellow">transparency</span> for{" "}
                <span id="yellow">charitable</span> causes.
              </div>
            </div>
            <div className="splashButtonContainer">
              <div className="splashButton">Start</div>
            </div>
            <div className="splashEthereum2">
              <p>Powered by</p>
              <img src="/images/ethereum-white.png" />
            </div>
          </div>
        ) : null}
        <NavBar />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //const user = users[id];

  return {
    state: state,
    UI: state.UI,
  };
};

const mapActionsToProps = (dispatch) => ({
  // clearErrors: ggg => dispatch(clearErrors(ggg)),
});

export default compose(connect(mapStateToProps, mapActionsToProps))(Home);
///////
