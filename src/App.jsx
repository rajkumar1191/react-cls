import { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import axios from "axios";
import CallBackParent from "./components/CallBackParent";
import UserProvider from "./components/UserProvider";

function App() {
  const title = "Course List";
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/photos")
    //   .then((res) => res.json())
    //   .then((data) => setPhotos(data))
    //   .catch((err) => console.error(err.message));

    // const loadData = async () => {
    //   try {
    //     const res = await fetch("https://jsonplaceholder.typicode.com/photos");
    //     const data = await res.json();
    //     setPhotos(data);
    //   } catch (err) {
    //     console.error(err.message);
    //   }
    // };

    // loadData();

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

  const getPhotoData = (photo) => {
    setPhotos((prev) => [...prev, photo]);
    console.log(photos);
  };

  //React.memo -> for component memoization -> pure component/functional component -
  //useCallback -> for function memoization ->
  //useMemo -> for value memoization

  return (
    <UserProvider>
      <Header />
      {error && <p>{error}</p>}
      {loading ? (
        <>Loading....</>
      ) : (
        <>
          <CallBackParent />
          <Main titleName={title} photos={photos} getPhoto={getPhotoData} />
        </>
      )}
      <Footer />
    </UserProvider>
  );
}

export default App;
