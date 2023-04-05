//functional component js snippet-rfce
import React from 'react'

function functionClick() {
    function clickHandler(){
        console.log('Button clicked')
    }
    return (
    <div>
        <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default functionClick