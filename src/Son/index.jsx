import React, { Component } from 'react'
//类组件
class Son extends Component {
  // state = {
  //   count: 0
  // }
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }
  componentDidMount() {
    // console.log('ok')
    this.setState({ count: this.state.count + 1 })
    console.log('1', this.state.count) //1,0
    this.setState({ count: this.state.count + 1 })
    console.log('2', this.state.count) //2,0
    setTimeout(() => {
      this.setState({ count: this.state.count + 1 })
      console.log('3', this.state.count) //3,1
    })
    setTimeout(() => {
      this.setState({ count: this.state.count + 1 })
      console.log('4', this.state.count) //4,1
    })
  }
  render() {
    return <h1>Son</h1>
  }
}
export default Son
