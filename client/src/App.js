import { BrowserRouter, Route, Routes } from "react-router-dom";
import Collections from "./pages/Collections";
import Home from "./pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections/:id" element={<Collections />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
