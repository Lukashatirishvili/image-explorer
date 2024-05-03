import { useContext } from "react";
import { ImagesContext } from "../context/ImagesContext";

function Alert() {
  const { error } = useContext(ImagesContext);
  return (
    <div className="alert alert-danger text-center" role="alert">
      {error}
    </div>
  );
}

export default Alert;
