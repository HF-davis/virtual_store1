import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';

import Home from './pages/Home';
//import PiqueoSnack from './pages/PickeoSnack/PiqueoSnack';
import BAlcoholicas from './pages/BAlcoholicas/BAlcoholicas';
import BNoAlcoholicas from './pages/BNoAlcoholicas/BNoAlcoholicas';
import Cigarros from './pages/Cigarros/Cigarros';
import CuidadoPersonal from './pages/CuidadoPersonal/CuidadoPersonal';
import PiqueoSnack from './pages/PickeoSnack/PiqueoSnack';
import Confiteria from './pages/Confiteria/Confiteria';
import Preservativo from './pages/Preservativos/Preservativo';
function App() {
  return (
    <div>
      <Navbar/>

      <BrowserRouter>
               
                    <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="BebidasAlcoholicas" element={<BAlcoholicas />} />
                    <Route path="BebidasNoAlcoholicas" element={<BNoAlcoholicas/>} />
                    <Route path="Cigarros" element={<Cigarros />} />
                    <Route path="CuidadoPersonal" element={<CuidadoPersonal />} />
                    <Route path="PiqueoySancks" element={<PiqueoSnack />} />
                    <Route path="Preservativos" element={<Preservativo />} />
                    <Route path="Confiteria" element={<Confiteria />} />
                    
                    </Routes>
                </BrowserRouter>
     
      
    </div>
  );
}

export default App;
