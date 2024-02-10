import notfound from "../images/notfound.png";

function Character({ character }) {

  function capitalize(string) {
    return string.slice(0, 1).toUpperCase() + string.slice(1);
  }

  return (
    <article>
      <img
        src={character.photo || notfound}
        alt={character.name}
        className="img"
      />
      <h5 className="text">{character.name.toUpperCase()}</h5>
      <p className="text">{capitalize(character.species)}</p>
    </article>
  );
}

export default Character;
