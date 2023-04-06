
import React from 'react'
import Person from './Person'


function NameList() {
    const names = ['viral','ved','max','max']
    const persons = [
        {
            id:1,
            name:'viral',
            age:23,
            skill:'react'
        },
        {
            id:2,
            name:'ved',
            age:23,
            skill:'angular'
        },
        {
            id:3,
            name:'max',
            age:23,
            skill:'vue'
        },
        {
            id:4,
            name:'Deni',
            age:23,
            skill:'android'
        }
    ]

    // const names = ['viral','ved','mak']
    const nameList = names.map((name,index) => <h2 key ={index}>{index} {name}</h2>)

  return  <div>{nameList}</div>
    
        {/* <h2>{names[0]}</h2>
        <h2>{names[1]}</h2>
        <h2>{names[2]}</h2> */}
        {/* {
            names.map(name => <h2>{name}</h2>)
        } */}
}

export default NameList