import { useRef } from "react";

const AddPhotoRef = () => {
  const albumIdRef = useRef();
  const titleRef = useRef();
  const urlRef = useRef();
  const showDataRef = useRef();
  const priceRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(albumIdRef)
    if (
      albumIdRef.current &&
      titleRef.current &&
      urlRef.current &&
      showDataRef.current &&
      priceRef.current
    ) {
      if (!albumIdRef.current.value) {
        albumIdRef.current.focus();
        return;
      }
      if (!titleRef.current.value) {
        titleRef.current.focus();
        return;
      }
      if (!urlRef.current.value) {
        urlRef.current.focus();
        return;
      }
      if (!showDataRef.current.value) {
        showDataRef.current.focus();
        return;
      }
      if (!priceRef.current.value) {
        priceRef.current.focus();
        return;
      }

      const photoData = {
        albumId: Number(albumIdRef.current.value),
        title: titleRef.current.value,
        url: urlRef.current.value,
        showData: showDataRef.current.value,
        price: Number(priceRef.current.value),
      };
    }
  };

  return (
    <div>
      <h3>Add Photo Component</h3>
      <form>
        <label>Album Id</label>
        <input type="text" name="albumId" ref={albumIdRef} />
        <br />
        <label>Title</label>
        <input type="text" name="title" ref={titleRef} />
        <br />
        <label>URL</label>
        <input type="text" name="url" ref={urlRef} />
        <br />
        <label>Show Data</label>
        <input type="text" name="showData" ref={showDataRef} />
        <br />
        <label>Price</label>
        <input type="number" name="price" ref={priceRef} />
        <br />
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPhotoRef;
