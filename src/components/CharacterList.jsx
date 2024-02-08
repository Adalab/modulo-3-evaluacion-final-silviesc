import notfound from "../images/notfound.png"

function CharacterList({allCharacters}) {

    const renderAllCharacters = allCharacters.map((character) => {
        return <section key={character.id} className="card">
            <img src={character.photo || notfound} alt={character.name} className="img"/>
            <h5 className="text">{character.name}</h5>
            <p className="text">{character.species}</p>
        </section>
    })

  return (
    <div className="bigContainer">
        {renderAllCharacters}
    </div>
  )
}

export default CharacterList