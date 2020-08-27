import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import moment from "moment";
let leaderItems = [
  { key: "0x931D387731bBbC988B312206c...", amount: "$12,430.22" },
  { key: "0x52373e5b61bBbC988B312206c...", amount: "$10,242.00" },
  { key: "0x931D387731bBbC988B312206c...", amount: "$9,220.01" },
  { key: "0x52373e5b61bBbC988B312206c...", amount: "$7,422.98" },
  { key: "0x931D387731bBbC988B312206c...", amount: "$7,210.00" },
  { key: "0x52373e5b61bBbC988B312206c...", amount: "$6,200.00" },
  { key: "0x931D387731bBbC988B312206c...", amount: "$5,930.12" },
  { key: "0x52373e5b61bBbC988B312206c...", amount: "$5,550.00" },
  { key: "0x931D387731bBbC988B312206c...", amount: "$5,231.11" },
  { key: "0x52373e5b61bBbC988B312206c...", amount: "$5,002.20" },
];

class Leaderboard extends Component {
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
    const { latest, leaderboard } = this.props;
    console.log(this.props);
    return (
      <div>
        <div className="mainContent">
          <div className="latestDonation">
            <div className="leftHeader">
              <h2 id="yellow">Latest donation:</h2>
              <div className="timeStamp">
                {moment(latest && latest.timestamp * 1000)
                  .startOf("hour")
                  .fromNow()}
              </div>
            </div>
            <div className="glowBox generic" id="yellow">
              <span id="total">
                {latest &&
                  Number(latest.value / 1000000000000000000).toFixed(3)}{" "}
                ETH
              </span>
              <span id="key">{latest && latest.donator}</span>
            </div>
          </div>
        </div>
        <div className="leaderBoard">
          <div className="leftHeader" id="indent">
            <h2 id="yellow">Top donors:</h2>
          </div>
          {leaderboard &&
            leaderboard.map((val, i) => {
              return (
                <div className="leaderItem" key={i * Math.random()}>
                  <div>
                    <img
                      src={"/images/leader_" + (i + 1) + ".svg"}
                      alt={i + 1}
                    />
                  </div>
                  <div id="key">{val.donator.slice(0, 25)}...</div>
                  <div id="amount">
                    {Number(val.value / 1e18).toFixed(3)} ETH
                  </div>
                </div>
              );
            })}
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
    latest: state.UI.latest,
    leaderboard: state.UI.leaderboard,
  };
};

const mapActionsToProps = (dispatch) => ({
  // clearErrors: ggg => dispatch(clearErrors(ggg)),
});

export default compose(connect(mapStateToProps, mapActionsToProps))(
  Leaderboard
);
///////
