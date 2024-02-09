import { Link } from "react-router-dom"
import Character from "./Character"


function CharacterList({filteredCharacters}) {

  const renderAllCharacters = filteredCharacters.map((character) => {
        return <section key={character.id} className="card">
            <Link to={`/character/${character.id}`} className="link">
              <Character character={character}/>
            </Link>
        </section>
    })

  return (
    <div className="bigContainer">
        {renderAllCharacters}
    </div>
  )
}

export default CharacterList;
