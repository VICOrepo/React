import React, { Component } from 'react'

export class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Viral'
      }
      console.log('lifecycleB constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleB getDerivedStateFromProps')
        return null
    }


    componentDidMount(){
        console.log('LifeCycleB componentDidMount')

    }
    shouldComponentUpdate(){
        console.log('lifecycleB shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('lifecycleB getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('lifecycleB componentDidUpdate')
    }
  render() {
     console.log('LifeCycleB render')
    return <div>Lifecycle B</div>
  }
}

export default LifeCycleB