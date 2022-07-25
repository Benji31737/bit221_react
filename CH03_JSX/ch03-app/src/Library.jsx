import React from "react";
import Book from "./Book";


function Library(props) {
  return (
    <>
      <Book name='파이썬이 제일 쉬었어요' page='100' />
      <Book name='리액트란' page='500' />
      <Book name='자바가 뭐지?' page='700' />
    </>
  );
}

export default Library;