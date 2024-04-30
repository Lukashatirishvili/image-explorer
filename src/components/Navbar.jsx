import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar bg-body-tertiary py-3">
        <div className="container-sm justify-content-start">
          <div className="d-none d-md-flex navbar-brand me-5 mb-1 d-flex align-items-center gap-2 text-success">
            <h3 className="text-center mt-2">Explore</h3>
            <span className="fs-2">
              <i className="bi bi-camera"></i>
            </span>
          </div>
          <form
            className="d-flex flex-grow-1 w-50 position-relative "
            role="search"
          >
            <input
              className="form-control me-4 ps-5"
              type="search"
              placeholder="Search"
              aria-label="Search "
            />
            <span className="position-absolute search-icon fs-5">
              <i className="bi bi-search"></i>
            </span>
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <div className="vertical-line mx-3"></div>
          <Link to={"/history"}>
            <button className="btn btn-outline-primary" type="submit">
              History
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
