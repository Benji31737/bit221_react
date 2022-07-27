import React from 'react'
import { useState } from 'react'

function UseState03() {

  const [clickedTimes, setClickedTimes] = useState(0);
  const handleClicked = ()=>{
    setClickedTimes(clickedTimes +1);
  }


  return (
    <div className='container'>
      <div>
      You clicked {clickedTimes} times
      </div>
      <button className='btn btn-danger'
      onClick={handleClicked}
      ><i class="fa-solid fa-computer-mouse"></i>Click Me</button>
    </div>
  )
}

export default UseState03