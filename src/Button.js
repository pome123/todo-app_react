import React, { Component } from 'react';
import './Button.css';

function Button(props) {
  return (
    <input className="button" type="button" value={props.value} />
  );
}

export default Button;