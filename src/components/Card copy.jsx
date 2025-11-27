import "./Card.css";
const Card = (props) => {
  const { title, thumbnailUrl, url, showData } = props;

  if (showData) {
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
      </div>
    );
  } else {
    return (
      <div className="card">
        <p>Data Not Found</p>
      </div>
    );
  }
};

export default Card;
