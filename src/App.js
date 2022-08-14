import { Route, Routes } from "react-router-dom";
import "./app.css";

import Header from "./components/Header";
import Intro from "./components/Intro";
import PostDetail from "./components/PostDetail";
import Post from "./components/Posts";

function App() {
  return (
    <div className="App">
      <Header />
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
      <Intro />
      <Post />
    </>
  );
}

export default App;
