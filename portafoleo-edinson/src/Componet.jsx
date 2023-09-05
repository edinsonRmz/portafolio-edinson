import React from 'react';
import Avatar from './avatar.png'; 
import Text from './Text.css'



export default function TuComponente() {
  return (
    <div>
      <div className='hero'>
        <div className='conten'>
          <div className='center-vertically'>
          <img src={Avatar} className='Avatar center-vertically' alt="Avatar" />
          </div>
          <h2 className='edinson-ramirez-a'>Edinson Ramirez A</h2>
          <div className='buttons'>
            <button className='button'><p className='ver-proyectos'>Ver proyectos</p></button>
            <button className='button'><p className='contacto'>Contacto</p></button>
          </div>
        </div>
      </div>
    </div>
  );

}
