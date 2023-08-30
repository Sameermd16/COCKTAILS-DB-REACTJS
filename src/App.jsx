import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktail from "./components/SingleCocktail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='/:id' element={<SingleCocktail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
