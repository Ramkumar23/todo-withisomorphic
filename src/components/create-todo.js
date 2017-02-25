import React, { Component, PropTypes } from 'react';
import _ from 'lodash';


export default class CreateTodos extends Component {


  constructor(props) {
    super(props);
    this.state = {
      error: null,
    };
  }
  handleCreate(event) {
    event.preventDefault();
    const createInput = this.refs.createInput;
    const task = createInput.value;
    const validateInput = this.validateInput(task);
    if (validateInput) {
      this.setState({ error: validateInput });
      return;
    }
    this.setState({ error: null });
    this.props.createTask(task);
    this.refs.createInput.value = ' ';
  }
    validateInput(task) {
    if (!task) {
      return ('Enter a valid task');
    } else if (_.find(this.props.todos, todo => todo.task === task)) {
      return 'Task already exists';
    }
  }
  renderError() {
    if (!this.state.error) { return null; }
    return <div style={{ color: 'red' }}>{this.state.error}</div>;
  }
  render() {
    return (
      <form onSubmit={this.handleCreate.bind(this)}>
        <input type="text" placeholder="Things I need To-Do" ref="createInput" />
        <button>create</button>
      { this.renderError()}
      </form>
    );
  }
}
CreateTodos.propTypes ={
  todos : PropTypes.node.isRequired,
  createTask :PropTypes.node.isRequired,
};
