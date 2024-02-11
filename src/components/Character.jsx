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
        className="list__card--img"
      />
      <h5 className="list__card--name">{character.name.toUpperCase()}</h5>
      <p className="list__card--species">{capitalize(character.species)}</p>
    </article>
  );
}

export default Character;
