import React, { Component } from 'react'
import ProgressBar from './ProgressBar'
class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: 'Javascript', xp: 1 },
      { id: 2, value: 'CSS', xp: 1.5 },
      { id: 3, value: 'HTML', xp: 1.5 },
      { id: 4, value: 'WordPress', xp: 0.5 }
    ],
    frameworks: [
      { id: 1, value: 'React', xp: 1 },
      { id: 2, value: 'Node', xp: 1 },
      { id: 3, value: 'Express', xp: 1 },
      { id: 4, value: 'Sass', xp: 0.6 },
      { id: 5, value: 'Material UI', xp: 0.6 },
      { id: 6, value: 'Styled components', xp: 0.3 }
    ]
  }
  render() {
    let { languages, frameworks } = this.state

    return (
      <div className='languagesFrameworks'>
        <div className='in-lf'>
          <ProgressBar
            languages={languages}
            className='languagesDisplay'
            title='languages'
          />
          <ProgressBar
            languages={frameworks}
            title='frameworks & bibliothèques'
            className='frameworksDisplay'
          />
        </div>
        <div className='otherSkills'>
          <h3>Autres compétences</h3>
          <div className='list'>
            <ul>
              <li>
                <i className='fas fa-check-square'></i>
                Anglais courant
              </li>
              <li>
                <i className='fas fa-check-square'></i>
                Git/GitHub
              </li>
              <li>
                <i className='fas fa-check-square'></i>
                MySQL
              </li>
              <li>
                <i className='fas fa-check-square'></i>
                Méthodes agiles
              </li>
            </ul>
            <ul>
              <li>
                <i className='fas fa-check-square'></i>
                SEO
              </li>
              <li>
                <i className='fas fa-check-square'></i>
                Figma
              </li>
              <li>
                <i className='fas fa-check-square'></i>
                GSAP
              </li>
              <li>
                <i className='fas fa-check-square'></i>
                Design
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Languages
