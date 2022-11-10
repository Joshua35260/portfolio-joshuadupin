import React from 'react'
import * as Icon from 'react-feather'

const OtherSkills = () => {
  return (
    <div className='otherSkills'>
      <h3>Autres compétences</h3>
      <div className='list'>
        <ul>
          <li>
            <i><Icon.CheckSquare color='green' size='24' /></i>
            Git/GitHub
          </li>
          <li>
            <i><Icon.CheckSquare color='green' size='24' /></i>
            MySQL
          </li>
          <li>
            <i><Icon.CheckSquare color='green' size='24' /></i>
            Méthodes agiles
          </li>
          <li>
            <i><Icon.CheckSquare color='green' size='24' /></i>
            SEO
          </li>
          <li>
            <i><Icon.CheckSquare color='green' size='24' /></i>
            Figma
          </li>
          <li>
            <i><Icon.CheckSquare color='green' size='24' /></i>
            Sass
          </li>
          <li>
            <i><Icon.CheckSquare color='green' size='24' /></i>
            Framer Motion
          </li>
          <li>
            <i><Icon.CheckSquare color='green' size='24' /></i>
            Styled components
          </li>
          <li>
            <i><Icon.CheckSquare color='green' size='24' /></i>
            Material UI
          </li>
        </ul>
      </div>
    </div>
  )
}

export default OtherSkills
