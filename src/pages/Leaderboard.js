import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

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
    // const {} = this.props;
    console.log(this.props);
    return (
      <div>
        <div className="mainContent">
          <div className="latestDonation">
            <div className="leftHeader">
              <h2 id="yellow">Latest donation:</h2>
              <div className="timeStamp">24hrs ago</div>
            </div>
            <div className="glowBox generic" id="yellow">
              <span id="total">$3,321</span>
              <span id="key">0x931D387731bBbC988B312206c74F77D004D6B84b</span>
            </div>
          </div>
        </div>
        <div className="leaderBoard">
          <div className="leftHeader" id="indent">
            <h2 id="yellow">Top donors:</h2>
          </div>
          {leaderItems.map((val, i) => {
            return (
              <div className="leaderItem" key={i * Math.random()}>
                <div>
                  <img src={"/images/leader_" + (i + 1) + ".svg"} alt={i + 1} />
                </div>
                <div id="key">{val.key}</div>
                <div id="amount">{val.amount}</div>
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
  };
};

const mapActionsToProps = (dispatch) => ({
  // clearErrors: ggg => dispatch(clearErrors(ggg)),
});

export default compose(connect(mapStateToProps, mapActionsToProps))(
  Leaderboard
);
///////
