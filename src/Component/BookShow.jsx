import React, { Component } from "react";

export default class BookShow extends Component {
  state = {
    count: 1,
    name: "Arun",
  };

  componentDidUpdate() {
    console.log("arun");
  }


  

  handleadd = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>Movie Name : {this.props.moviename}</h1>
        <h2>Count :{this.state.count}</h2>
        <button onClick={this.handleadd}>ADD Movie</button>
      </div>
    );
  }
}
