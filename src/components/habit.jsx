import React, { Component } from 'react'

export class Habit extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count +1});
  }

  handleDecrement = () => {
    this.setState({ count: this.state.count -1});
  }

  render() {
    return (
      <li className='habit'>
        <span className="habit-name">Reading</span>
        <span className="habit-count">{this.state.count}</span>
        <button className='habit-button habit-increase' onClick={this.handleIncrement}>
          <i className="fas fa-square-plus"></i>
        </button>
        <button className='habit-button habit-decrease' onClick={this.handleDecrement}>
          <i className="fas fa-square-minus"></i>
        </button>
        <button className='habit-button habit-delete'>
          <i className="fas fa-trash"></i>
        </button>
      </li>
    )
  }
}

export default Habit