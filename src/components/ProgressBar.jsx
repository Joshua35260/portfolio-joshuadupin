import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
const ProgressBar = props => {
  return (
    <div className={props.ClassName}>
      <h3>{props.title}</h3>
      <div className='years'>
        <span>Expérience</span>
        <span>1 an</span>
        <span>2 ans</span>
      </div>

      <div>
        {props.languages.map(item => {
          let xpYears = 2
          let progressBar = (item.xp / xpYears) * 100 + '%'
          return (
            <div key={item.id} className='languagesList'>
              <ScrollAnimation animateIn='fadeInDownBig'>
              <li>{item.value} </li>
              <div className='progressBar' style={{ width: progressBar }}></div>
              </ScrollAnimation>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProgressBar
