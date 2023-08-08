import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Story from "./pages/Story";
import Performer from "./pages/Performer";
import DirectorFilm from "./pages/DirectorFilm";

const App = () => {
  return (
    <div className="bg-neutral-100">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/performer" element={<Performer />} />
        <Route path="/directorfilm" element={<DirectorFilm />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
