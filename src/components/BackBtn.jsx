import { Link } from "react-router-dom";

function BackBtn() {
  return (
    <Link to={"/"} className="list__card--link">
      <button className="backBtn">
        <i className="fa-solid fa-hat-wizard"></i>
        <p>Volver</p>
      </button>
    </Link>
  );
}

export default BackBtn;
