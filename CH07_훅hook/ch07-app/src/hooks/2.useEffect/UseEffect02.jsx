import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function UseEffect02() {

  const [count, setCount] = useState(0);
  const [name, setName] = useState('Nickname');

  const updateInput = (e) =>{
    setName(e.target.value);
  }
  const updateCount = () =>{
    setCount(count + 1);
  }

  /* 렌더링마다 매번 사이드 이펙트가 실행
  useEffect(()=>{
    console.log('component rendering')
  });*/

  // mounting %% count 바뀔 때 마다 실행
  useEffect(()=>{
    console..log('component rendering')
  }, [count]);

  return (
    <div className='container'>
      <p> Count : {count}</p>
      <button className='btn btn-success mt-2'
      onCLick={updateCount}
      >Update</button>
      <div>
        <input type='text' placeholder='input your name here'
        onChange={updateInput}
        />
      </div>
      <p>{name}</p>
    </div>
  )
}

export default UseEffect02