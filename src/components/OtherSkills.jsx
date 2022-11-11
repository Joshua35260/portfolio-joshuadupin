import React from 'react'
import * as Icon from 'react-feather'
import ScrollAnimation from 'react-animate-on-scroll'
const OtherSkills = () => {
  return (
    <div className='otherSkills'>
      <h3>Autres compétences</h3>
      <div className='list'>
        <ul>
          <ScrollAnimation animateIn='fadeInDownBig'>
            <li>
              <i>
                <Icon.CheckSquare color='green' size='24' />
              </i>
              Git/GitHub
            </li>
          </ScrollAnimation>
          <ScrollAnimation animateIn='fadeInDownBig'>
            <li>
              <i>
                <Icon.CheckSquare color='green' size='24' />
              </i>
              MySQL
            </li>
          </ScrollAnimation>
          <ScrollAnimation animateIn='fadeInDownBig'>
            <li>
              <i>
                <Icon.CheckSquare color='green' size='24' />
              </i>
              Méthodes agiles
            </li>
          </ScrollAnimation>
          <ScrollAnimation animateIn='fadeInDownBig'>
            <li>
              <i>
                <Icon.CheckSquare color='green' size='24' />
              </i>
              SEO
            </li>
          </ScrollAnimation>
          <ScrollAnimation animateIn='fadeInDownBig'>
            <li>
              <i>
                <Icon.CheckSquare color='green' size='24' />
              </i>
              Figma
            </li>
          </ScrollAnimation>
          <ScrollAnimation animateIn='fadeInDownBig'>
            <li>
              <i>
                <Icon.CheckSquare color='green' size='24' />
              </i>
              Sass
            </li>
          </ScrollAnimation>
          <ScrollAnimation animateIn='fadeInDownBig'>
            <li>
              <i>
                <Icon.CheckSquare color='green' size='24' />
              </i>
              Framer Motion
            </li>
          </ScrollAnimation>
          <ScrollAnimation animateIn='fadeInDownBig'>
            <li>
              <i>
                <Icon.CheckSquare color='green' size='24' />
              </i>
              Styled components
            </li>
          </ScrollAnimation>
          <ScrollAnimation animateIn='fadeInDownBig'>
            <li>
              <i>
                <Icon.CheckSquare color='green' size='24' />
              </i>
              Material UI
            </li>
          </ScrollAnimation>
        </ul>
      </div>
    </div>
  )
}

export default OtherSkills
