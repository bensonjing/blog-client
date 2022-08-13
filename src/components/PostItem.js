function PostItem({ post }) {
  return (
    <div>
      <div>{post.title}</div>
      <button>View Post</button>
    </div>
  );
}

export default PostItem;
