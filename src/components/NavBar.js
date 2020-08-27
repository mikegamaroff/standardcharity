import React, { Component } from "react";
import { TweenLite, Power4 } from "gsap";
import { withRouter } from "react-router";
let hamburgerOpen = {
  opacity: 1,
  rotation: 0,
  scale: 1,
  display: "inherit",
  ease: Power4.easeOut,
};
let hamburgerClose = {
  rotation: 360,
  opacity: 0,
  scale: 0,
  display: "hidden",
  ease: Power4.easeOut,
};
let navOpen = {
  x: -250,
  display: "inherit",
  ease: Power4.easeOut,
};
let navClose = {
  x: 0,
  display: "hidden",
  ease: Power4.easeOut,
};
class NavBar extends Component {
  state = {
    //units: null
    navOpen: false,
  };

  menuSwitch = (route) => {
    console.log("finished");

    if (route) {
      this.props.history.push(route);
    }
  };
  menuHamburger = (route) => {
    //  document.getElementById(id).className = "unitOver";

    /*    TweenLite.fromTo(
      document.getElementById(id),
      0.5,
      { css: { top: -250, autoRound: false } },
      { css: { top: 250, autoRound: false }, ease: Power4.easeOut }
    ); */

    this.state.navOpen
      ? (navOpen = {
          ...navOpen,
          onComplete: this.menuSwitch,
          onCompleteParams: [route],
        })
      : (navOpen.onComplete = "");

    if (this.state.navOpen) {
      TweenLite.to(document.getElementById("overlay"), 0.5, {
        display: "block",
        opacity: 1,
        delay: 0,
        yoyo: true,
        repeat: 1,
      });
    }
    TweenLite.fromTo(
      document.getElementById("hamburger"),
      0.5,
      !this.state.navOpen ? hamburgerOpen : hamburgerClose,
      !this.state.navOpen ? hamburgerClose : hamburgerOpen
    );
    TweenLite.fromTo(
      document.getElementById("closebtn"),
      0.5,
      !this.state.navOpen ? hamburgerClose : hamburgerOpen,
      !this.state.navOpen ? hamburgerOpen : hamburgerClose
    );

    TweenLite.fromTo(
      document.getElementById("sidenav"),
      0.5,
      !this.state.navOpen ? navOpen : navClose,
      !this.state.navOpen ? navClose : navOpen
    );

    this.setState({ navOpen: !this.state.navOpen ? true : false });
  };

  render() {
    return (
      <div>
        <div className="hamburger" onClick={this.menuHamburger}>
          <img id="closebtn" src="/images/closeBtn.svg" alt="Close" />
          <img id="hamburger" src="/images/hamburger.svg" alt="Menu" />
        </div>
        <div className="sideNavContainer" id="sidenav">
          <div className="navFooter">Privacy policy</div>
          <div
            className="btn_donate"
            id="yellow"
            onClick={() => this.menuHamburger("/donate")}
          >
            <img src="/images/ethIcon.svg" alt="Ethereum" />
            Donate
          </div>
          <div className="donationText">
            <p>Your donations to date:</p>
            <p id="bigPrice">$2,340.32</p>
            <p>Pending donations:</p>
            <p id="smallPrice">$523.54</p>
          </div>
          <div className="navButtons">
            <div className="navButton" onClick={() => this.menuHamburger("/")}>
              <img src="/images/navIcon_home.svg" alt="Home" />
              <h3>Home</h3>
            </div>
            <div
              className="navButton"
              onClick={() => this.menuHamburger("/leaderboard")}
            >
              <img src="/images/navIcon_leaderboard.svg" alt="Leaderboard" />
              <h3>Leaderboard</h3>
            </div>
            <div
              className="navButton"
              onClick={() => this.menuHamburger("/receipt")}
            >
              <img src="/images/navIcon_receipt.svg" alt="Receipt" />
              <h3>Request receipt</h3>
            </div>
            <div
              className="navButton"
              onClick={() => this.menuHamburger("/howitworks")}
            >
              <img src="/images/navIcon_info.svg" alt="Info" />
              <h3>How it works</h3>
            </div>
            <div
              className="navButton"
              onClick={() => this.menuHamburger("/about")}
            >
              <img src="/images/navIcon_about.svg" alt="About" />
              <h3>About</h3>
            </div>
            <div
              className="navButton"
              onClick={() => this.menuHamburger("/receive")}
            >
              <img src="/images/navIcon_admin.svg" alt="Admin" />
              <h3>Receive payment</h3>
            </div>
          </div>
        </div>
        <div className="topNavContainer">
          <div></div>

          <div className="appTitle">Standard Charity</div>
          <div className="walletSync">
            <img
              src={
                this.props.synced
                  ? "/images/walletSynced.svg"
                  : "/images/walletUnsynced.svg"
              }
              alt="Wallet"
            />
          </div>
        </div>
        <div className="colorOverlay" id="overlay"></div>
      </div>
    );
  }
}

export default withRouter(NavBar);
