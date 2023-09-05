import React, { useState } from 'react';
import './proyectos.css'; // Asegúrate de importar tu archivo CSS correctamente
import Img1 from './img1.png'; // Ruta relativa a la imagen img1.png

export default function Proyectos() {
    return (
      <div className="gallery">
        <div className="row">
          <div className="top-image">
            <img src={Img1} alt="Imagen 3" />
          </div>
        </div>
        <div className="row">
          <div className="item">
            <img src={Img1} alt="Imagen 1" />
          </div>
          <div className="item">
            <img src={Img1} alt="Imagen 2" />
          </div>
        </div>
      </div>
    );
  }