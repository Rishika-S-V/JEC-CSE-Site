import { Routes, Route } from "react-router-dom";
import { Footer, Header } from "./components/presentation";
import { Home } from "./pages";
import Page2 from "./pages/page2";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Header variant="HOME">
              <Home />
            </Header>
          }
        />
        <Route path="/2" element={<Page2 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
