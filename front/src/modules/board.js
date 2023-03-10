import axios from "axios";

// 액션 타입(다른 모듈과 이름 중복되지 않게 하려고 덕스 패턴에서 액션 타입 정의할 때는 접두사를 붙인다)
// const ADD_POST = "board/ADD_POST";

// 액션 생성 함수
export const addPost = (title, content) => {
  // console.log(title);
  // console.log(content);
  return async (dispatch, getState) => {
    const post = await axios({
      method: "post",
      url: "http://localhost:8000/board/write",
      data: {
        title,
        content,
      },
    });
    const { data } = post;
    // controller에서 send로 보내니까 그제서야 여기 console이 찍혔다(신기
    console.log(data);
    dispatch({ type: "ADD_POST", payload: data });
  };
};

export function viewPost(){
  return async(dispatch, getstate) => {
      const board = await axios({
          method : "get",
          url : "http://localhost:8000/board/view"         
      })
      const { data } = board
      console.log(data)
      dispatch({ type: "GET_BORDER", payload: data });
  }
}

export const deletePost = (postId) => {
  return async (dispatch, getState) => {
    const drop = await axios({
      method: "delete",
      url : `http://localhost:8000/board/${postId}`        
    })
    const {data} = drop
    dispatch({type: "DELETE_BORDER", payload : data})
  }
}

export const editPost = (postId , title, content) => {
   console.log(title);
   console.log(content);
  return async (dispatch, getState) => {
    const post = await axios({
      method: "put",
      url: `http://localhost:8000/board/${postId}`,
      data: {
        title,
        content,
      },
    });
    const { data } = post;
    console.log("!@#!@#!@#"+data);
    dispatch({ type: "EDIT_BORDER", payload: data });
  };
};


// 초기값
const init = {
  posts: [],
};

// 리듀서
export default function board(state = init, action) {
  const { type, payload } = action;
  switch (type) {
    case "ADD_POST":
      const newPost = { ...payload }; // addPost 의 b = 제목 내용 
      console.log(newPost);
      // ...payload : 새소 생성된 게시글 내용 posts :[...state.posts : 기존 게시글이 담겨있는 배열, 새로운 게시글]
      return { ...payload, posts: [...state.posts, newPost] };

    case "GET_BORDER":
      return {...init, posts : payload};

    case "DELETE_BORDER":
      return {...init, posts : payload}

    case "EDIT_BORDER":
      return {...init, posts : payload}

    default:
      return { ...state };
  }
}
