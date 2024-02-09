import { Link } from "react-router-dom"

function BackBtn() {
  return (
    <Link to={'/'}>
        <button className="backBtn">
            <p>Volver</p>
            <i className="fa-solid fa-hat-wizard"></i>
        </button>
    </Link>
  )
}

export default BackBtn