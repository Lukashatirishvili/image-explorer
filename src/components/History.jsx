import { ListGroup } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { ImagesContext } from "../context/ImagesContext";
import { useNavigate } from "react-router-dom";
import { fetchData } from "../api/apiService";

function History({ el, setHistory }) {
  const [displayX, setDisplayX] = useState(false);
  const { setImages, setIsLoading, setError, setQuery } =
    useContext(ImagesContext);
  const navigate = useNavigate();

  function handleDelete() {
    setHistory((history) => history.filter((item) => item !== el));
  }

  function handleReFetch() {
    navigate("/");
    fetchData(el, setImages, setIsLoading, setError);
    setQuery(el);
  }

  return (
    <ListGroup.Item
      onMouseOver={() => setDisplayX(true)}
      onMouseOut={() => setDisplayX(false)}
    >
      <div className="d-flex justify-content-between align-items-center">
        <span className="cursor-p" onClick={() => handleReFetch()}>
          {el}
        </span>

        {displayX && (
          <span className="text-danger cursor-p" onClick={() => handleDelete()}>
            <FontAwesomeIcon icon={faXmark} />
          </span>
        )}
      </div>
    </ListGroup.Item>
  );
}

export default History;
