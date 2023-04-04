// functional Components
import React from 'react'

// function Greet() {
//     return (
//      <h1>Good job!</h1>
//     );
//   }
 
// arrow function
export const Mycomponent = (props) => {
  console.log(props)
return (
<div>
<h1>Hello {props.name} a.k.a {props.heroName}</h1>
{props.children}
</div>

)
}
 // export default Greet
