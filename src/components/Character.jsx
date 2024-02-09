import notfound from "../images/notfound.png";

function Character({ character }) {

  return (
    <article>
      <img
        src={character.photo || notfound}
        alt={character.name}
        className="img"
      />
      <h5 className="text">{character.name}</h5>
      <p className="text">{character.species}</p>
    </article>
  );
}

export default Character;
