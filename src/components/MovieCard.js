import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Image+Available";

  const detailUrl = `/movies/${movie.id}`;

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12 my-4">
      <div className="card shadow-sm" style={{ borderRadius: "10px" }}>
        <img
          src={posterUrl}
          className="card-img-top"
          alt={movie.original_title}
          style={{ borderRadius: "10px 10px 0 0", height: "400px", objectFit: "cover" }}
        />
        <div className="card-body text-center">
          <h5 className="card-title" style={{ fontWeight: "600", fontSize: "1.25rem" }}>
            {movie.original_title}
          </h5>
          <Link to={detailUrl} className="btn btn-primary mt-3" style={{ width: "100%" }}>
            Show Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
