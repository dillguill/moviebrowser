import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const MovieView = () => {
  const { id } = useParams( )
//   console.log(id)
  const [ movieDetails, setMovieDetails ] = useState({})

  useEffect(() => {
    // console.log('make an api request', id)
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=bfe72e251205c6f02b8dcd2ba5e3a582&language=en-US`)
        .then(response => response.json())
        .then(data => {
            setMovieDetails(data)
        })
  }, [id])

  return (
    <>
      <Hero text={movieDetails.original_title} />
    </>
  );
};

export default MovieView;
