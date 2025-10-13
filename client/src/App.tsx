import { BrowserRouter, Routes, Route } from "react-router";
import { CanvasPage } from "./pages/canvasPage";
import HomePage from "./pages/HomePage";
import { Home } from "lucide-react";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/canvas" element={<CanvasPage />} />

          <Route path="/check" element={<Home />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
