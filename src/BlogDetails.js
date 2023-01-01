import { useParams } from "react-router-dom";
import UseFetch from "./UseFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: post, isPending, error } = UseFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  return (
    <div className="blog-details">
      {isPending && <div>loading...</div>}
      {error && <div>{error.message}</div>}
      {post && (
        <>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </>
      )}
    </div>
  );
};

export default BlogDetails;
