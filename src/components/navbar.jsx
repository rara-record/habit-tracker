import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return (
      <header className='navbar'>
        <h1 className='navbar-logo'>
          <i className='fas fa-leaf'></i>
        </h1>
        <h2 className='navbar-title'>Habit Tracker</h2>
        <span className="navbar-count">{this.props.totalCount}</span>
      </header>
    )
  }
}

export default Navbar