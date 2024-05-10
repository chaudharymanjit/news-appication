import React from 'react'
import Table from "./components/Table"
import AddNews from "./components/AddNews"
import NotFound from "./components/NotFound"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/add-news" element={<AddNews />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

const App = () => {
  return <AppRoutes />
}

export default App