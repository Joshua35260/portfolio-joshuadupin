import React from 'react'
import map from '../assets/img/pfpaper1.jpg'
const Test = () => {
  return (
    <div className='card'>
      <div className='card-header'>
        <img src={map} className='header-image' alt='site web'></img>
        <div className='card-content'>
          <div className='card-name'>
            
            <h1>Rock Your Band</h1>
          </div>
          <div className='card-description'>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor.
          </div>

          <div class='card-footer'>
            <div class='card-overview'>
              <h4>+</h4>
            </div>
          </div>
          <div class='card-footer'>
            <div class='card-overview'>
              <p>icones</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Test
