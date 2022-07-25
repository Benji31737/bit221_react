import React from "react";

function Book(props) {
  let info = {
    color: 'black',
    backgroundColor: 'white',
    display: 'flex',
    border: '1px solid'
  };
  let urlImg = 'https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/pd/v2/5/4/5/1/8/7/tPmhl/4571545187_B.jpg';
  let img = {
    width: '150px',
    height: '150px',
    borderRadius: '100px',
    marginRight: '50px',

  }
  return (
    <div style={info}>
      <img style={img} src={urlImg} />
      <div>
        <h2> {`이 책의 이름은 ${props.name} 입니다.`}</h2>
        <h3> {`이 책은 총 ${props.page}페이지 입니다.`}</h3>
      </div>
    </div>
  );
};

export default Book;

<Book title="모두의 SQL" />