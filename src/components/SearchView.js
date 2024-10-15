import Hero from "./Hero";

// TMDB API Key: bfe72e251205c6f02b8dcd2ba5e3a582

const MovieCard = ({ movie }) => {
    const posterURL = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    return (
        <div className="col-lg-3 col-md-3 col-2 my-4">
            <div className="card">
                <img src={posterURL} className="card-img-top" alt={movie.original_title} />
                <div className="card-body">
                    <h5 className="card-title">{movie.original_title}</h5>
                    <a href="#" className="btn btn-primary">Show Details</a>
                </div>
            </div>
        </div>
    )
}

const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`; // adds keyword to what you are searching in Hero section

  const resultsHtml = searchResults.map((obj, i) => {
    // return <div key={i}>{obj.original_title}</div>
    return <MovieCard movie={obj} key={i} />
  })

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
