import React,{ useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
// 액션
import { viewPost } from "../modules/board";
import { deletePost } from "../modules/board";

const View = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const border = useSelector(state=>state.board.posts)

  const deleteHandler = (postId) => {
    dispatch(deletePost(postId))
  }

  useEffect(() => {
    dispatch(viewPost());
  },[]);

  return (
    <div>
      {/* idx는 배열의 인덱스 값을 뜻하고 map,filter 등은 return 값이 생략된 같은 계통인데 그럼으로 div들을 계속 뱉어나는데 key 값에 고유 값을 줌으로써 리액트에게 안심시키는 것이다. 당연 배열의 인덱스 값을 넣어도 되지만 옳바른 의미에서는 여기서는 postId를 넣는게 바람직하다.  */}
      {border.map(({postId, title, content},idx)=>(
        <div key={postId}>
          <div>제목 : {title}</div>
          <div>내용 : {content}</div> 
          {/* deleteHandler(postId) 는 반환값이 있고 인자값을 가져가기 위해 그럼 */}
          <button onClick={() => deleteHandler(postId)}>삭제</button>
          {/* 아래 부분은 return 값이 생략된 값으로 되는거임 */}
          <button onClick={() => { nav(`/${postId}/edit`) }}>수정</button><br />
        </div>
      ))}
    </div>
  )
}

export default View