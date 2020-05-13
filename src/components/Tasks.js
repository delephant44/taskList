import React, { Component } from "react";

export default class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { id: 1, content: "Animal Crossing" },
        { id: 2, content: "Super Smash Bros" }
      ]
    };
    this.deleteTask = this.deleteTask.bind(this);
  }

  deleteTask = id => {
    const newList = this.state.tasks.filter(currentTask => {
      return currentTask.id !== id; //return the tasks that are NOT the current task, so we filter can return a new array without the deleted task
    });
    console.log(`Task number ${id} was deleted`);
    this.setState({
      //set the state to this new array using setState method
      tasks: newList
    });
  };

  render() {
    //Q why can't I move deleteTask into a method above like I did with handleChange?
    //A had to use es 6 formatting for the map method below

    return this.state.tasks.length ? ( //if the list has a length
      this.state.tasks.map(currentTask => {
        //show the content of the list
        return (
          <div key={currentTask.id}>
            <span
              onClick={() => {
                this.deleteTask(currentTask.id);
              }}
            >
              {currentTask.content}
            </span>
          </div>
        );
      })
    ) : (
      //if not, show below
      <div>
        <p>You have no more tasks!</p>
      </div>
    );
  }
}

// render() {
//   return (
//     <div id="todos">
//       <CreateTodo addTodo={this.addTodo} />
//       {this.state.todos.map(todo => (
//         <Todo todo={todo} key={todo.id}
//         // updateTodo={}
//         removeTodo={this.removeTodo} />
//       ))}
//     </div>
//   );
// }
