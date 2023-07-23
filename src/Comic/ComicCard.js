import "./ComicCard.css";

const ComicCard = ({ comic }) => {
  const writerList = comic.creators.items.filter(
    (creator) => creator.role === "writer"
  );
  const detailUrls = comic.urls.filter((cm) => cm.type === "detail");
  return (
    <div className="comic-card">
      <div>
        <img
          src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
          className="comic-image"
          alt="a comic image"
        />
      </div>
      <div className="comic-information">
        <h2 className="comic-name">{comic.title}</h2>
        <div>
          {writerList.length !== 0 && <h4>Writer: </h4>}
          {writerList.length !== 0 &&
            writerList.map((wt, idx) => (
              <span key={idx}>
                {wt.name}
                {idx !== writerList.length - 1 ? ", " : ""}
              </span>
            ))}
        </div>
        <div className="detail-link">
          <a href={detailUrls[0].url} target="_blank" rel="noreferrer">
            Detail on Marvel's Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default ComicCard;
