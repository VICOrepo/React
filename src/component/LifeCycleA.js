import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

export class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Viral'
      }
      console.log('lifecycleA constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    }


    componentDidMount(){
        console.log('LifeCycleA componentDidMount')

    }
    shouldComponentUpdate(){
        console.log('lifecycleA shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('lifecycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('lifecycleA componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name:'Viral'
        })
    }

  render() {
     console.log('LifeCycleA render')
    return (
        <div>
        <div>Lifecycle A</div>
        <button onClick={this.changeState}>Change State</button>
        <LifeCycleB/>
        </div>
    

    )
  }
}

export default LifeCycleA