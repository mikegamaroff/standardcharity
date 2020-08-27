import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import EthInput from "../components/EthInput";
import TextInput from "../components/TextInput";
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
    const { setAmount, plates, setInput, btnPress, price } = this.props;

    return (
      <div>
        <div className="receiveText">
          <EthInput
            price={price && price}
            btnPress={btnPress}
            heading={"Amount requested"}
            setAmount={setAmount}
          />
        </div>
        <div>
          <TextInput
            heading={"Number of plates"}
            name="plates"
            setInput={setInput}
          />
        </div>
        <div className="mainContent">
          <div className="pdfBtn">
            <img src="/images/pdfBtn.svg" alt="PDF Upload" />
          </div>
          <div
            className="donateButton"
            style={{ marginTop: "40px" }}
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
