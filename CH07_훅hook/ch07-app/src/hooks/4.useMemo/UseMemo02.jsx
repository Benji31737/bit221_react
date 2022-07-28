import React, { useMemo } from 'react'
import { useState } from 'react'


const hardCaculate = (number) => {
  let total = 0;
  // cpu 부하주기
  for(let i=0; i<99999999; i++) {
    total +=i;
  }
  return number + total;
}
function UseMemo02() {

  const [hardNumber, setHardNumber] = useState(0);

  const hard = useMemo(()=>{
    return hardCaculate(hardNumber);
  }, [hardNumber]);

  return (
    <div style={{ border: '1px solid green', padding: '20px' }}>
      <h5 style={{ color: '#999' }}>Hard working</h5>
      <input
        className='form-control' type='number'
        value={hardNumber}
        onChange={(e) => setHardNumber(parseInt(e.target.value))}
      />
      <hr />
      <span> ∫∛ ∝^ = {hard}</span>
    </div>
  )
}

export default UseMemo02