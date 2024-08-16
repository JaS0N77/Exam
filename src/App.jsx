import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import CarDetails from './Cars/CarDetails';
import AddCar from './Editing/AddCar';
import EditCar from './Editing/EditCar';
import Header from './Navigation/Header';
import Footer from './Navigation/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car/:id" element={<CarDetails />} />
        <Route path="/add-car" element={<AddCar />} />
        <Route path="/edit-car/:id" element={<EditCar />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
