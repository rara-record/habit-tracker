import './app.css';
import React, { Component } from 'react'
import Habits from './components/habits';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    // state 깊은 복사 후, 클릭한 habit의 index 번호를 찾아서 해당 index 번호의 habits 카운트 증가
    const habits = [...this.state.habits] 
    const index = habits.indexOf(habit) 
    habits[index].count++;
    this.setState({ habits }) // { habits : habits } => key : value 축약
  };

  handleDecrement = (habit) => {
    const habits = [...this.state.habits] 
    const index = habits.indexOf(habit) 
    const count = habits[index].count - 1
    habits[index].count = count < 0 ? 0 : count;
    this.setState({ habits }) // { habits : habits } key : value
  };

  handleDelete = habit => {
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({ habits });
  };

  render() {
    return (
      <Habits
        habits={this.state.habits}             
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        onDelete={this.handleDelete}
        />
    )
  }
}

export default App