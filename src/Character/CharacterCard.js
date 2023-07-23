import "./CharacterCard.css";

const CharacterCard = ({ character }) => {
  return (
    <div className="character-card">
      <img
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        className="character-image"
      />
      <h2 className="character-name">{character.name}</h2>
    </div>
  );
};

export default CharacterCard;
