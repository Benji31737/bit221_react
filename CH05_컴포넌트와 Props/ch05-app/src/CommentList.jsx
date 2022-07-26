import React from 'react'
import Comment from './Comment';

const list = [{
  name : 'Ken',
  comment : '안녕하세요? 루니입니다.',
  avatarUrl : 'https://cdn.pixabay.com/photo/2021/11/12/03/04/woman-6787784__340.png',
},
{
  name : 'Deavon',
  comment : 'How was it going?',
  avatarUrl : 'https://cdn.pixabay.com/photo/2016/09/01/08/24/smiley-1635448__340.png',
},
{
  name : 'Mami',
  comment : 'Hey ~',
  avatarUrl : 'https://cdn.pixabay.com/photo/2016/03/31/19/57/avatar-1295404__340.png',
},
{
  name : 'Mighthy',
  comment : 'How are you doing?',
  avatarUrl : 'https://cdn.pixabay.com/photo/2021/03/02/08/51/woman-6061865__340.jpg',
}];

function CommentList() {
  return (
    <>
    {
     list.map((data, idx)=>{
      return(
        <Comment name={data.name} comment={data.comment} avatarUrl={data.avatarUrl}/>
      ) 
     })
    }
    </>
  )
}

export default CommentList