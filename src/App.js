import { Routes, Route } from "react-router-dom";
import Oops from "./routes/Oops";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Admin from "./routes/Admin";
import Goods from "./components/Admin/Goods";
import Slider from "./components/Admin/Slider";
import Interesting from "./components/Admin/Interesting";
import Genres from "./components/Admin/Genres";


function App() {
  return (
    <Routes>
      <Route path="*" element={<Oops />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Admin />}>
        <Route path="/admin/goods" element={<Goods />} />
        <Route path="/admin/slider" element={<Slider />} />
        <Route path="/admin/interesting" element={<Interesting />} />
        <Route path="/admin/genres" element={<Genres />} />
      </Route>
    </Routes>
  );
}

export default App;
