import axios from "axios";
import Navigation from "../Navigation";
import { COMICS_API } from "../API";
import { useEffect, useState } from "react";
import ComicCard from "./ComicCard";
import "./comic.css"
const ComicList = () => {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    axios.get(COMICS_API).then((response) => {
      setComics(response.data.data.results);
      
    });
  }, []);
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
    </>
  );
};

export default ComicList;
