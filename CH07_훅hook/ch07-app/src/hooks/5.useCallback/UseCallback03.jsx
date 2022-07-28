import React from 'react'
import { useState } from 'react';
import Box from './Box'

function UseCallback03() {

  const [size, setSize] = useState(100);

  const createBoxStyle = () =>{
    return {
      backgroundColor:'violet',
      width: `${size}px`,
      height: `${size}px`,
    }
  }

  return (
    <div className='container'>
    <button className='btn btn-info mb-1'>Change Theme</button>
    <input className='form-control' type={'number'} value={size}
    onChange={(e)=>{setSize(e.target.value)}}
    />

    <br/>
    <Box createBoxStyle={createBoxStyle}/>
  </div>
  )
}

export default UseCallback03