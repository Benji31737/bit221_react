import React from 'react'

function Dtime() {
  let Dday = new Date().toLocaleString

  return (
    <div>
      {Dday}
    </div>
  )
}

export default Dtime