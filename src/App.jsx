import NavBar from "./assets/components/js/NavBar";
import Footer from "./assets/components/js/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import pages from "./assets/pages";
import './assets/components/scss/App.scss'


 function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
          <Route path="/" element={<pages.Home />} />
          <Route path="/about" element={<pages.About />} />
          <Route path="/more" element={<pages.More />} />
          <Route path="/*" element={<pages.NoPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}


export default App
