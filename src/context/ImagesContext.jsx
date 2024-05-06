import axios from "axios";
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { fetchMoreData } from "../api/apiService";

const URL = "https://api.unsplash.com/";
const KEY = "-EoWr5-FKQREDkQL61KtKbYNka25pbgbieAeGP88zl4";

export const ImagesContext = createContext();

export function ImagesProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(2);
  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem("history")) || []
  );

  const cachedData = useMemo(() => new Map(), []);

  // Effect to handle expiration of elements
  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = Date.now();

      for (const [key, { expirationTime }] of cachedData.entries()) {
        if (currentTime >= expirationTime) {
          cachedData.delete(key);
        }
      }
    }, 1000); // Check every second for expired elements

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [cachedData]);

  // ****** Scroll Functionality ********
  const handleScroll = useCallback(() => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 1) {
      fetchMoreData(query, setImages, page, setIsLoading, setError);
      setPage((page) => page + 1);
    }
  }, [query, setImages, page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // ****** Fetch popular photos as default (WHEN PAGE LOADED) *****
  useEffect(() => {
    axios
      .get(`${URL}//photos?order_by=popular&client_id=${KEY}`)
      .then((res) => {
        setImages(res.data);
      });
  }, []);

  // ***** set History Item to localstorage *****
  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history) || []);
  }, [history]);

  return (
    <ImagesContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        images,
        setImages,
        query,
        setQuery,
        isLoading,
        setIsLoading,
        error,
        setError,
        setPage,
        history,
        setHistory,
        cachedData,
      }}
    >
      {children}
    </ImagesContext.Provider>
  );
}
