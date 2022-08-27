import { Routes, Route } from "react-router-dom";
import withLayout from "./components/hoc/withLayout";
import { Home } from "./pages";
import Page2 from "./pages/page2";

function App() {
  const HomeHOC = withLayout(Home);
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeHOC />} />
        <Route path="/2" element={<Page2 />} />
      </Routes>
    </>
  );
}

export default App;
