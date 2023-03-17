import React from 'react'

import heroImg from '../../assets/imgs/header.svg'
import './styles/_hero.scss'

const Hero = () => {
    return (
        <div className='hero'>
            <p className="hero__text">
                <span className="hero__highlight">Lorem</span> ipsum dolor sit amet, consectetur adipisicing elit. <br />
                Veritatis quibusdam ipsa in repellat magni quo vitae <br />
                repellendus iure corrupti saepe nobis maxime, doloribus cumque <br />
                exercitationem nam praesentium soluta aspernatur ut suscipit consequuntur <br />
                adipisci. Velit voluptatibus dolore illum molestiae. Voluptate, fuga!
            </p>
            <img className="hero__image" src={heroImg} alt="ilustration of person with laptop"></img>
        </div>
    )
}

export default Hero