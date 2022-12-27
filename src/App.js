import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  const link = "https://www.google.com/";
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Likes {likes} times</p>
        {10}
        {"hello ninjas"}
        {Math.floor(Math.random() * 10)}
        <a href={link}>google</a>
        <Navbar></Navbar>
      </div>
    </div>
  );
}

export default App;
