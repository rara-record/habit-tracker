import React, { PureComponent } from 'react';

class HabitAddForm extends PureComponent {
  formRef = React.createRef();
  inputRef = React.createRef();

  onSubmit = event => {
    event.preventDefault();
    // input에 value를 받아서, value가 있다면 onAdd에 value를 담아서 호출함.
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.formRef.current.reset(); // this.inputRef.current.value = '';
  };

  render() {
    console.log('HabitAddForm');
    return (
      <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="습관을 입력하세요"
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
