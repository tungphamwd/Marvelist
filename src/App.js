import { Link } from "react-router-dom";
import "./App.css";
import Navigation from "./Navigation";
import characters from "./img/characters.jpg";
import comics from "./img/comics.jpg";
function App() {
  return (
    <>
      <Navigation />
      <div className="home-selector">
        <div className="container">
          <img src={characters} alt="character banner" />
          <div className="overlay">
            <Link to="/characters">
              <span>View Characters</span>
            </Link>
          </div>
        </div>
        <div className="container">
          <img src={comics} alt="character banner" />
          <div className="overlay">
            <Link to="/comics">
              <span>View Comics</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
