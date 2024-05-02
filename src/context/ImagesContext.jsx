import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ImagesContext = createContext();

const URL = "https://api.unsplash.com/";
const KEY = "-EoWr5-FKQREDkQL61KtKbYNka25pbgbieAeGP88zl4";

export function ImagesProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");

  // ****** Fetch popular photos as default (WHEN PAGE LOADED) *****
  useEffect(() => {
    axios
      .get(`${URL}//photos?order_by=popular&client_id=${KEY}`)
      .then((res) => setImages(res.data));
  }, []);

  // ****** fetch photos when user submit search ******
  function fetchData() {
    if (query.length < 2) return;
    axios
      .get(`${URL}/search/photos?page=1&query=${query}&client_id=${KEY}`)
      .then((res) => setImages(res.data.results));
  }

  return (
    <ImagesContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        images,
        setImages,
        query,
        setQuery,
        fetchData,
      }}
    >
      {children}
    </ImagesContext.Provider>
  );
}
