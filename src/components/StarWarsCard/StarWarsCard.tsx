import { CharacterData } from "../../types";
import "./StarWarsCard.css";

interface StarWarsCardProps {
  starWarsCharacter: CharacterData;
}

const StarWarsCard = ({
  starWarsCharacter: { image, name, height, mass, year },
}: StarWarsCardProps): React.ReactElement => {
  return (
    <article className="starwars-card">
      <div className="starwars-card__wrapper">
        <picture className="starwars-card__image">
          <img src={image} alt="{name} character"></img>
        </picture>
        <h2 className="starwars-card__title">{name}</h2>
        <div className="starwars-card__information">
          <span>Height: {height}</span>
          <span>Mass: {mass}</span>
          <span>Year: {year}</span>
        </div>
      </div>
    </article>
  );
};

export default StarWarsCard;
