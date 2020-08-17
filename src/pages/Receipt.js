import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
//import "../rsuite.css";
import "../datePicker.css";
import { DateRangePicker } from "rsuite";
class Receipt extends Component {
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
              <span id="yellow">Pull a tax deductible receipt</span>
            </h2>
          </div>
          <div className="paragraphText">
            <p>
              Receive an IRS compliant form for tax deductible purposes for all
              donations made during the below date range.
            </p>
          </div>
        </div>

        <div className="calendarIcon">
          <img src="/images/cal.svg" alt="calendar" />
        </div>
        <DateRangePicker
          showOneCalendar
          format="MMM D, YYYY"
          className="calDesign"
          placeholder={
            <div className="placeHolder_btn">
              <img src="/images/selectArrows.svg" alt="calendar" />
              Select Dates
            </div>
          }
        />
        <div
          className="donateButton"
          style={{ marginTop: "80px" }}
          onClick={() => this.setState({ splashShow: false })}
        >
          Retrieve
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

export default compose(connect(mapStateToProps, mapActionsToProps))(Receipt);
///////
