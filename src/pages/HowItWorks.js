import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import YouTube from "react-youtube";
const opts = {
  height: "220",
  width: "100%",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
  },
};
class HowItWorks extends Component {
  state = {
    //units: null
  };

  //static getDerivedStateFromProps(nextProps, prevState) {}

  componentDidMount() {}

  changeRoute = (route) => {
    this.props.history.push(route);
    // console.log(props);
  };
  render() {
    //  const {} = this.props;
    console.log(this.props);
    return (
      <div>
        <div className="mainContent">
          <div className="howItWorks" id="howitworks">
            <div className="centerHeader">
              <h2>
                <span id="yellow">How it works</span>
              </h2>
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
          <div className="bodyText">
            <p>
              Standard Charity operates a “smart contract” that is built on the
              Ethereum network. The protocols of the contract are hard coded in
              giving the charity only one set of options in order to retrieve
              the funds donated, which are locked in escrow, until the charity
              provides proof of use.{" "}
            </p>
            <p>
              The problem that Standard Charity is attempting to solve is that
              of trust, in this case, trust between a donor and a charitable
              organization. We aim to give a donar, as well as anyone who cares
              to look, the ability to track every penny that ever comes into the
              charity, and the exact final destination it is deployed to.
            </p>
            <h2>V1.0 addresses the problem as follows:</h2>
            <p>
              All donations are received in Ethereum tokens and are immediately
              locked into escrow. They are locked into escrow in a first come
              first serve basis. Meaning, if donor 1 donates 1 ETH, donor 2
              donates .5 ETH, and donor 3 donates 2 ETH, the contract will
              release funds as called by the admin in the order they arrived.{" "}
            </p>
            <p>
              All donations are returned to the donor wallet address if they are
              not deployed within 28 days. This is done so that funds do not
              pile up faster then they can be of service to the public and end
              up sitting in the coffers. Also, so that they don’t end up locked
              in contract in the event the admin becomes incapacitated.{" "}
            </p>
            <p>
              To give an example consistent with the 3 donations above, if the
              admin requires funds in the amount of 1.35 ETH the entirety of the
              first donar’s balance will be released to the admin and .35 of the
              second donor’s .5 ETH will be released to the charity leaving
              donor 2 with a balance of .15 ETH in escrow and donor 3 with a
              balance of 2 ETH in escrow.{" "}
            </p>
            <p>
              The retrieval of funds DOES NOT reset the 28 day clock. That clock
              starts the moment funds are donated. In the case of donor 2, the
              charity would have 28 days minus the time passed between donation
              and release of funds, to deploy the remaining .15 ETH that is in
              escrow.{" "}
            </p>

            <h2>Conversion ETH / USD</h2>
            <p>
              Conversion is calculated at the time that the charity asks for
              funds to be released. Meaning, if you donate 1ETH with a value of
              $400 at the time of donation, it is locked in escrow as 1ETH. If 3
              days later the charity requests $200 worth of ETH per demonstrated
              use, and the value of ETH at that point in time is now 1ETH/$200
              USD, then the donation will be recorded as $200 USD.
            </p>
            <h2>Tax deductibility </h2>
            <p>
              Standard Charity has filed for 501(c) 3 status with the IRS. There
              are no users and there is no central database. Instead the system
              recognizes a “user” by the wallet they sync via Web3. That user is
              able to request from the system, a receipt for any specified
              period of time they choose which will be automatically be produced
              in PDF format for submission to the IRS.
            </p>
            <h2>Problems</h2>
            <p>
              There are problems that version 1 does not address, and did not
              have the resource to address. Part of the goal of Standard Charity
              is to gain awareness and credibility in a community which we hope
              will lead to larger donations to further build out the
              technological functionality, or even hear from people on pathways
              to a solution.{" "}
            </p>
            <p>Some problems that we know exist are:</p>
            <ol>
              <li>
                the release of funds and the double spend. Because we are first
                spending and distributing the funds before the escrow is
                released, we are required to have that money in advance. This
                defeats the purpose of donations. Founder Gill Chowdhury is
                starting by providing funds up front, and then receiving funds
                back through donations as they are deployed by the charity.{" "}
              </li>
              <li>
                Conversion and crypto currency. We are launching only accepting
                ETH and would like to open up use to an average user which would
                entail accepting FIAT currencies on chain.
              </li>
              <li>
                API functionality. We are launching with two points of proof for
                the funds deployed. An invoice manually created by the charity
                with any applicable receipts from vendors, as well as a
                corroborating mp4 file both hashed to confirm authenticity are
                the current off chain mechanisms that allow funds to be
                released.
              </li>
            </ol>
            <p>
              A process that further removes trust needed towards the
              authenticity of the video matching the manually created mp4 will
              further the goal of the charity.
            </p>
          </div>
        </div>
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

export default compose(connect(mapStateToProps, mapActionsToProps))(HowItWorks);
///////
