import { Link } from "react-router-dom";
import Character from "./Character";

function CharacterList({ filteredCharacters, filterName }) {
  return (
    <section className="bigContainer">
      {filteredCharacters.length !== 0 ? (
        filteredCharacters.map((character) => (
          <article key={character.id} className="card">
            <Link to={`/character/${character.id}`} className="link">
              <Character character={character} />
            </Link>
          </article>
        ))
      ) : (
        <article className="searchContainer">
          <p className="search">
            No hay ningún personaje que coincida con la palabra "{filterName}"
          </p>
          <div className="broom"> 
            <p className="search">Prueba a limpiar tu búsqueda</p>
            <i className="fa-solid fa-broom"></i>
          </div>
        </article>
      )}
    </section>
  );
}

export default CharacterList;
