import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        {/* Arrow function syntax is simplest way to pass parameters child component to parent components */}
        <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent