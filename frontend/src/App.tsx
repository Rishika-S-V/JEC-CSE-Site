import { Routes, Route } from "react-router-dom";
import withLayout from "./components/hoc/withLayout";
import { Home, Infrastructure } from "./pages";
import Page2 from "./pages/page2";

function App() {
  const HomeHOC = withLayout(Home);
  const InfrastructureHOC = withLayout(Infrastructure, "Infrastructure");
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeHOC />} />
        <Route path="/infrastructure" element={<InfrastructureHOC />} />
      </Routes>
    </>
  );
}

export default App;
