import React from 'react'
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
// 액션
import { viewPost } from "../modules/board";
import { deletePost } from "../modules/board";

const View = () => {
  const dispatch = useDispatch();
  const border = useSelector(state=>state.board.posts)
  

  const deleteHandler = (postId) => {
    dispatch(deletePost(postId))
  }

  const editHandler = () => {

  }

  useEffect(() => {
    dispatch(viewPost());
  },[]);

  return (
    <div>
      {border.map(({title, content},idx)=>(
        <div key={idx}>
          <div>제목 : {title}</div>
          <div>내용 : {content}</div> 
          <button onClick={deleteHandler}>삭제</button>
          <button onClick={editHandler}>수정</button><br />
        </div>
      ))}
    </div>
  )
}

export default View