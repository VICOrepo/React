import React, { Component } from 'react'

class EventBind extends Component {
    // using rconst we can add constructor
    constructor(props) {
      super(props)
    
      this.state = {
         message:'Hello'
      }

     this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(){
        this.setState({
            message:'Good Bye!'
        })
        console.log(this)
    }
  render() {
    return (
      <div>
    <h3>{this.state.message}</h3>
        {/* **Way to bind the event in class component */}
        {/* 1. using bind keyword */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/*2. using arrow function */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}

        {/* 3.binding in class constructor (best option)*/}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind