import { useState, useEffect } from "react";
import AddPhoto from "./AddPhoto";
import AddPhotoReducer from "./AddPhotoReducer";
import Card from "./Card";
import "./Main.css";
import AddPhotoRef from "./AddPhotoUse";
import CheckCount from "./CheckCount";

const Main = (props) => {
  const { titleName, photos, getPhoto } = props;
  const url = "https://placehold.co/600x400";
  console.log(props);

  let [photoList, setPhoto] = useState(photos || []);
  // const sortedPhotos = photos.sort((a, b) => b.price - a.price);

  // const filterData = sortedPhotos.filter((photo)=> photo.price >= 200)

  useEffect(() => {
    setPhoto(photos);
  }, [photos]);

  const getDataFromChild = (photoDetail) => {
    console.log(photoDetail);
  };

  const photosList = photoList.map(
    (photo, index) =>
      photo.albumId && (
        <Card
          key={index}
          title={photo.title}
          thumbnailUrl={url}
          url={photo.url || ""}
          price={photo.price || 0}
          getPhotoData={getDataFromChild}
        />
      )
  );

  return (
    <main className="container">
      <h4>{titleName}</h4>
      <CheckCount />
      <AddPhotoRef />
      <AddPhoto passPhotoData={getPhoto} />
      <AddPhotoReducer passPhotoData={getPhoto} />
      <div className="photo-container">{photosList}</div>
    </main>
  );
};

export default Main;
