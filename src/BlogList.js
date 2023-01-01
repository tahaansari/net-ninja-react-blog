import { Link } from "react-router-dom";

const BlogList = ({ title, posts, handleDelete }) => {
  //   const title = props.title;
  //   const posts = props.posts;
  // console.log(posts);
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {posts.map((post) => (
        <div key={post.id} className="blog-preview">
          <Link to={`/blog/${post.id}`}>
            <h2>{post.title}</h2>
            <p>Written by {post.body}</p>
            {/* <button
              onClick={() => {
                handleDelete(post.id);
              }}
            >
              delete
            </button> */}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
