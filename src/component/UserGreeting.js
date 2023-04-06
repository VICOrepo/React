import React, { Component } from 'react'

 class UserGreeting extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           isLoggedIn: true
        }
      }
  render() {
//1. short circuit operator
   return this.state.isLoggedIn && <div>Welcome VIral</div>
//2.Ternary Conditional Operator
    // return(
    //     this.state.isLoggedIn?
    //     <div>Welcome Viral</div>: <div>Welcome Guest</div>
    // )
//3.USING ELEMENT VARIABLE
    // let message 
    // if(this.state.isLoggedIn){
    //     message = <div>Welcome VIRAL</div>
    // }
    // else{
    //     message = <div>Welcome Guest</div>
    // }
    // return <div>{message}</div>


//4.USING IF/ELSE
    // if(this.state.isLoggedIn){
    //     return <div> Welcome VIRAL </div>    
    // }
    // else{
    //     return <div>Welcome Guest</div>
    // }
//     return (
//         <div>
//       <div>Welcome VIRAL</div>
//       <div>Welcome Guest</div>
//         </div>
      
//     )
   }
}

export default UserGreeting