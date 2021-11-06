import React from "react";
import { ReactComponent as GoldenStar } from "../../assets/images/golden-star.svg";
import PriceButton from "../PriceButton";
import "./styles.css";

function MovieCard({
  title, vote_average, price, poster_path, handleMovieBuy,
}) {
  const background = `linear-gradient(rgba(0, 0, 0, 0.3) 100%, rgba(0, 0, 0, 0.3)100%), url('${poster_path}') no-repeat center / cover`;

  return (
    <div className="movie-card" style={{ background }}>
      <div className="movie-info">
        <h3 title={title}>{title}</h3>
        <div className="movie-stars">
          <GoldenStar />
          {vote_average}
        </div>
      </div>
      <PriceButton text="Sacola" type="movie" price={price} onClickHandler={() => handleMovieBuy({ title, poster_path, price })} />
    </div>
  );
}

export default MovieCard;
