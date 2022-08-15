import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const API_URL = "https://afternoon-beach-80207.herokuapp.com";
const LOCAL_URL = "http://localhost:3001";

function Comments({ postId }) {
  const [comments, setComments] = useState([]);
  const [username, setUsername] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    getComments();
  }, []);

  const getComments = () => {
    fetch(`${API_URL}/api/posts/${postId}/comments`)
      .then((response) => response.json())
      .then((json) => setComments(json));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/api/posts/${postId}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          content: content,
        }),
      });

      if (response.status === 200) {
        setUsername("");
        setContent("");
        setMessage("Comment created successfully");
        getComments();
      } else {
        setMessage("Some error occurred");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="comments">
      <div className="title">Comments</div>

      <form onSubmit={handleSubmit} id="new_comment">
        <div className="title">New Comment</div>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Name:"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <textarea
          type="text"
          id="content"
          name="content"
          placeholder="Comment:"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button>Submit</button>

        <div>{message ? <p>{message}</p> : null}</div>
      </form>

      {comments.map((comment) => (
        <div className="comment" key={uuidv4()}>
          <div className="title">{comment.username}</div>
          <div>{comment.content}</div>
          <div>{new Date(comment.createdAt).toLocaleString()}</div>
        </div>
      ))}
    </div>
  );
}

export default Comments;
