// Service  : 시퀄라이즈 관련
// 사용자의 요구사항을 처리, DB데이터가 필요하면 repository에 요청한다

// 작업할 모델(DB) 불러오기
const { Post } = require("../model");

// findAll, detroy, create, delete 등 DB 작업 처리해서 내보내기
// 필요시 where 사용

// 인자로 title, content 보내줘야 됨
module.exports.addPost = async (title, content) => {
  try {
    return await Post.create({ title, content });
  } catch (error) {
    console.log(error);
  }
};

module.exports.viewPost = async() => {
  try {
    return await Post.findAll()
  } catch (error) {
    console.log(error);
  }
};

module.exports.deletePost = async(postId) => {
  try {
    return await Post.destroy({
      where : {postId: postId}
    })
  } catch(error) {
    console.log(error);
  }
}

module.exports.editPost = async (id, title, content) => {
  try {
    return await Post.update(
      { title, content },
      {
        where: { postId: id },
      }
    );
  } catch (error) {
    console.log(error);
  }
};
