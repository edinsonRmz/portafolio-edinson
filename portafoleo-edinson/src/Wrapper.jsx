import React from 'react';

export default function App() {
  const emailAddress = 'edinsonramirez0627@gmail.com'; // Tu dirección de correo electrónico

  const sendEmail = () => {
    // Abre el cliente de correo del usuario con tu dirección de correo electrónico predefinida
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <div>
      <h1>Mi Aplicación</h1>
      <p>contactame a mi correo electronico en el boton de abajo, asepto toda clase de recomendaciones </p>
      <button onClick={sendEmail}>Enviar Correo</button>
    </div>
  );
}
