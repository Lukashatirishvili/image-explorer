import { useContext } from "react";
import Image from "./Image";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Outlet } from "react-router-dom";
import { ImagesContext } from "../context/ImagesContext";
import Loader from "./Loader";
import Alert from "./Alert";

function ImagesContainer() {
  const { isModalOpen, setIsModalOpen, images, isLoading, error } =
    useContext(ImagesContext);

  if (error) return <Alert />;

  return (
    <div className="container-sm p-3 py-sm-5 px-3 px-sm-0">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="15px">
          {images?.map((data) => (
            <Image
              data={data}
              key={data.id}
              isOpenModal={isModalOpen}
              setIsOpenModal={setIsModalOpen}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>{" "}
      {isLoading && <Loader />}
      <Outlet />
    </div>
  );
}

export default ImagesContainer;
