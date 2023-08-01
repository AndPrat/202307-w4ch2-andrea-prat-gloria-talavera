import StarWarsCard from "../StarWarsCard/StarWarsCard";

interface StarWarsListProps {
  charactersList: CharacterData[];
}

const StarWarsList = (
  charactersList: StarWarsListProps,
): React.ReactElement => {
  return (
    <ul className="characters-list">
      {charactersList.charactersList.map((character, index) => {
        return (
          <li key={index}>
            <StarWarsCard starWarsCharacter={character} />
          </li>
        );
      })}
    </ul>
  );
};
export default StarWarsList;
