import React, { Component } from "react";

//dumb component renders on DOM
//maybe don't make a separate component for this, do it in app header

export default class Title extends Component {
  render() {
    return (
      <div className="header">
        <header className="title">
          <h1>To-Dos!</h1>
        </header>
      </div>
    );
  }
}
