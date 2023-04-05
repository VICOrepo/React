import React, { Component } from 'react'

class EventBind extends Component {
    // using rconst we can add constructor
    constructor(props) {
      super(props)
    
      this.state = {
         message:'Hello'
      }
    }

    clickHandler(){
        this.setState({
            message:'Good Bye'
        })
        console.log(this)
    }
  render() {
    return (
      <div>
    <h3>{this.state.message}</h3>
        <button onClick={this.clickHandler.bind(this)}>
            Click
        </button>
      </div>
    )
  }
}

export default EventBind