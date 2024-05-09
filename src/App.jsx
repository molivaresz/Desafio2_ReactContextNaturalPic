import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import Favorites from "./views/Favorites";
import Home from "./views/Home";
import PhotosContextProvider from "./context/PhotosContextProvider";

const PHOTO_URL = "/photos.json";

const App = () => {
  return (
    <>
      <PhotosContextProvider>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/favoritos" element={<Favorites />}/>
      </Routes>
      </PhotosContextProvider>
    </>
  );
};
export default App;
