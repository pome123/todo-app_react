import React , { Component } from 'react';

class AddTaskBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { newTask: '' };
  }

  handleChange(e) {
    this.setState({ newTask: e.target.value });
  }

  render() {
    return (
      <form>
        <input type="text" onChange={this.handleChange} />
      </form>
    );
  }
}

export default AddTaskBar;