import React, { Component } from 'react'
import ProgressBar from './ProgressBar'
class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: 'HTML', xp: 1.5 },
      { id: 2, value: 'CSS', xp: 1.5 },
      { id: 3, value: 'Javascript', xp: 1.2 },
      { id: 4, value: 'ReactJS', xp: 1 },
      { id: 5, value: 'ExpressJS', xp: 0.8 }
    ]
    
  }
  render() {
    let { languages } = this.state

    return (
      <article className='languagesFrameworks'>
        <ProgressBar
          languages={languages}
          className='languagesDisplay'
          title='Languages, frameworks & bibliothèques'
        />
      </article>
    )
  }
}

export default Languages
