import React, { useCallback, useEffect } from 'react'
import { useState } from 'react'

function UseCallback02() {

  const [number, setNumber] = useState(0);

  // const someFunction = () => {
  //   console.log(`someFunc.number : ${number}`)
  // }

  const someFunction = useCallback(() => {
      console.log(`someFunc.number : ${number}`)
    }, [])
  

  useEffect(()=>{
    console.log(`someFunc이 변경되었습니다.`);
  },  []);

  return (
    <div className='container'>
      <input className='form-control'
      type={'number'}
      value = {number}
      onChange={(e)=>{setNumber(e.target.value)}}
      />
      <button
      onClick={someFunction}>Call someFunc</button>
    </div>
  )
}

export default UseCallback02