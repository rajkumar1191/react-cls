import { useState, useEffect } from "react";
import AddPhoto from "./AddPhoto";
import AddPhotoReducer from "./AddPhotoReducer";
import Card from "./Card";
import "./Main.css";
import AddPhotoRef from "./AddPhotoUse";
import CheckCount from "./CheckCount";
import axios from "axios";

const Main = (props) => {
  // const { titleName, photos, getPhoto } = props;
  const titleName = "Course List";

  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;
    const controller = new AbortController(); //

    const loadData = async () => {
      ``;
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/photos",
          {
            signal: controller.signal,
          }
        );
        if (mounted) setPhotos(res.data);
      } catch (err) {
        if (!axios.isCancel?.(err)) setError("Failed to load data");
      } finally {
        if (mounted) setLoading(false);
      }
    };

    loadData();

    return () => {
      mounted = false;
      controller.abort();
    };
  }, []);
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

  const getPhotoData = (photo) => {
    setPhotos((prev) => [...prev, photo]);
    console.log(photos);
  };

  return (
    <main className="container">
      <h4>{titleName}</h4>
      <div className="photo-container">{photosList}</div>
    </main>
  );
};

export default Main;
