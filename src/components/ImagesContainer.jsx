import { useEffect, useState } from "react";
import Image from "./Image";
import axios from "axios";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const URL = "https://api.unsplash.com/";
const KEY = "-EoWr5-FKQREDkQL61KtKbYNka25pbgbieAeGP88zl4";

function ImagesContainer() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}//photos?order_by=popular&client_id=${KEY}`)
      .then((res) => setImages(res.data));
  }, []);

  return (
    <div className="container-sm p-3 py-sm-5 px-sm-0">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="15px">
          {images.map((data) => (
            <Image data={data} key={data.id} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
      {/* <div className="row row-cols-4 row-gap-2">
        {images.map((data) => (
          <Image data={data} key={data.id} />
        ))}
      </div> */}
    </div>
  );
}

export default ImagesContainer;
