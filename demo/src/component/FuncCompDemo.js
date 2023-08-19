import React from 'react'

function FuncCompDemo(props) {
  return (
    <div>
        <h2>
            Function component
        </h2>
        <div className='alert alert-secendary'>
            <h3>Truy cập đến các thuộc tính của Function component</h3>
            <p>Welcome to,{props.name}</p>
            <p>Địa chỉ:{props.address} </p>
        </div>

    </div>
  )
}

export default FuncCompDemo