function Filters({ filterHouse, handleHouse, filterName, handleName, filterAncestors, handleAncestors, handleReset }) {

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); 
    }
  };

    return (
      <div className="filters">
        <form className="form">
          <article>
            <label htmlFor="search" className="form__text">
              Busca por personaje:
            </label>
            <input
              className="form__input"
              type="text"
              placeholder="Hermione"
              id="search"
              onChange={(ev) => handleName(ev.target.value)}
              value={filterName}
              onKeyDown={handleEnter}
            />
          </article>
  
          <article>
            <label className="form__text">Selecciona la casa:</label>
            <select
              className="form__input"
              onChange={(ev) => handleHouse(ev.target.value)}
              value={filterHouse}
            >
              <option value="gryffindor">Gryffindor</option>
              <option value="slytherin">Slytherin</option>
              <option value="ravenclaw">Ravenclaw</option>
              <option value="hufflepuff">Hufflepuff</option>
              <option value="">Todas</option>
            </select>
          </article>

          <article>
            <label className="form__text">Selecciona la pureza:</label>
            <select
              className="form__input"
              onChange={(ev) => handleAncestors(ev.target.value)}
              value={filterAncestors}
            >
              <option value="">Cualquiera</option>
              <option value="pure-blood">Sangre Pura</option>
              <option value="muggleborn">Sangre Sucia</option>
              <option value="half-blood">Sangre mestiza</option>
              <option value="squib">Squib</option>
            </select>
          </article>

        </form>
        <button className="resetBtn" onClick={handleReset}>
          <p>Reiniciar</p>
          <i className="fa-solid fa-wand-sparkles"></i>
        </button>
      </div>
    );
  }
  
  export default Filters;