import { useState } from "react";
import { CharacterData } from "../../types";
import Button from "../Button/Button";
import "./StarWarsCard.css";

interface StarWarsCardProps {
  starWarsCharacter: CharacterData;
}

const StarWarsCard = ({
  starWarsCharacter: { id, name, height, mass, created },
}: StarWarsCardProps): React.ReactElement => {
  const date = new Date(created);
  const [characterMass, setCharacterMass] = useState(mass);

  const incrementCharacterMass = () => {
    setCharacterMass((characterMass) => (characterMass += 1));
  };

  const decrementCharacterMass = () => {
    if (characterMass === 0) {
      return;
    }

    setCharacterMass((characterMass) => characterMass - 1);
  };

  return (
    <article className="starwars-card">
      <div className="starwars-card__wrapper">
        <picture className="starwars-card__picture">
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
            alt="{name} character"
            className="starwars-card__image"
          />
        </picture>
        <h2 className="starwars-card__title">{name}</h2>
        <ul className="starwars-card__information">
          <li>Height: {height} cms</li>
          <li>Mass: {mass} kgs</li>
          <div className="mass-container">
            <Button text="+" actionOnClick={incrementCharacterMass} />
            <Button text="-" actionOnClick={decrementCharacterMass} />
          </div>
          <li>
            Created: {date.getDay()}/{date.getMonth()}/{date.getFullYear()}
          </li>
        </ul>
      </div>
    </article>
  );
};

export default StarWarsCard;
