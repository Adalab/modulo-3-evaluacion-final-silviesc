import notfound from "../images/notfound.png";

function CharacterCard({ userData, getSpecies, getGender }) {

  const getLifeStatusIcon = (alive) => {
    return alive ? <i className="fa-solid fa-heart-pulse"></i> : <i className="fa-solid fa-skull"></i>;
  };

  const getSpeciesIcon = (species) => {
    if (species === "human") {
      return <i className="fa-solid fa-person-rays"></i>;
    } else if (species === "werewolf") {
      return <i className="fa-brands fa-wolf-pack-battalion"></i>
    }
  };
 
  return (
    <article className="articleContainer">
      <img className="articlePhoto" src={userData.photo || notfound} alt={userData.name} />
      <section className="sectionContainer">
        <h2>{userData.name}</h2>
        <h4>Estatus: {userData.alive ? "Vivo/a" : "Muerto/a"} {getLifeStatusIcon(userData.alive)}</h4>
        <h4>Especie: {getSpecies(userData.species)} {getSpeciesIcon(userData.species)}</h4>
        <h4>Género: {getGender(userData.gender)}</h4>
        <h4>Casa: {userData.house}</h4>
      </section>
    </article>
  );
}

export default CharacterCard;

