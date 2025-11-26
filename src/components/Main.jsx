import Card from "./Card";
import "./Main.css";
const Main = (props) => {
  const { titleName, photos } = props;
  const url = "https://placehold.co/600x400";
  console.log(props);
  return (
    <main className="container">
      <h4>{titleName}</h4>

      <div className="photo-container">
        <Card title={photos[0].title} thumbnailUrl={url} url={photos[0].url} />
        <Card title={photos[1].title} thumbnailUrl={url} url={photos[1].url} />
        <Card title={photos[2].title} thumbnailUrl={url} url={photos[2].url} />
      </div>
    </main>
  );
};

export default Main;
