import React, { Component } from 'react'
import ProgressBar from './ProgressBar'
class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: 'Javascript', xp: 1.2 },
      { id: 2, value: 'CSS', xp: 1.5 },
      { id: 3, value: 'HTML', xp: 1.5 },
      { id: 4, value: 'React', xp: 1 },
      { id: 5, value: 'Node.js', xp: 0.8 },
      { id: 6, value: 'Express', xp: 0.8 }
    ],
    frameworks: [
      { id: 1, value: 'React', xp: 1 },
      { id: 2, value: 'Node.js', xp: 0.8 },
      { id: 3, value: 'Express', xp: 0.8 }
    ]
  }
  render() {
    let { languages } = this.state

    return (
      <div className='languagesFrameworks'>
        <ProgressBar
          languages={languages}
          className='languagesDisplay'
          title='Languages, frameworks & bibliothèques'
        />
        {/* <ProgressBar
          languages={frameworks}
          title='frameworks & bibliothèques'
          className='frameworksDisplay'
        /> */}
      </div>
    )
  }
}

export default Languages
