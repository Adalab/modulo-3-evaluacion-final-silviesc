
const callToApi = () => {
  
    return fetch("https://hp-api.onrender.com/api/characters/") 
      .then((response) => response.json())
      .then((characters) => {
        return characters.map((character) => ({
          photo: character.image,
          name: character.name,
          species: character.species,
          house: character.house,
          id: character.id,
          alive: character.alive,
          gender: character.gender,
        })) 
      });
  };
  
  export default callToApi;