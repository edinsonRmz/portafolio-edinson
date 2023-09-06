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
                <img className='' src={Img1} alt="" />
                <img src={Img2} alt="" />
                <img src={Img3} alt="" />
                <img src={Img4} alt="" />
                <img src={Img5} alt="" />
                <img src={Img6} alt="" />

            </div>
        </div>
    </div>
  )
}
