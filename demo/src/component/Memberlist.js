import React, { Component } from 'react'
import Member from './Member'

export default class Memberlist extends Component {
  render() {
    return (
      <div>
        <h2>Memberlist</h2>
        <Member name="Nguyễn Anh Huy" age="20"/>
        <Member name="Vũ Minh Trang" age="20"/>
        <Member name="Nguyễn Huy Hoàng" age="20"/>
        <Member name="Nguyễn Bích Hồng" age="20"/>
      </div>
    )
  }
}
