import React, { Component } from "react";
import "./style.css"


export default class LifeCycle extends Component {
  state = {
    product: [],
  };

  async componentDidMount() {
  //   let response = await fetch("https://fakestoreapi.com/products");

  //   let data = await response.json();
  //   console.log(data,"Ddad");
  //   this.setState({ product: data });

  }


  componentWillUnmount(){
    console.log("clerared");
  }


  render() {
    return (
      <div>
        <h1>aRUN U R </h1>
        {/* {this.state.product.map((da, i) => (
          <div key={i}>
            <span>{i + 1}</span>
            <img  src={da.image}/>
            <h1 className="gh">{da.title}</h1>

          </div>
        ))} */}
      </div>
    );
  }
}
