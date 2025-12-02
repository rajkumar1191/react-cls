import AddPhoto from "./AddPhoto";
import AddPhotoReducer from "./AddPhotoReducer";
import Card from "./Card";
import "./Main.css";

const Main = (props) => {
  const { titleName, photos, getPhoto } = props;
  const url = "https://placehold.co/600x400";
  console.log(props);

  const sortedPhotos = photos.sort((a, b) => b.price - a.price);

  const filterData = sortedPhotos.filter((photo)=> photo.price >= 200)

  const getDataFromChild = (photoDetail) => {
    console.log(photoDetail)
  }

  const photosList = filterData.map(
    (photo, index) =>
      photo.showData && (
        <Card
          key={index}
          title={photo.title}
          thumbnailUrl={photo.thumbnailUrl || url}
          url={photo.url}
          price={photo.price}
          getPhotoData={getDataFromChild}
        />
      )
  );


  return (
    <main className="container">
      <h4>{titleName}</h4>
      <AddPhoto passPhotoData={getPhoto} />
      <AddPhotoReducer passPhotoData={getPhoto} />
      <div className="photo-container">{photosList}</div>
    </main>
  );
};

export default Main;
