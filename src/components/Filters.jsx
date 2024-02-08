
function Filters() {
  return (
    <form className="formContainer">
        <article>
            <label htmlFor="search" className="formText">Busca por personaje:</label>
            <input type="text" placeholder="Hermione" id="search" className="formInput"/>
        </article>
        
        <article>
            <label htmlFor="options" className="formText">Selecciona la casa:</label>
            <select id="options" className="formInput">
                <option value="gryffindor">Gryffindor</option>
                <option value="slytherin">Slytherin</option>
                <option value="ravenclaw">Ravenclaw</option>
                <option value="hufflepuff">Hufflepuff</option>
            </select>
        </article>
    </form>
  )
}

export default Filters