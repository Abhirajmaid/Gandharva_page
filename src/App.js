import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fyqpage from "./pages/FaqPage";
import About from "./pages/AboutUsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/faqpage" element={<Fyqpage />}></Route>
        <Route path="/aboutus" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
