import '../scss/App.scss';
import Header from "./Header"
import CharacterList from "./CharacterList";
import callToApi from "../services/api";
import { useEffect, useState } from "react";
import ls from '../services/localStorage';
import { Link, Route, Routes } from "react-router-dom";
import wallpaper from "../images/background.jpeg"
import Filters from "./Filters";

const App = () => {

const [allCharacters, setAllCharacters] = useState([]);

  useEffect(() => {
    callToApi().then((characters) => 
    setAllCharacters(characters))
  }, [])

  return (
    <div style={{ backgroundImage: `url(${wallpaper})`}}>
      <Header/>
      <Filters />
      <CharacterList allCharacters={allCharacters}/>
    </div>
  )
};

export default App;

