import { Route, Routes } from "react-router-dom";
// 페이지
import Board from "./pages/Board";
import Write from "./pages/Write";
import View from "./pages/View";



function App() {
 

  return (
    <>
      <Routes>
        <Route path="/" element={<Board />} />
        <Route path="/write" element={<Write />} />
        <Route path="/view" element={<View/>}/>
      </Routes>
    </>
  );
}

export default App;
