//using JSX and without using JSX
import React from "react";

const Hello = () => {
    // return(
    //     <div className='dummyClass'>
    //         <h1>Hello VV</h1>
    //     </div>
    // )

    return React.createElement(
        'div',
         {id:'hello',className:'dummyClass'},
         React.createElement('h1',null,'hello jambo'))
}

export default Hello