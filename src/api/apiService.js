import axios from "axios";

const URL = "https://api.unsplash.com/";
const KEY = "-EoWr5-FKQREDkQL61KtKbYNka25pbgbieAeGP88zl4";

// ****** fetch more data when user scroll down *****
export const fetchMoreData = async (
  query,
  setImages,
  page,
  setIsLoading,
  setError
) => {
  if (query < 1) return;

  try {
    setIsLoading(true);
    const res = await axios.get(
      `${URL}/search/photos?page=${page}&query=${query}&client_id=${KEY}`
    );

    setImages((images) => [...images, ...res.data.results]);
  } catch (err) {
    setError(err);
  } finally {
    setIsLoading(false);
  }
};

// ****** fetch photos when user submit search ******
export const fetchData = async (query, setImages, setIsLoading, setError) => {
  if (query.length < 2) return;

  try {
    setIsLoading(true);
    const res = await axios.get(
      `${URL}/search/photos?page=1&query=${query}&client_id=${KEY}`
    );
    if (res.data.results.length === 0)
      setError("Sorry, the photo could not be found");
    setImages(res.data.results);
  } catch (err) {
    setError(err);
  } finally {
    setIsLoading(false);
  }
};
