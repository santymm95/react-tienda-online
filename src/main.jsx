import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import Header from './componentes/Header.jsx';
import Carrusel from './componentes/carrusel/Carrusel.jsx';
import Footer from './componentes/Footer.jsx';
import Testimonios from './componentes/Testimonios.jsx';
import MasVendidos from './componentes/MasVendidos.jsx';
import './componentes/Ubicacion.jsx'
import './index.css';
import Ubicacion from './componentes/Ubicacion.jsx';
 

const root = document.getElementById('root');
const rootContainer = createRoot(root);

rootContainer.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="contenedor-principal">
        <Header />
        <Carrusel />
        <MasVendidos/>
        <App />
       <Testimonios />
       <Ubicacion/>
        <Footer />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
