import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Category from "./pages/Category";
import Recipe from "./pages/Recipe";
import Basket from "./components/BasketList/Basket";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/category/:name" element={<Category />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Basket />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
