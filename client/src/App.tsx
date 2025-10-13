import { BrowserRouter, Routes, Route } from "react-router";
import { CanvasPage } from "./pages/canvasPage";
import HomePage from "./pages/HomePage";
import { Home } from "lucide-react";
import { DemoCanvasPage } from "./pages/demo_canvas";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/canvas" element={<CanvasPage />} />
          <Route path="/demo" element={<DemoCanvasPage />} />
          <Route path="/check" element={<Home />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
