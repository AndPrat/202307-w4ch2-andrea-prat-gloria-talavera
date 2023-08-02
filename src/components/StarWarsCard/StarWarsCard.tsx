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
        <picture className="starwars-card__picture">
          <img
            src={image}
            alt="{name} character"
            className="starwars-card__image"
          />
        </picture>
        <h2 className="starwars-card__title">{name}</h2>
        <ul className="starwars-card__information">
          <li>Height: {height}</li>
          <li>Mass: {mass}</li>
          <li>Year: {year}</li>
        </ul>
      </div>
    </article>
  );
};

export default StarWarsCard;
