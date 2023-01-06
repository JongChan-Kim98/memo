import React, {useRef, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { editPost } from '../modules/board';



const Edit = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const id = params.id -1; 
    // 여기서 파람스는 문자열로 받아서 파서인트해서 가져와야함

    const border = useSelector(state=>state.board.posts);
    console.log(`border : `, border);
    
    // 객체 뽑을거여서 구조분해할당 
    // const [newBoard] = border.filter((v)=>v.postId === parseInt(id))
    // console.log(newBoard.title) 


    useEffect(() => {
      title.current.value = border[parseInt(id)].title;
      content.current.value = border[parseInt(id)].content;
        // title.current.value = newBoard.title;
        // content.current.value = newBoard.content;
      }, []);

    const title = useRef();
    const content = useRef();

    

    const editHandler = () => {
      console.log(title.current.value);
    
      dispatch(editPost(id, title.current.value, content.current.value))
        
    }

  return (
    <div>
        <div>수정제목</div>
        <input ref={title} placeholder="제목" />
        <div>수정내용</div>
        <input ref={content} placeholder="내용" />
        <button onClick={editHandler}>수정하기</button>
    </div>
  )
}

export default Edit