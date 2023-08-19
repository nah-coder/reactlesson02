import React, { Component } from 'react'

export default class ClassCompDemo extends Component {
  render() {
    return (
      <div>
        <h2> Class Component Demo</h2>
        <div className='alert alert-success'>
            <h3>Sử dụng các thuộc tính của đối tượng props của class component</h3>
            <p>Welcome to,{this.props.name}</p>
            <p>age to,{this.props.age}</p>
            <p>company to,{this.props.company}</p>

        </div>
      </div>
    )
  }
}
