import React from 'react'
import Avatar from './Avatar'
import Dtime from './Dtime'

function Comment(props) {
  return (
    <>
      <div classname="comment">
        <div classname="user-info container">
          {/*<img src="9634.jpg" alt="avarta-img" classname="avarta" /> */}
          <Avatar url={props.avatarUrl} />
          <div classname="user-info-name container">
            {props.name}
          </div>
        </div>

        <div classname="comment-txt container">
          <p>
            {props.comment}
          </p>
          <div classname="comment-date">
            <Dtime />            
          </div>
        </div>
      </div>
    </>
  )
}

export default Comment