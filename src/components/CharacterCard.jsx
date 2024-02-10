import notfound from "../images/notfound.png";
import ls from '../sources/localStorage';
import { useEffect, useState } from "react";

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
    } else if (species === "werewolf") {
      return <i className="fa-brands fa-wolf-pack-battalion"></i>
    }
  };
 
  return (
    <article className="articleContainer">
      <img className="articlePhoto" src={characterData.photo || notfound} alt={characterData.name} />
      <section className="sectionContainer">
        <h2>{characterData.name}</h2>
        <h4>Estatus: {characterData.alive ? "Vivo/a" : "Muerto/a"} {getLifeStatusIcon(characterData.alive)}</h4>
        <h4>Especie: {getSpecies(characterData.species)} {getSpeciesIcon(characterData.species)}</h4>
        <h4>Género: {getGender(characterData.gender)}</h4>
        <h4>Casa: {characterData.house || "No pertenece a ninguna casa"}</h4>
      </section>
    </article>
  );
}

export default CharacterCard;

