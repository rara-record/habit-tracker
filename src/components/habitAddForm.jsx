import React, { memo } from 'react';

const HabitAddForm = memo((props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    // input에 value를 받아서, value가 있다면 onAdd에 value를 담아서 호출함.
    const name = inputRef.current.value;
    name && props.onAdd(name);
    formRef.current.reset(); // inputRef.current.value = '';
  };

  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="Habit"
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddForm;
