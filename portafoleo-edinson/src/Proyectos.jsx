import React, { useState } from 'react';
import './proyectos.css'; 
import Img1 from './img1.png'; 

export default function Proyectos() {
    return (
      <div className="gallery">
        <h1>proyectos</h1>
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