import notfound from "../images/notfound.png";

function Character({ character }) {
  if (!character) {
    return <h1>Este personaje no existe</h1>
  }

  return (
    <>
      <img
        src={character.photo || notfound}
        alt={character.name}
        className="img"
      />
      <h5 className="text">{character.name}</h5>
      <p className="text">{character.species}</p>
    </>
  );
}

export default Character;
