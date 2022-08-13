import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Intro from "./components/Intro";
import PostDetail from "./components/PostDetail";
import Post from "./components/Posts";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/posts/:postId" element={<PostDetail />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <Header />
      <Intro />
      <Post />
    </>
  );
}

export default App;
