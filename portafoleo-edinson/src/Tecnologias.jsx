import React from 'react'
import Img1 from './Html.png'
import Img2 from './css.png'
import Img3 from './JS.png'
import Img4 from './react.png'
import Img5 from './photoshop.png'
import Img6 from './figma.png'



export default function Tecnologias() {
  return (
    <div className='tecnoligias'>
        <div>
            <h2>Tecnologias</h2>
            <div>
                <img src={Img1} alt="html" />
                <img src={Img2} alt="css" />
                <img src={Img3} alt="Js" />
                <img src={Img4} alt="react" />
                <img src={Img5} alt="photoshop" />
                <img src={Img6} alt="figma" />

            </div>
        </div>
    </div>
  )
}
