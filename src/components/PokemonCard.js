import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ id, name, hp, front, back }) {
  const [isClicked, setIsClicked] = useState(false)

  function handleClick() {
    setIsClicked(isClicked => !isClicked)
  }

  return (
    <Card>
      <div>
        <div className="image">
          <img onClick={handleClick} src={isClicked ? back : front} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
