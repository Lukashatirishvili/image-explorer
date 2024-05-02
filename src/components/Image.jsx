import { useNavigate } from "react-router-dom";

function Image({ data, setIsOpenModal }) {
  // console.log(data.urls);
  const navigate = useNavigate();

  return (
    <>
      <img
        onClick={() => {
          setIsOpenModal(true);
          navigate(`/${data.id}`);
        }}
        src={data?.urls?.small}
        alt=""
        className="img-fluid cursor-p"
      />
    </>
  );
}

export default Image;
