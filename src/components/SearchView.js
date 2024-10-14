import Hero from "./Hero";

const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`; // adds keyword to what you are searching in Hero section
  console.log(searchResults, "are the search results");
  return (
    <>
      <Hero text={title} />
    </>
  );
};

export default SearchView;
