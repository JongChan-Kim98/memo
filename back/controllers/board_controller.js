// Controller : req, res => 요청, 응답 처리
// 요청에 맞는 데이터를 model에 의뢰하고(처리) 지정된 뷰에 모델 객체를 넘겨준다
// 서비스를 실행시키는 함수 구현, 실행(요청에 따라 어떤 처리할지 결정을 서비스에 넘겨준다)

// service 파일 불러오기
const boardService = require("../services/board_service");

// 내보낼 이름, 전달할 값, 서비스의 어떤 함수를 호출할지 ...
exports.addPost = async (req, res) => {
  const { title, content } = req.body;
    
  // req는 했는데 res 받는 곳이 없다
  // 그럼 service에서 create만 되고 끝임, 프론트에서 axios보낸
  // return async (dispatch, getState) => {
  //  const post = await axios({ ...
  // ↑ 이 부분에서 멈춰있는거임 응답이 안오니까(?)
  const b = await boardService.addPost(title, content);
  // 그래서 res.sed에 뭐 담을거임?
  // 위에 그럼 서비스에 가보면 return await Post.create({ title, content });
  // 해서 return 받은 값이 있으니까 이걸 변수에 담아서 할당하면 된다
  res.send(b);
};

exports.viewPost = async (req, res) => {
  const datas = await boardService.viewPost();
  res.send(datas)
};

exports.getPost = async (req, res) => {
  let postId = req.params.id;
  // console.log(req);
  const post = await boardService.getPost(postId);
  res.send(post);
};

exports.deletePost = async (req, res) => {
  let postId = req.params.id;
  console.log(postId);
  const c = await boardService.deletePost(postId);
  //res.send(c)
}

exports.editPost = async(req,res) => {
  try {
    const { title, content } = req.body;
    const postId = req.params.id + 1;
    console.log(postId)
    const newPost = await boardService.editPost(postId, title, content);
     res.send(newPost);
  } catch (error) {
    res.send(error);
  }

}
