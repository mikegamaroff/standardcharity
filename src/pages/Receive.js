import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import EthInput from "../components/EthInput";
class Receive extends Component {
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
          <EthInput
            price={this.props.price && this.props.price.USD}
            btnPress={this.props.btnPress}
            heading={"Amount requested"}
          />
          <div className="pdfBtn">
            <img src="/images/pdfBtn.svg" alt="PDF Upload" />
          </div>
          <div
            className="donateButton"
            style={{ marginTop: "80px" }}
            onClick={() => this.setState({ splashShow: false })}
          >
            Request
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
    price: state.UI.price,
  };
};

const mapActionsToProps = (dispatch) => ({
  // clearErrors: ggg => dispatch(clearErrors(ggg)),
});

export default compose(connect(mapStateToProps, mapActionsToProps))(Receive);
///////
