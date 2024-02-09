import notfound from "../images/notfound.png";

function CharacterCard({ userData }) {

  return (
    <article>
      <img src={userData.photo || notfound} alt={userData.name} />
      <section>
        <h5>{userData.name}</h5>
        <h5>Estatus: {userData.status}</h5>
        <h5>Especie: {userData.species}</h5>
        <h5>Género: {userData.gender}</h5>
        <h5>Casa: {userData.house}</h5>
      </section>
    </article>
  );
}

export default CharacterCard;