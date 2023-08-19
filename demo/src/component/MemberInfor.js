import React, { Component } from 'react'
import Avatar from './Avatar'

export default class MemberInfor extends Component {
  render() {
    return (
      <div>
            <h2>MemberÌnor</h2>
            <Avatar link={this.props.info.path} />
            <div className='alert alert-primary'>
                <p> tên: {this.props.info.name}</p>
                <p> tuổi: {this.props.info.age}</p>
            </div>
      </div>
    )
  }
}
