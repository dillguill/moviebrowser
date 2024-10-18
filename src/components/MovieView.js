import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const MovieView = () => {
  const { id } = useParams();
  //   console.log(id)
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // console.log('make an api request', id)
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=bfe72e251205c6f02b8dcd2ba5e3a582&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
        setIsLoading(false); // once loaded is set to false
      });
  }, [id]);

  function renderMovieDetails() {
    if (isLoading) {
      return <Hero text="Loading ..." />;
    }
    if (movieDetails) {
      const posterPath = `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`;
      const backdropUrl = `https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`
      return (
        <>
          <Hero text={movieDetails.original_title} backdrop={backdropUrl} />
          <div className="container my-5">
            <div className="row">
              <div className="col-md-3">
                <img
                  src={posterPath}
                  alt="..."
                  className="img-fluid shadow rounded"
                />
              </div>
              <div className="col-md-9">
              <h2 className="mb-4">{movieDetails.original_title}</h2>
                <h4 className="mb-4">{movieDetails.tagline}</h4>
                <p className="lead mb-4">{movieDetails.overview}</p>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <strong>Rating:</strong> {movieDetails.vote_average}/10
                  </li>
                  <li className="mb-2">
                    <strong>Release Date:</strong> {movieDetails.release_date}
                  </li>
                  <li className="mb-2">
                    <strong>Runtime:</strong> {movieDetails.runtime} minutes
                  </li>
                  {movieDetails.genres && (
                    <li className="mb-2">
                      <strong>Genres:</strong> {movieDetails.genres.map(genre => genre.name).join(", ")}
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </>
      );
    }
  }

  return renderMovieDetails();
};

export default MovieView;
