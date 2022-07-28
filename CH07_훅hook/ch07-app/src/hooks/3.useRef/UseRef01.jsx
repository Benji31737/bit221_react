import React, {useEffect, useRef} from 'react'
/**
 * useRef()
 *  참조(R) 참조를 사용하기 위한 훅
 *  반환값 : 레퍼런스 객체(ref object)
 * const fer = iseRef(value) == {current:value}
 * 
 * ref.current
 * 
 * ref 객체는 컴포넌트 전 생애주기 전체에 걸쳐서 유지
 * 컴포넌트가 재 렌더링 되더라도 초기화되지 않는다
 * 
 * 1. DOM 요소에 접근할 떄 사용 (document.querySelect())
 * 2. 저장공간으로 사용
 */


function UseRef01() {

  const inputRef = useRef();
  const imgRef = useRef();

  useEffect(()=>{
    inputRef.cirrent.focus();
  }, []);

  const onButtonClick = () => {
    alert(`환영합니다 ${inputRef.current.value}`)
    imgRef.current.style.visibility ='visible';
  }

  return (
    <div className='container'>
      <img ref={imgRef} src='logo192.png' style={{width:'100px', marginBottom:'100px', visibility:'hidden'}} alt=''/>
      <div className='d-flex'>
        <input ref={inputRef} type={'text'} className='form-control w-auto' placeholder='username'/>
        <button className='btn btn-finfo ml-3'
        onCanPlay={onButtonClick}
        >로그인</button>
      </div>
    </div>
  )
}

export default UseRef01