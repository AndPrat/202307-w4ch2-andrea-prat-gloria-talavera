import { CharacterData } from "../../types";
import StarWarsCard from "../StarWarsCard/StarWarsCard";
import "./StarWarsList.css";

interface StarWarsListProps {
  charactersList: CharacterData[];
}

const StarWarsList = (
  charactersList: StarWarsListProps,
): React.ReactElement => {
  return (
    <ul className="characters-list">
      {charactersList.charactersList.map((character, id) => {
        return (
          <li key={id} className="character-list__item">
            <StarWarsCard starWarsCharacter={character} />
          </li>
        );
      })}
    </ul>
  );
};
export default StarWarsList;
