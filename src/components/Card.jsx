import "./Card.css";
const Card = (props) => {
  const { title, thumbnailUrl, url, price, getPhotoData } = props;

  const setPhotoData = () => {
    getPhotoData({ title, thumbnailUrl, url, price });
  };

  return (
    <div className="card">
      <img src={thumbnailUrl} alt={title} />
      <h4>{title}</h4>
      <p>
        URL:{" "}
        <a href={url} target="_blank">
          Click here
        </a>
      </p>
      <h5>Price: {price ?? 0}</h5>
      <button onClick={setPhotoData}>Select this</button>
    </div>
  );
};

export default Card;
