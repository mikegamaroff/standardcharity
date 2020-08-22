import React, { Component } from "react";
import PropTypes from "prop-types";
import { TweenLite, Power4 } from "gsap";

class FoxLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //units: null
    };
  }
  //componentWillMount() {}

  componentDidMount() {
    TweenLite.to(document.getElementById("foxLoader"), 1, {
      scale: 1.5,
      delay: 0,
      yoyo: true,
      ease: Power4.easeInOut,
      repeat: 500,
    });
  }

  /*
  componentWillReceiveProps(nextProps) {}

  shouldComponentUpdate(nextProps, nextState) {}

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {} */

  render() {
    return (
      <div id="foxLoader">
        <img src="/images/metamask.svg" />
      </div>
    );
  }
}

FoxLoader.propTypes = {};

export default FoxLoader;
