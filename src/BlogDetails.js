import { useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import UseFetch from "./UseFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: post, isPending, error } = UseFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const history = useHistory();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    // console.log("hello world");
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    }).then(() => {
      setIsDeleting(false);
      console.log("post deleted");
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending && <div>loading...</div>}
      {error && <div>{error.message}</div>}
      {post && (
        <>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          {!isDeleting && <button onClick={handleDelete}>Delete</button>}
          {isDeleting && <button disabled>Deleting</button>}
        </>
      )}
    </div>
  );
};

export default BlogDetails;
