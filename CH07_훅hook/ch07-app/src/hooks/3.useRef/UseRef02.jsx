import React, { useRef, useState } from 'react'

function UseRef02() {

  //State 변수 사용
  const [count, setCount] = useState(0);

  //Ref 변수 사용
  const countRef = useRef(0);

  const increaseCountState = () => {setCount(count +1)}
  const increaseCountRef = () => {
    countRef.current++; }



  return (
    <div className='contatiner'>
      <h3>State: {count}</h3>
      <h3>Ref &nbsp; : {countRef.current} </h3>
      <button className='btn btn-info ' onClick={increaseCountState}>
        State &nbsp;
        <i className="fa-solid fa-arrow-up-from-bracket"></i>
      </button>
      <button className='btn btn-success m-1' onClick={increaseCountRef}>
        Ref &nbsp;
        <i className="fa-solid fa-arrow-up-from-bracket"></i>
      </button>
    </div>
  )
}

export default UseRef02