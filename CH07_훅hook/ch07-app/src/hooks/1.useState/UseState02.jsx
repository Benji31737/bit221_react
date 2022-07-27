import React from 'react'
import { useState } from 'react'

function UseState02(props) {

  const [input, setInput] = useState('');
  const [names, setNames] = useState([]);

  const inputChangeHandler = (e)=>{
    setInput(e.target.vlaue);
    console.log(input);
  }

  const uploadHandler = () =>{
    setNames((preState)=>{
      return [...preState, input + '\n']
    });
  }

  return (
    <div className='container'>
      <div style={{display:'flex'}}>
        <input type='text' className='form-control' placeholder='input your name here' style={{width:'800px'}} 
        onChange={inputChangeHandler}
        />
        <button className='btn btn-success ms-2'
          onClick={uploadHandler}
        >Upload</button>
      </div>
      <textarea className='form-control mt-3'
        defaultValue={names.toString().split(',').join('')}
        rows={10}/>
    </div>
  )
}

export default UseState02