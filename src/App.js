import React from 'react';
import './App.css';
import Main from './Components/Main/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FilteredProducts from './Components/FilteredProducts/FilteredProducts';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main></Main>}></Route>
      <Route path='/FilteredProducts/:type' element={<FilteredProducts></FilteredProducts>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;