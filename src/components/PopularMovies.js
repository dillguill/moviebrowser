import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=bfe72e251205c6f02b8dcd2ba5e3a582&language=en-US&page=1&include_adult=false`)
      .then(response => response.json())
      .then(data => {
        setPopularMovies(data.results);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container my-5">
      <h2 className="mb-4">Popular Movies</h2>
      <div className="row">
        {popularMovies.map(movie => (
          <div key={movie.id} className="col-md-3 mb-4">
            <Link to={`/movies/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                className="img-fluid shadow rounded"
              />
              <div className="d-grid mt-2">
                <Link
                  to={`/movies/${movie.id}`}
                  className="btn btn-primary"
                  style={{ textAlign: "center" }}
                >
                  {movie.title}
                </Link>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularMovies;
