import { CharacterData } from "../../types";

interface StarWarsCardProps {
  starWarsCharacter: CharacterData;
}

const StarWarsCard = ({
  starWarsCharacter: { image, name, height, mass, year },
}: StarWarsCardProps): React.ReactElement => {
  return (
    <article className="starwars_card">
      <picture className="starwars_image">
        <img src={image} alt="{name} character"></img>
      </picture>
      <h2 className="starwars_title">{name}</h2>
      <div className="starwars_information">
        <span>Height: {height}</span>
        <span>Mass: {mass}</span>
        <span>Year: {year}</span>
      </div>
    </article>
  );
};

export default StarWarsCard;
