function Filters({filterHouse, handleHouse, filterName, handleName}) {
  return (
    <form className="formContainer">
        <article>
            <label htmlFor="search" className="formText">Busca por personaje:</label>
            <input type="text" placeholder="Hermione" id="search" className="formInput" onChange={(ev) => handleName(ev.target.value)} value={filterName}/>
        </article>
        
        <article>
            <label className="formText">Selecciona la casa:</label>
            <select className="formInput" onChange={(ev) => handleHouse(ev.target.value)} value={filterHouse}>
                <option value="gryffindor">Gryffindor</option>
                <option value="slytherin">Slytherin</option>
                <option value="ravenclaw">Ravenclaw</option>
                <option value="hufflepuff">Hufflepuff</option>
            </select>
        </article>
    </form>
  )
}

export default Filters;
