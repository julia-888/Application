import React from 'react';
import './styles/App.css';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Catalog from './pages/Catalog';
import Editor from './pages/Editor';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Catalog/>}/>
      <Route path='/editor' element={<Editor/>}/>
    </Routes>
  );
}

export default App;
