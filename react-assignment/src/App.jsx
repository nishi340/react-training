import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-calendar/dist/Calendar.css";
import Home from "./Home";
import Create from "./Create";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Update from "./Update";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/edit/:id" element={<Update />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
