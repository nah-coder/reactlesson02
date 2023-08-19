import React, { Component } from 'react'
import FuncCompDemo from './component/FuncCompDemo'
import ClassCompDemo from './component/ClassCompDemo'
import Member from './component/Member'
import Memberlist from './component/Memberlist'
import MemberInfor from './component/MemberInfor'
import CompState from './component/CompState'

export default class App extends Component {
  //Tạo đối tượng
  
  render() {
    var member={
      path:'images/avatar.jpeg',
      name:"Vũ Minh Trang",
      age:20
    }
    return (
      <div className=' container my-5 border'>
          <h1 className='text-center'>Sử dụng Function / Class component : props , state;</h1>
          <hr/>
          <FuncCompDemo />
          <hr/>
          <FuncCompDemo name="Nguyễn Anh Huy" address="Đê La Thành"/>
          <hr/>
          <FuncCompDemo name="Vũ Minh Trang" address="Thụy Khuê" company="Devmaster"/>
          <hr/>
          <ClassCompDemo />
          <ClassCompDemo name="Nguyễn Anh Huy " age="20" company="Thụy Khuê"/>
          <hr/>
          <Member name="Vũ Minh Trang" age="20"/>
          <hr/>
          <Memberlist />
          <hr/>
          <MemberInfor info={member} />
          <hr/>
          <CompState />
      </div>
      
    )
  }
}
