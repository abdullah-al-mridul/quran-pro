import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Surahs from "./pages/Surahs";
import SurahDetail from "./pages/SurahDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/surahs" element={<Surahs />} />
        <Route path="/surahs/:surahId" element={<SurahDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
