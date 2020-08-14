import React, { Component } from "react";

class NavBar extends Component {
  state = {
    //units: null
    navOpen: false,
  };
  render() {
    return (
      <div>
        <div className="sideNavContainer">
          <div className="btn_donate">
            <div>
              <img src="/images/ethIcon.svg" />
            </div>
            Donate
          </div>
          <div className="donationText">
            <p>Your donations to date:</p>
            <p id="bigPrice">$2,340.32</p>
            <p>Pending donations:</p>
            <p id="smallPrice">$523.54</p>
          </div>
          <div className="navButtons">
            <div className="navButton">
              <img src="/images/navIcon_leaderboard.svg" />
              <h3>Leaderboard</h3>
            </div>
            <div className="navButton">
              <img src="/images/navIcon_receipt.svg" />
              <h3>Request receipt</h3>
            </div>
            <div className="navButton">
              <img src="/images/navIcon_info.svg" />
              <h3>How it works</h3>
            </div>
            <div className="navButton">
              <img src="/images/navIcon_about.svg" />
              <h3>About</h3>
            </div>
          </div>
          <div className="navFooter">Privacy policy</div>
        </div>
        <div className="topNavContainer">
          <div className="hamburger">
            <img src="/images/hamburger.svg" />
          </div>
          <div className="appTitle">Standard Charity</div>
          <div className="walletSync">
            <img src="/images/walletSynced.svg" />
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
