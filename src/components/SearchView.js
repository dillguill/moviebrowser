import Hero from "./Hero";

// TMDB API Key: bfe72e251205c6f02b8dcd2ba5e3a582

const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`; // adds keyword to what you are searching in Hero section

  const resultsHtml = searchResults.map((obj, i) => {
    return <div key={i}>{obj.original_title}</div>
  })

  return (
    <>
      <Hero text={title} />
      {resultsHtml}
    </>
  );
};

export default SearchView;
