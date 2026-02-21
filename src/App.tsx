import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Surahs from "./pages/Surahs";
import SurahDetail from "./pages/SurahDetail";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/surahs" element={<Surahs />} />
          <Route path="/surahs/:surahId" element={<SurahDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
