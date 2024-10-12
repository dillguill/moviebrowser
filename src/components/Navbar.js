import { Link } from 'react-router-dom'; // add import

const Navbar = () => { 
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Movie Browser</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link> 
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link> {/* Change to about us */}
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled" to="/" aria-disabled="true">Coming Soon</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> {/* Add self closing tag `/>` */}
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
      </nav>
    )
  }

  // change all the <a> to <Link>, href to "to", and add "/"the to="/"
  // adding links makes switching between pages instant; rather than having to reload all the css and js it uses the react-router-dom 

  export default Navbar