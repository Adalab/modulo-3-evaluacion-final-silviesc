import { useEffect, useState } from "react";
import "../scss/App.scss";
import { Route, Routes } from "react-router-dom";
import { useLocation, matchPath } from 'react-router';
import Header from "./Header";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import BackBtn from "./BackBtn";
import CharacterCard from "./CharacterCard";
import ls from '../sources/localStorage';
import callToApi from "../sources/api";

const App = () => {
  const [allCharacters, setAllCharacters] = useState([]);
  const [filterHouse, setFilterHouse] = useState(() => ls.get('filterHouse') || "gryffindor");
  const [filterName, setFilterName] = useState(() => ls.get('filterName') || "");

  useEffect(() => {
    callToApi().then((characters) => setAllCharacters(characters));
  }, []);

  useEffect(() => {
    ls.set('filterHouse', filterHouse);
    ls.set('filterName', filterName)
  }, [filterHouse, filterName]);

  const handleHouse = (value) => {
    setFilterHouse(value);
  };

  const handleName = (value) => {
    setFilterName(value);
  };

  const handleReset = () => {
    ls.remove('filterHouse');
    ls.remove('filterName');
    setFilterHouse('gryffindor');
    setFilterName('');
  }

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
              handleReset={handleReset}
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
            <CharacterCard userData={userData} getSpecies={getSpecies} getGender={getGender}/>
          </div>
        }
      />
    </Routes>
  );
};

export default App;

