import axios from "axios";
import { useEffect, useState } from "react";
import { CHARACTERS_API } from "../API";
import CharacterCard from "./CharacterCard";
import "./CharacterList.css";
import Navigation from "../Navigation";
import Pagination from "@mui/material/Pagination";
const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios
      .get(CHARACTERS_API.replace("?", `?offset=${(currentPage - 1) * 20}&`))
      .then((response) => {
        setCharacters(response.data.data.results);
        setTotalPages(Math.ceil(response.data.data.total / 20));
      });
  }, [currentPage]);

  function handleCharacterPagination(page) {
    setCurrentPage(page);
  }
  return (
    <>
      <Navigation />
      <h1 className="character-title">Marvel's Characters</h1>
      <div className="character-container">
        {characters.length !== 0 &&
          characters.map((character) => (
            <div key={character.id}>
              <CharacterCard character={character} />
            </div>
          ))}
      </div>
      <div className="characters-pagination">
        <Pagination
          count={totalPages}
          size="large"
          onChange={(e, page) => handleCharacterPagination(page)}
        />
      </div>
    </>
  );
};

export default CharacterList;
