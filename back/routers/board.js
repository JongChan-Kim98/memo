// express, router 사용 설정
const express = require("express");
const router = express.Router();
const boardController = require("../controllers/board_controller");


// localhost:8000/board/write 경로가 된거임
router.post("/write", boardController.addPost);
// router. {post, get, put, delete} 각각 용도에 맞게 사용해서 보다 깔끔하고 가시성 있는 코드 구현 
router.get("/view", boardController.viewPost);
router.delete("/view", boardController.deletePost);

module.exports = router;
