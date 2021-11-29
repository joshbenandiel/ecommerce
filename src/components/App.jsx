import React from "react";
import "../styles/App.css"
import Main from './Main'
import Search from './Search'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/search" element={<Search/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
