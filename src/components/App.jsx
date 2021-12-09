import React from "react";
import "../styles/App.css"
import Main from './Main'
import Search from './Search'
import { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {


  const [searchTerm, setSearchTerm] = useState("")

  const searchFilter = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
        <Main
          searchTerm={searchTerm}
          searchFilter={searchFilter}
        />} />
        <Route path="/search" element={
        <Search
          searchTerm={searchTerm}
          searchFilter={searchFilter}
        />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
