/*const React = require('react')
class Upload extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      file: null
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
  }
  render() {
    return (
      <div>
        <input type="file" onChange={this.handleChange}/>
        <img src={this.state.file}/>
      </div>
    );
  }
}
export default  Upload*/
import React, { Component} from 'react'


 
  class Try2 extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        file: null
      }
      this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
      this.setState({
        file: URL.createObjectURL(event.target.files[0])
      })
    }
    render() {
      return (
        <div>
          <input type="file" onChange={this.handleChange}/>
          <img src={this.state.file}/>
        </div>
      );
    }
  }
export default Try2;

