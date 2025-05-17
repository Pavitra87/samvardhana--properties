import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Blogs from "./Pages/Blogs";
import ProjectDetails from "./Pages/ProjectDetails";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project-details" element={<ProjectDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
