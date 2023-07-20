import axios from "axios";
import { useEffect, useState } from "react";
import { CHARACTERS_API } from "./API";
import CharacterCard from "./CharacterCard";
import "./CharacterList.css";
import Navigation from "./Navigation";
const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get(CHARACTERS_API).then((response) => {
      setCharacters(response.data.data.results);
    });
  }, []);
  return (
    <>
      <Navigation />
      <h1 className="character-title">Marvel's Characters</h1>
      <div className="character-container">
        {characters.length !== 0 && characters.map((character) => (
          <div key={character.id}>
            <CharacterCard character={character} />
          </div>
        ))}
      </div>
    </>
  );
};

export default CharacterList;
