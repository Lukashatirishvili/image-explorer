import { Spinner } from "react-bootstrap";

function Loader() {
  return (
    <div className="position-fixed top-50 start-50">
      <Spinner animation="border" className="loader" />
    </div>
  );
}

export default Loader;
