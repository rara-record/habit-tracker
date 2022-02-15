import React, { Component } from 'react'
import Habit from './habit'

export class Habits extends Component {
  state = {
    habits: [
      {name : 'Reading', count: 0},
      {name : 'Running', count: 0},
      {name : 'Coding', count: 0},
    ]
  };

  handleIncrement = (habit) => {
    console.log(`handleIncrement ${habit.name}`);
  }

  handleDecrement = (habit) => {
    console.log(`handleDecrement ${habit.name}`);
  }

  handleDelete = (habit) => {
    console.log(`handleDelete ${habit.name}`);
  }

  render() {
    return (
      <ul>
        {this.state.habits.map((habit, index) => (
          <Habit 
          habit={habit} 
          key={index}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          />
        ))}
      </ul>
    )
  }
}

export default Habits