import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

class About extends Component {
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
          <div className="centerHeader">
            <h2>
              <span id="yellow">About Standard Charity</span>
            </h2>
          </div>
          <div className="bodyText">
            <p>
              Standard Charity is the first-of-its-kind giving solution that
              uses the power of the blockchain to bring peace of mind to the act
              of giving, and to ensure money donated goes directly to those who
              need it most.
            </p>
            <p>
              Blockchain technology brings accountability to non-profits, and
              creates a decentralized public ledger with every transaction
              visible, and every penny accounted for.
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

export default compose(connect(mapStateToProps, mapActionsToProps))(About);
///////
