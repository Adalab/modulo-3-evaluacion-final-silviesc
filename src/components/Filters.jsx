function Filters({ filterHouse, handleHouse, filterName, handleName, handleReset }) {

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); 
    }
  };

    return (
      <div className="filters">
        <form className="formContainer">
          <article>
            <label htmlFor="search" className="formText">
              Busca por personaje:
            </label>
            <input
              type="text"
              placeholder="Hermione"
              id="search"
              className="formInput"
              onChange={(ev) => handleName(ev.target.value)}
              value={filterName}
              onKeyDown={handleEnter}
            />
          </article>
  
          <article>
            <label className="formText">Selecciona la casa:</label>
            <select
              className="formInput"
              onChange={(ev) => handleHouse(ev.target.value)}
              value={filterHouse}
            >
              <option value="gryffindor">Gryffindor</option>
              <option value="slytherin">Slytherin</option>
              <option value="ravenclaw">Ravenclaw</option>
              <option value="hufflepuff">Hufflepuff</option>
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