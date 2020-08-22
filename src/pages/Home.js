import React, { Component } from "react";
import { connect } from "react-redux";
import YouTube from "react-youtube";
import { TweenLite, Power4 } from "gsap";
import { Link } from "react-router-dom";
localStorage.removeItem("videoForget");
class Home extends Component {
  state = {
    //units: null
    splashShow: false,
    videoShow: true,
    blurbText: (
      <div className="splashBlurb">
        A new standard in <span id="yellow">transparency</span> for{" "}
        <span id="yellow">charitable</span> causes.
      </div>
    ),
  };

  componentDidMount() {}
  removeVideo = () => {
    this.setState({ videoShow: false });
    localStorage.setItem("videoForget", true);
  };
  changeText = () => {
    this.setState({
      blurbText: (
        <div>
          {" "}
          {!this.props.synced && !this.props.metamaskInstalled ? (
            <>
              <div className="splashBlurb">
                To begin, you must have a Metamask ethereum enabled browser with
                a synced wallet.
              </div>
              <a href="http://metamask.io">
                <div className="metamaskImage">
                  <img src="/images/metamask.svg" />
                </div>
                <div className="downloadMetamask">DOWNLOAD METAMASK</div>
              </a>
            </>
          ) : !this.props.synced && this.props.metamaskInstalled ? (
            <>
              <div className="splashBlurb">
                You have a Metamask browser but you must setup your ethereum
                wallet in your Metamask settings.
              </div>
              <a href="https://metamask.zendesk.com/hc/en-us/articles/360015489531-Getting-Started-With-MetaMask-Part-1-">
                <div className="metamaskImage">
                  <img src="/images/metamask.svg" />
                </div>
                <div className="downloadMetamask">GET HELP</div>
              </a>
            </>
          ) : null}
        </div>
      ),
    });
  };
  metaMaskTransition = (e) => {
    TweenLite.to(document.getElementById("splashlogo"), 1, {
      scale: 0.7,
      y: -50,
      delay: 0,
      yoyo: true,
      ease: Power4.easeOut,
      repeat: 0,
    });
    TweenLite.to(document.getElementById("splashBlurbContainer"), 1, {
      opacity: 0,

      delay: 0,
      yoyo: true,
      ease: Power4.easeOut,
      repeat: 1,
    });
    TweenLite.to(document.getElementById("splashBlurbContainer"), 1, {
      y: 0,
      ease: Power4.easeOut,
      onComplete: this.changeText,
    });

    TweenLite.to(document.getElementById("splashButton"), 1, {
      scale: 0.7,
      opacity: 0,
      pointerEvents: "none",
      delay: 0,
      ease: Power4.easeOut,
    });
  };
  render() {
    const { account, synced, noAccount } = this.props;

    console.log(account && account.wallet);
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
        {!synced ? (
          <div className="splashGrid">
            <div className="splashLogo" id="splashlogo">
              <img src="/images/logo.png" alt="logo" />
            </div>
            <div className="splashBlurbContainer" id="splashBlurbContainer">
              {this.state.blurbText}
            </div>
            <div className="splashButtonContainer" id="splashButton">
              <div
                className="splashButton"
                onClick={() => this.metaMaskTransition()}
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
                    <span id="total">$3,351</span>
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
    account: state.wallet && state.wallet.account,
  };
};

const mapActionsToProps = (dispatch) => ({
  // getCurrency: (ggg) => dispatch(getCurrency(ggg)),
  //  getCurrency: (ggg) => dispatch(getCurrency(ggg)),
});

export default connect(mapStateToProps, mapActionsToProps)(Home);
///////

//https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD
