import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div className="app-container">
      <ul>
        <li>
          <a href="http://localhost:3000/Home">Home</a>
        </li>
        <li>
          <a href="http://localhost:3000/About">About</a>
        </li>
        <li>
          <a href="http://localhost:3000/Contact">Contact</a>
        </li>
      </ul>
      <NavBar />
    </div>
  );
}

export default App;
