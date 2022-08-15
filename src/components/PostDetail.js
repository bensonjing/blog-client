import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Comments from "./Comments";

function PostDetail() {
  const { postId } = useParams();
  const [post, setPost] = useState({ author: {} });

  useEffect(() => {
    getPost();
  }, []);

  const getPost = () => {
    fetch(`https://afternoon-beach-80207.herokuapp.com/api/posts/${postId}`)
      .then((response) => response.json())
      .then((json) => {
        setPost(json);
      });
  };

  return (
    <div className="post_detail">
      <h1>{post.title}</h1>
      <div className="author">{post.author.username}</div>
      <div>{post.content}</div>
      <Comments postId={postId} />
    </div>
  );
}

export default PostDetail;
