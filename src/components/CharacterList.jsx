import { Link } from "react-router-dom";
import Character from "./Character";

function CharacterList({ filteredCharacters, filterName }) {
  return (
    <section className="list">
      {filteredCharacters.length !== 0 ? (
        filteredCharacters.map((character) => (
          <article key={character.id} className="list__card">
            <Link to={`/character/${character.id}`} className="list__card--link">
              <Character character={character} />
            </Link>
          </article>
        ))
      ) : (
        <article className="search">
          <p>
            No hay ningún personaje que coincida con la palabra "{filterName}"
          </p>
          <div className="search__broom"> 
            <p>Prueba a limpiar tu búsqueda . . .</p>
            <i className="fa-solid fa-broom broom"></i>
          </div>
        </article>
      )}
    </section>
  );
}

export default CharacterList;
