import React, { Component } from "react";
import { connect } from "react-redux";
import YouTube from "react-youtube";
localStorage.removeItem("videoForget");
class Home extends Component {
  state = {
    //units: null
    splashShow: false,
    videoShow: true,
  };

  componentDidMount() {}
  removeVideo = () => {
    this.setState({ videoShow: false });
    localStorage.setItem("videoForget", true);
  };
  render() {
    // const {} = this.props;
    console.log(this.props);
    const opts = {
      height: "220",
      width: "100%",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };
    return (
      <div>
        {this.state.splashShow ? (
          <div className="splashGrid">
            <div className="splashLogo">
              <img src="/images/logo.png" alt="logo" />
            </div>
            <div className="splashBlurbContainer">
              <div className="splashBlurb">
                A new standard in <span id="yellow">transparency</span> for{" "}
                <span id="yellow">charitable</span> causes.
              </div>
            </div>
            <div className="splashButtonContainer">
              <div
                className="splashButton"
                onClick={() => this.setState({ splashShow: false })}
              >
                Start
              </div>
            </div>
            <div className="splashEthereum2">
              <p>Powered by</p>
              <img src="/images/ethereum-white.png" alt="ethereum" />
            </div>
          </div>
        ) : (
          <>
            <div className="mainContent">
              {this.state.videoShow && !localStorage.getItem("videoForget") ? (
                <div className="howItWorks" id="howitworks">
                  <div className="howItWorksHeader">
                    <h3>How it works</h3>
                    <div className="dontShow" onClick={this.removeVideo}>
                      <span>Don't show again</span>
                      <img src="images/dontShowIcon.svg" alt="x" />
                    </div>
                  </div>

                  <div className="howItWorksvideo">
                    <YouTube
                      videoId="6eELkIfzqU0"
                      opts={opts}
                      onReady={this._onReady}
                    />
                    {/*  <img src="/images/videoHolder.png" /> */}
                  </div>
                </div>
              ) : null}
              <div className="donatedAmounts">
                <div className="holdBox">
                  <h2 id="yellow">On hold</h2>
                  <div className="glowBox generic" id="yellow">
                    <span id="total">$3,321</span>
                  </div>
                </div>
                <div className="deployedBox">
                  <h2 id="green">Deployed</h2>
                  <div className="glowBox generic" id="green">
                    <span id="total">$3,321</span>
                    <img src="/images/foodIcon.svg" alt="Food" />
                    <div className="deployedTotals">
                      <b>1,540</b> plates of food
                    </div>
                    <div className="deployedTotals">
                      <b>$2.21c</b> per plate
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
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
  // getCurrency: (ggg) => dispatch(getCurrency(ggg)),
  //  getCurrency: (ggg) => dispatch(getCurrency(ggg)),
});

export default connect(mapStateToProps, mapActionsToProps)(Home);
///////

//https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD
