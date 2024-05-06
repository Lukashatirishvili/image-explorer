import { useContext } from "react";
import { Alert, ListGroup } from "react-bootstrap";
import { ImagesContext } from "../context/ImagesContext";
import History from "./History";

function HistoryContainer() {
  const { history, setHistory } = useContext(ImagesContext);

  return (
    <div className="d-flex justify-content-center">
      <div className="mt-5 custom-width px-3 px-sm-0">
        {history.length === 0 && (
          <Alert variant="success">History is empty</Alert>
        )}

        {history && (
          <ListGroup className="text-center shadow-sm">
            {history.map((el) => (
              <History
                key={`${Date.now()}-${Math.random()}`}
                el={el}
                setHistory={setHistory}
              />
            ))}
          </ListGroup>
        )}
      </div>
    </div>
  );
}

export default HistoryContainer;
