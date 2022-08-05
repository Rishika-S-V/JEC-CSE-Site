import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";

function App() {
  return (
    <div>
      <div className="">
        <nav>
          <ul>
            <li>
              <Link to="/">Page1</Link>
            </li>
            <li>
              <Link to="/2">Page2</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/2" element={<Page2 />} />
      </Routes>
    </div>
  );
}

export default App;
