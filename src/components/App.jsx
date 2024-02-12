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
import Error from "./Error";
import Footer from "./Footer";


const App = () => {
  const [allCharacters, setAllCharacters] = useState([]);
  const [filterHouse, setFilterHouse] = useState(() => ls.get('filterHouse') || "gryffindor");
  const [filterName, setFilterName] = useState(() => ls.get('filterName') || "");
  const [filterAncestors, setFilterAncestors] = useState(() => ls.get('filterAncestors') || "");

  useEffect(() => {
    callToApi().then((characters) => setAllCharacters(characters));
  }, []);

  useEffect(() => {
    ls.set('filterHouse', filterHouse);
    ls.set('filterName', filterName);
    ls.set('filterAncestors', filterAncestors);
  }, [filterHouse, filterName]);

  const handleHouse = (value) => {
    setFilterHouse(value);
  };

  const handleName = (value) => {
    setFilterName(value);
  };
  
  const handleAncestors = (value) => {
    setFilterAncestors(value);
  }

  const handleReset = () => {
    ls.remove('filterHouse');
    ls.remove('filterName');
    ls.remove('filterAncestors');
    setFilterHouse('gryffindor');
    setFilterName('');
    setFilterAncestors('');
  }

  const filteredCharacters = allCharacters
    .filter(
      (character) => filterHouse === "" || character.house.toLowerCase() === filterHouse.toLowerCase()
    )
    .filter((character) =>
      character.name.toLowerCase().includes(filterName.toLowerCase())
    )
    .filter((character) => filterAncestors === "" || character.ancestry.toLowerCase() === filterAncestors.toLowerCase()
    )
    .sort((a, b) => a.name.localeCompare(b.name));
    ;

  const {pathname} = useLocation();
  const routeData = matchPath("/character/:idCharacter", pathname)
  const idCharacter = routeData !== null ? routeData.params.idCharacter : null;
  const characterData = allCharacters.find((character) => character.id === idCharacter) || ls.get('characterData');

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
              handleAncestors={handleAncestors}
              filterAncestors={filterAncestors}
              handleReset={handleReset}
            />
            <CharacterList filteredCharacters={filteredCharacters} filterName={filterName}/>
            <Footer />
          </div>
        }
      />
      <Route
        path="/character/:idCharacter"
        element={
          <div className="secondBody">
            <Header />
            <BackBtn />
            <CharacterCard characterData={characterData}/>
            <Footer />
          </div>
        }
      />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default App;

