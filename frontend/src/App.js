import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Infrastructure from "./pages/Infrastructure";
import Footer from "./components/Footer";
import "./App.css";
import Academic from "./pages/Academic";
import Programmes from "./pages/Programmes";
import Events from "./pages/Events";
import Achievements from "./pages/Achievements";
import Projects from "./pages/Projects";
import Clubs from "./pages/Clubs";
import Gallery from "./pages/Gallery";
import Alumni from "./pages/Alumni";
import Notfound from "./pages/Notfound";
import Student from "./pages/Student";
import Faculty from "./pages/Faculty";
import Notes from "./pages/Notes";
import Facultydetails from "./pages/Facultydetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="Infrastructure" element={<Infrastructure />} />
        <Route path="Academic" element={<Academic />} />
        <Route path="Programmes" element={<Programmes />} />
        <Route path="Events" element={<Events />} />
        <Route path="Achievements" element={<Achievements />} />
        <Route path="Projects" element={<Projects />} />
        <Route path="Clubs" element={<Clubs />} />
        <Route path="Gallery" element={<Gallery />} />
        <Route path="Alumni" element={<Alumni />} />
        <Route path="Student" element={<Student />} />
        <Route path="Faculty" element={<Faculty />} />
        <Route path="facultydetail" element={<Facultydetails />} />
        <Route path="Notes" element={<Notes />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
