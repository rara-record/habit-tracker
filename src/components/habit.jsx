import React, { memo } from 'react';

export const Habit = memo(({ habit, onIncrement, onDecrement, onDelete }) => {
  const handleIncrement = () => {
    onIncrement(habit);
  };

  const handleDecrement = () => {
    onDecrement(habit);
  };

  const handleDelete = () => {
    onDelete(habit);
  };

  return (
    <li className="habit">
      <span className="habit-name">{habit.name}</span>
      <span className="habit-count">{habit.count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-square-plus"></i>
      </button>
      <button className="habit-button habit-decrease" onClick={handleDecrement}>
        <i className="fas fa-square-minus"></i>
      </button>
      <button className="habit-button habit-delete" onClick={handleDelete}>
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
});

export default Habit;

// PureComponent 후 동작되지 않는 근본적인 문제
// app.js에서 오브젝트 '전체'를 업데이트 하지 않고, 오브젝트 '안에 있는 데이터'를 변경해서 일어남.
// (props가 변경되지 않았기 때문에, 동일한 레퍼런스로 간주 즉, 변화가 없다고 판단)
