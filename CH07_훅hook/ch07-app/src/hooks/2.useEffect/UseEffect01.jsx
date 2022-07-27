import React, { useEffect } from 'react'
import { useState } from 'react';
/**
 * 클래스 컴포넌트 생명주기 함수
 * useEffect( 콜백 함수 , 의존성배열[ , , , , ]);
 * 
 * useEffect(()=>{]}, [])
 */

const styles = {
  container: {
    padding: 100,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    padding: 20,
  },
  icon: {
    fontSize: 25,
  }
}

// useEffect test date
let avocados =[];

function UseEffect01() {
  const [count, setCount] = useState(0);
  
  useEffect(()=>{
    avocados.push('🥑');

    document.title ='🥑' + count + 'update';
  }, []);
  

  return (
    <>
    <div className='container'>
      <div className='container' style={styles.container}>

        <span>{avocados + '💨' + count}</span>
        <hr></hr>
        <p className='h3'>You clicked {count} times</p>
        <hr />

        <button className='btn btn-info' style={styles.btn}
          onClick={() => {
            setCount(count + 1);
          }}>

          <i className="fa-solid fa-computer-mouse" style={styles.icon}></i>
          <br />
          <span>Click Me</span>
        </button>
      </div>
    </div>
    </>
  )
}

export default UseEffect01