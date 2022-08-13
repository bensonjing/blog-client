import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

function Post() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    fetch("https://afternoon-beach-80207.herokuapp.com/api/posts")
      .then((res) => res.json())
      .then((res) => setPosts(res));
  };

  return (
    <div id="posts">
      {posts.map((post) => (
        <div key={post._id} id={post._id}>
          <div>{post.title}</div>
          <Link to={`/posts/${post._id}`}>View Post</Link>
        </div>
      ))}
    </div>
  );
}

export default Post;
