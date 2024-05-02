import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const URL = "https://api.unsplash.com/";
const KEY = "-EoWr5-FKQREDkQL61KtKbYNka25pbgbieAeGP88zl4";

function ModalWindow() {
  const { imagesID } = useParams();
  const [data, setData] = useState({});

  console.log(data);
  useEffect(() => {
    axios
      .get(`${URL}/photos/${imagesID}?client_id=${KEY}`)
      .then((res) => setData(res.data));
  }, [imagesID]);

  return (
    <div className="position-fixed custom-c">
      <div className="container-sm p-0 bg-body-secondary">
        <p>lorem10</p>
        <img src={data?.urls?.regular} alt="" className="img-fluid" />
      </div>
    </div>
  );
}

export default ModalWindow;
