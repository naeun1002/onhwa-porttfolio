import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header.jsx";

import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Works from "./Pages/Works.jsx";
import Awards from "./Pages/Awards.jsx";
import Contact from "./Pages/Contact.jsx";

import MeetMe from "./Pages/Projects/MeetMe.jsx";
import Goyo from "./Pages/Projects/Goyo.jsx";
import ArtRoad from "./Pages/Projects/ArtRoad.jsx";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/project/meet-me" element={<MeetMe />} />
        <Route path="/project/goyo" element={<Goyo />} />
        <Route path="/project/artroad" element={<ArtRoad />} />
      </Routes>
    </>
  );
}

export default App;