import React from 'react'

const style = {
  avatar: {
    witdth:50,
    height:50,
    borderRadius:50,
  }
};


function Avatar(props) {
  return (
    <>
      <img src={props.url} alt='avata-img' style={style.avatar}/>
    </>
  )
}

export default Avatar