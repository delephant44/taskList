import React, { Component } from "react";

export default class AddTask extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addTask = this.addTask.bind(this);

  }
  handleChange = event => {
    this.setState({
      content: event.target.value
    });
  };

  addTask = newTask => {
    let newTasks = [...this.state.tasks, newTask];
    this.setState({
      tasks: newTasks
    });
  };
 
  handleSubmit = event => {
    event.preventDefault(); //don't refresh page
    console.log("handleSubmit, State:", this.state);
    //need a function to actually submit the info in Tasks component
    this.addTask(this.state);
  };

  

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add New Task LABEL</label>
          <input
            type="text"
            name="Task"
            placeholder="PLACEHOLDER TEXT"
            onChange={this.handleChange}
          ></input>
        </form>
      </div>
    );
  }
}
