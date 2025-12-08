import { useContext, useState } from "react";
import { UserContext } from "./UserContext";

const AddPhoto = (props) => {
  const { user } = useContext(UserContext);
  const { passPhotoData } = props;
  const [formData, setFormData] = useState({
    albumId: 1,
    title: "",
    url: "",
    showData: true,
    price: 0,
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedFormData = {
      albumId: Number(formData.albumId),
      title: formData.albumId,
      url: formData.url,
      showData: true,
      price: Number(formData.price),
      thumbnailUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1200px-React_Logo_SVG.svg.png",
    };

    passPhotoData(formattedFormData);
  };
  return (
    <div>
      <h3>Add Photo Component for {user.name}</h3>
      <form onSubmit={handleSubmit}>
        <label>Album Id</label>
        <input
          type="text"
          name="albumId"
          value={formData.albumId}
          onChange={handleChange}
        />
        <br />
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <br />
        <label>URL</label>
        <input
          type="text"
          name="url"
          value={formData.url}
          onChange={handleChange}
        />
        <br />
        <label>Show Data</label>
        <input
          type="text"
          name="showData"
          value={formData.showData}
          onChange={handleChange}
        />
        <br />
        <label>Price</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddPhoto;
