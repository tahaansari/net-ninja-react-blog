import BlogList from "./BlogList";
import UseFetch from "./UseFetch";

const Home = () => {
  // const [blogs, setBlogs] = useState([
  //   { title: "my new website", body: "lorem ipsum", author: "mario", id: 1 },
  //   { title: "my new website 1", body: "lorem ipsum 1", author: "mario 1", id: 2 },
  //   { title: "my new website 2", body: "lorem ipsum 2", author: "mario 2", id: 3 },
  // ]);

  const { data: posts, isPending, error } = UseFetch("https://jsonplaceholder.typicode.com/posts/");

  // const nameChangeHandler = () => {
  //   console.log("name change fired");
  //   setName("name changed");
  // };

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>loading...</div>}
      {posts && <BlogList title="All Blogs" posts={posts}></BlogList>}
    </div>
  );
};

export default Home;
