import Hero from "./Hero";
import PopularMovies from "./PopularMovies";

const HomeView = () => {
  return (
    <>
      <Hero text="Welcome to My React Project" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Welcome to My React 201 Project. Here you can search any movie you want!
            </p>
          </div>
        </div>
      </div>

      <PopularMovies />
    </>
  );
};

export default HomeView;
