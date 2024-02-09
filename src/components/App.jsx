import { useEffect, useState } from "react";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import Header from "./Header";
import callToApi from "../services/api";
import "../scss/App.scss";
import { Route, Routes } from "react-router-dom";
import CharacterCard from "./CharacterCard";
import { useLocation, matchPath } from 'react-router';
import BackBtn from "./BackBtn";
// import ls from '../services/localStorage';

const App = () => {
  const [allCharacters, setAllCharacters] = useState([]);
  const [filterHouse, setFilterHouse] = useState("gryffindor");
  const [filterName, setFilterName] = useState("");

  useEffect(() => {
    callToApi().then((characters) => setAllCharacters(characters));
  }, []);

  const handleHouse = (value) => {
    setFilterHouse(value);
  };

  const handleName = (value) => {
    setFilterName(value);
  };

  const filteredCharacters = allCharacters
    .filter(
      (character) => character.house.toLowerCase() === filterHouse.toLowerCase()
    )
    .filter((character) =>
      character.name.toLowerCase().includes(filterName.toLowerCase())
    );

  const {pathname} = useLocation();
  const routeData = matchPath("/character/:idCharacter", pathname)
  const idCharacter = routeData !== null ? routeData.params.idCharacter : null;
  const userData = allCharacters.find((character) => character.id === idCharacter);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="firstBody">
            <Header />
            <Filters
              handleHouse={handleHouse}
              filterHouse={filterHouse}
              handleName={handleName}
              filterName={filterName}
            />
            <CharacterList filteredCharacters={filteredCharacters} />
          </div>
        }
      />
      <Route
        path="/character/:idCharacter"
        element={
          <div className="secondBody">
            <Header />
            <BackBtn />
            <CharacterCard userData={userData}/>
          </div>
        }
      />
    </Routes>
  );
};

export default App;
