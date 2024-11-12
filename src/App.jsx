import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <section className="app-container d-flex flex-column align-items-center">
        <Routes>
          <Route exact path="/" element={<ItemListContainer greeting="Bienvenidos a morf.ar, tu comida a un click" />} />
          <Route exact path="/category/:categoryId" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </section>
    </Router>
  );
}

export default App;
