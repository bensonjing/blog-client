import { useState, useEffect } from "react";

import PostItem from "./PostItem";

async function getPosts() {
  const res = await fetch(
    "https://afternoon-beach-80207.herokuapp.com/api/posts"
  );
  const posts = res.json();
  return posts;
}

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
    <div>
      {posts.map((post) => (
        <PostItem key={post._id} post={post} />
      ))}
    </div>
  );
}

export default Post;
