import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { ImagesContext } from "../context/ImagesContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faEye,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

const URL = "https://api.unsplash.com/";
const KEY = "-EoWr5-FKQREDkQL61KtKbYNka25pbgbieAeGP88zl4";

function ModalWindow() {
  const { imagesID } = useParams();
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const { isModalOpen, setIsModalOpen } = useContext(ImagesContext);

  useEffect(() => {
    axios
      .get(`${URL}/photos/${imagesID}?client_id=${KEY}`)
      .then((res) => setData(res.data));
  }, [imagesID]);

  return (
    <Modal
      show={isModalOpen}
      onHide={() => {
        setIsModalOpen(false);
        navigate("/");
      }}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="rounded-0"
    >
      <Modal.Header className="d-block p-0">
        <div className="d-flex justify-content-center align-items-center gap-4">
          <div className="d-flex align-items-center gap-2">
            <span className="fs-4 text-primary">
              <FontAwesomeIcon icon={faThumbsUp} />
            </span>
            <span className="fw-medium">{data.likes}</span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <span className="fs-4 text-orange">
              <FontAwesomeIcon icon={faEye} />
            </span>
            <span className="fw-medium">{data.views}</span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <span className="fs-4 text-dark">
              <FontAwesomeIcon icon={faDownload} />
            </span>
            <span className="fw-medium">{data.downloads}</span>
          </div>
        </div>
      </Modal.Header>
      <Modal.Body className="p-0">
        <img src={data?.urls?.regular} alt="" className="img-fluid" />
      </Modal.Body>
    </Modal>
  );
}

export default ModalWindow;
