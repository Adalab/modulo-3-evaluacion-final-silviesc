import notfound from "../images/notfound.png";
import ls from '../sources/localStorage';
import gryffindorImg from "../images/gryffindor.png";
import slytherinImg from "../images/slytherin.png";
import ravenclawImg from "../images/ravenclaw.png";
import hufflepuffImg from "../images/hufflepuff.png";
import hogwarts from  "../images/nohouse.png";

function CharacterCard({ characterData }) {

  ls.set('characterData', characterData);

  const getLifeStatusIcon = (alive) => {
    return alive ? <i className="fa-solid fa-heart-pulse"></i> : <i className="fa-solid fa-skull"></i>;
  };

  const getSpecies = (species) => {
    if (species === "human") return "Humano/a";
    if (species === "half-giant") return "Medio gigante";
    if (species === "werewolf") return "Hombre lobo";
    if (species === "house-elf") return "Elfo";
    if (species === "goblin") return "Trasgo";
    return species; 
  };

  const getGender = (gender) => {
    return gender === "male" ? "Masculino" : "Femenino";
  };

  const getSpeciesIcon = (species) => {
    if (species === "human") {
      return <i className="fa-solid fa-person-rays"></i>;
    }
  };

  const getHouseImage = (house) => {
    if (house === "Gryffindor") {
      return gryffindorImg;
    } else if (house === "Slytherin") {
      return slytherinImg;
    } else if (house === "Ravenclaw") {
      return ravenclawImg;
    } else if (house === "Hufflepuff") {
      return hufflepuffImg;
    } else {
      return hogwarts;
    }
  };

  return (
    <article className="detail">
      <img className="detail__photo" src={characterData.photo || notfound} alt={characterData.name} />
      <section className="detail__text">
        <h2 className="detail__text--title">{characterData.name}</h2>
        <h4>Estatus: {characterData.alive ? "Vivo/a" : "Muerto/a"} {getLifeStatusIcon(characterData.alive)}</h4>
        <h4>Especie: {getSpecies(characterData.species)} {getSpeciesIcon(characterData.species)}</h4>
        <h4>Género: {getGender(characterData.gender)}</h4>
        <h4>Casa: {characterData.house || "No pertenece a ninguna casa"}</h4>
      </section>
      <img className="detail__house" src={getHouseImage(characterData.house)} alt={characterData.house}/>
    </article>
  );
}

export default CharacterCard;

