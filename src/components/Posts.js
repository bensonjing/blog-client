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
        <Link to={`/posts/${post._id}`} key={post._id} className="post">
          <div className="title">{post.title}</div>
          <button>View Post</button>
        </Link>
      ))}
    </div>
  );
}

export default Post;
