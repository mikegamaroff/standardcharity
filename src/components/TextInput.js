import React, { Component } from "react";
import PropTypes from "prop-types";

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //units: null
    };
  }

  /*   componentWillMount() {}

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {}

  shouldComponentUpdate(nextProps, nextState) {}

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {} */
  handleChange = (e) => {
    console.log(e.target.name);
    this.setState({ name: e.target.name, val: e.target.value }, () => {
      this.props.setInput(this.state);
    });
  };

  render() {
    return (
      <div>
        <div className="centerHeader">
          <h2>
            <span id="yellow">{this.props.heading}</span>
          </h2>
        </div>
        <div className="fieldBack">
          <input
            onChange={this.handleChange}
            name={this.props.name}
            type="number"
          />
        </div>
      </div>
    );
  }
}

TextInput.propTypes = {};

export default TextInput;
