import { Link } from "react-router-dom";

function HistoryNavbar() {
  return (
    <nav className="navbar bg-body-tertiary py-3">
      <div className="container-sm">
        <div className="d-none d-md-flex navbar-brand me-5 mb-1 d-flex align-items-center gap-2 text-success">
          <h3 className="text-center mt-2">Explore</h3>
          <span className="fs-2">
            <i className="bi bi-camera"></i>
          </span>
        </div>
        <div className="d-flex ms-auto me-auto m-md-0">
          <button className="btn btn-outline-danger">Clear history</button>
          <div className="vertical-line mx-3"></div>
          <Link to={"/"} className="btn btn-outline-primary">
            Main page
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default HistoryNavbar;
