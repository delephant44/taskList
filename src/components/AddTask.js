import React, { Component } from "react";

//functional component uses methods, takes props, has state

export default class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = event => {
    event.preventDefault(); //don't refresh page
    console.log("handleSubmit, State:", this.state);
    //need a function to actually submit the info in Tasks component
    this.props.addTask(this.state);
  };

  handleChange = event => {
    this.setState({
      content: event.target.value
    });
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
            //will need value key here, lines up with this.state.content
            value={this.state.content}
            onChange={this.handleChange}
          ></input>
        </form>
      </div>
    );
  }
}
