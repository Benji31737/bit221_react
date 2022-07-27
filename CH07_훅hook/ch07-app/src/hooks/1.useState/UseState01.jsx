import React, { useState } from 'react'

const UseState01 = () => {
  
  const [time, setTime] = useState(1); // useState(1) 가 return 하는 값 [state, setState]

  const handleClick = ()=>{
    setTime((time%24) + 1);

    // or if(time>=24) {setTime(1);}
    // else {setTime(time+1);}
  }

  return (
    <>
      <span>현재 시각 : {time}시<button className='btn btn-danger' 
      onClick={handleClick}
      >Update</button>
</span>
    </>
  )
}

export default UseState01