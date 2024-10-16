import { useNavigate, Link } from "react-router-dom";

  // Deconstruct searchText and setSearchText
const Navbar = ({ searchText, setSearchText }) => {
  const navigate = useNavigate();

  // Update and set searchText when user types
  const updateSearchText = (e) => {
    setSearchText(e.target.value);
  };

  // Handle form submission for the search
  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    if (searchText.trim()) {
      navigate("/search"); // Navigate to the search page
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Movie Browser
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled" to="/" aria-disabled="true">
                Coming Soon
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchText} // Bind searchText to input
              onChange={updateSearchText} // Handle search input change
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;