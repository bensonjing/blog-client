import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    <div>
      <div>{post.title}</div>
      <div>{post.author.username}</div>
      <div>{post.content}</div>
    </div>
  );
}

export default PostDetail;
