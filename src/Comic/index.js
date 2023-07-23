import axios from "axios";
import Navigation from "../Navigation";
import { COMICS_API } from "../API";
import { useEffect, useState } from "react";
import ComicCard from "./ComicCard";
import "./comic.css";
import { Pagination } from "@mui/material";
const ComicList = () => {
  const [comics, setComics] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    axios
      .get(COMICS_API.replace("?", `?offset=${(currentPage - 1) * 20}&`))
      .then((response) => {
        setComics(response.data.data.results);
        setTotalPages(Math.ceil(response.data.data.total / 20));
      });
  }, [currentPage]);
  function handleCharacterPagination(page) {
    setCurrentPage(page);
  }
  return (
    <>
      <Navigation />
      <h1 className="comic-title">Marvel's Comics</h1>
      <div className="comic-container">
        {comics.length !== 0 &&
          comics.map((comic) => (
            <div key={comic.id}>
              <ComicCard comic={comic} />
            </div>
          ))}
      </div>
      <div className="comics-pagination">
        <Pagination
          count={totalPages}
          size="large"
          onChange={(e, page) => handleCharacterPagination(page)}
        />
      </div>
    </>
  );
};

export default ComicList;
