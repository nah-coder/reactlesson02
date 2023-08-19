import React, { Component } from 'react'

export default class CompState extends Component {
    constructor(props){
        super(props);
        //quản lý dữ liệu của componentthông qua state
        this.state={
            studentId:123,
            name:"Nguyễn Anh Huy",
            age:20

        }
    };

    handleChange=()=>{
        this.setState({
            name:"Vũ Minh Trang" , 
        }
        )
    };

  render() {
    return (
      <div>
        <h2>Sử dụng dữ liệu trong State</h2>
        <div className='alert alert-danger'>
            <p>THông tin sinh viên:</p>
            <p>ID: {this.state.studentId}</p>
            <p>Name: {this.state.name}</p>
            <p>Age: {this.state.age}</p>
        </div>
        <button className='btn btn-success'
        onClick={this.handleChange}>
        Change Name</button>
      </div>
    )
  }
}
