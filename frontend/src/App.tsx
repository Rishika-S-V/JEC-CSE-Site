import { Routes, Route } from "react-router-dom";
import withLayout from "./components/hoc/withLayout";
import { Gallery, Home, Infrastructure } from "./pages";

function App() {
  const HomeHOC = withLayout(Home);
  const InfrastructureHOC = withLayout(Infrastructure, "Infrastructure");
  const GalleryHOC = withLayout(Gallery, "Gallery");
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeHOC />} />
        <Route path="/infrastructure" element={<InfrastructureHOC />} />
        <Route path="/gallery" element={<GalleryHOC />} />
      </Routes>
    </>
  );
}

export default App;
