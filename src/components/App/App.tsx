import { useEffect, useState } from "react";
import StarWarsList from "../StarWarsList/StarWarsList";
import "./App.css";

const App = (): React.ReactElement => {
  const [characters, setCharacters] = useState<CharacterData[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(import.meta.env.VITE_API_URL_STARWARS);
      const apiCharactersStarWars = (await response.json()) as CharacterData[];

      setCharacters([...apiCharactersStarWars]);
    })();
  }, []);

  return (
    <>
      <div className="container">
        <header className="header__container">
          <h1 className="header__title">Star Wars Universe</h1>
        </header>
        <main className="main-container">
          <StarWarsList charactersList={characters} />
        </main>
      </div>
    </>
  );
};

export default App;
