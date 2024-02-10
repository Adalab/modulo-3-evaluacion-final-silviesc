import notfound from "../images/notfound.png";

function CharacterCard({ userData }) {

  return (
    <article className="articleContainer">
      <img className="articlePhoto" src={userData.photo || notfound} alt={userData.name} />
      <section className="sectionContainer">
        <h3>{userData.name}</h3>
        <h4>Estatus: {userData.status}</h4>
        <h4>Especie: {userData.species}</h4>
        <h4>Género: {userData.gender}</h4>
        <h4>Casa: {userData.house}</h4>
      </section>
    </article>
  );
}

export default CharacterCard;

