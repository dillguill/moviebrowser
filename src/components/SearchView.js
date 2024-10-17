import Hero from "./Hero";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
    const posterUrl = movie.poster_path
      ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
      : "https://via.placeholder.com/500x750?text=No+Image+Available";

    const detailUrl = `/movies/${movie.id}`
    return (
        <div className="col-lg-3 col-md-3 col-2 my-4">
            <div className="card">
                <img src={posterUrl} className="card-img-top" alt={movie.original_title} />
                <div className="card-body">
                    <h5 className="card-title">{movie.original_title}</h5>
                    <Link to={detailUrl} className="btn btn-primary">Show Details</Link>
                </div>
            </div>
        </div>
    )
}

const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`; // adds keyword to what you are searching in Hero section

  // Check if searchResults is empty
  const resultsHtml = searchResults.length ? (
    searchResults.map((movie, i) => <MovieCard movie={movie} key={i} />)
  ) : (
    <div className="text-center my-5">
      <h3>No results found for "{keyword}"</h3>
    </div>
  );

  return (
    <>
      <Hero text={title} />
      {resultsHtml && 
        <div className="container">
            <div className="row">
                {resultsHtml}
            </div>
        </div>
      }
    </>
  );
};

export default SearchView;
