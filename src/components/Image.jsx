function Image({ data }) {
  console.log(data);
  return <img src={data.urls.small} alt="" className="img-fluid cursor-p" />;
}

export default Image;
