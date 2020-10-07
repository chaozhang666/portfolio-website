import React, { Component } from 'react'
import Typed from 'typed.js';
import { Typography } from '@material-ui/core';

class Typing extends React.Component {
  componentDidMount() {
  	// If you want to pass more options as props, simply add
    // your desired props to this destructuring assignment.
    const { strings } = this.props;
    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
    	strings: strings,
      typeSpeed: 40,
      backDelay: 1500, 
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
  	// Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy();
  }

  render() {

    const textStyle = {
      color: '#fff',
      fontSize: '30px',
      textShadow: '0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #7effdb, 0 0 30px #7effdb, 0 0 40px #7effdb, 0 0 55px #7effdb, 0 0 75px #7effdb'
    }

    return (
      <div className="wrap">
        <div className="type-wrap">
          <span
            style={textStyle}
            ref={(el) => { this.el = el; }}
          />
        </div>
      </div>
    );
  }
}

export default Typing;