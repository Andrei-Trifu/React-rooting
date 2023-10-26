import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import AboutPage from "./components/AboutPage/AboutPage";
import BlogPage from "./components/BlogPage/BlogPage";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import SingleBookPage from "./components/SingleBookPage/SingleBookPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/book/:id" element={<SingleBookPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
