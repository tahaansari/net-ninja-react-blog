import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("yoshi");
  const [isPending, setIsPending] = useState(false);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit clicked");
    setIsPending(true);
    const post = { title, body, author };
    // console.log(blog);
    fetch("https://jsonplaceholder.typicode.com/posts/", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(post),
    }).then(() => {
      console.log("new blog added");
      setIsPending(false);
      // history.go(-1);
      history.push("/");
    });
  };

  return (
    <div className="create">
      <h1>Add a new blog</h1>
      <form onSubmit={handleSubmit}>
        <label>Blog Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required></input>
        <label>Blog Body</label>
        <textarea value={body} onChange={(e) => setBody(e.target.value)} required></textarea>
        <label>Blog Author</label>
        <select
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>

        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding blog...</button>}
      </form>
      <br />
      {title}
      <br />
      {body}
      <br />
      {author}
    </div>
  );
};

export default Create;
