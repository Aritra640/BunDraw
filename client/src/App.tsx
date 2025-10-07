import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./components/Home";
import { CanvasPage } from "./pages/canvasPage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/canvas" element={<CanvasPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
