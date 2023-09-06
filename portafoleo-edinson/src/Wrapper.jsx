import React from 'react';

export default function App() {
  const emailAddress = 'edinsonramirez0627@gmail.com'; // Tu dirección de correo electrónico

  const sendEmail = () => {
    // Abre el cliente de correo del usuario con tu dirección de correo electrónico predefinida
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <div className='conten' style={{backgroundColor:"#3d5a80", padding:"0px", margin:"0px",}}>
      <h1 className='text' style={{textAlign:'center', padding:'20px'}}>Mi Aplicación</h1>
      <p className='tex' style={{textAlign:'justify'}}>contactame a mi correo electronico en el boton de abajo, asepto toda clase de recomendaciones </p>
      <button onClick={sendEmail} className='button'  style={{ backgroundColor:"black", color:"white"}}>Enviar Correo</button>
    </div>
  );
}
