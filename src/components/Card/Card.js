import React from "react";
import PropTypes from "prop-types";

import avatar from "../../media/avatar.jpg";
import avengersInfinityWar from "../../media/avengers_infinity_war.jpg";
import jurassicWorld from "../../media/jurassic_world.jpg";
import starWars from "../../media/star_wars_the_force_awakens.jpg";
import titanic from "../../media/titanic.jpg";

const imageMap = {
  "avatar.jpg": avatar,
  "avengers_infinity_war.jpg": avengersInfinityWar,
  "jurassic_world.jpg": jurassicWorld,
  "star_wars_the_force_awakens.jpg": starWars,
  "titanic.jpg": titanic,
};

const Card = ({ movie }) => {
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={imageMap[movie.img.src]}
        alt={movie.img.alt}
        width={200}
      />
      <div className="card-body">
        <h2>
          #{movie.ranking} - {movie.title} ({movie.year})
        </h2>
        <ul className="list-group list-group-flush">
          <li>{`Distributor: ${movie.distributor}`}</li>
          <li>{`Amount: ${movie.amount}`}</li>
        </ul>
      </div>
    </div>
  );
};

Card.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    year: PropTypes.string,
    distributor: PropTypes.string,
    amount: PropTypes.string,
    ranking: PropTypes.number,
    img: PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
    }),
  }).isRequired,
};

export default Card;
