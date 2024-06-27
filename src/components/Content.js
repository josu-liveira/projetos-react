import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import PrimeirosPassos from '../pages/PrimeirosPassos';
import Funcoes from '../pages/Funcoes';


function Content() {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/primeiros-passos" element={<PrimeirosPassos />} />
        <Route path="/funcoes" element={<Funcoes />} />
      </Routes>
    </div>
  );
}

export default Content;
