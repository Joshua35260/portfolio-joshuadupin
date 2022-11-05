import ScrollAnimation from 'react-animate-on-scroll'

const ProgressBar = props => {
  return (
    <div className={props.ClassName}>
      <ScrollAnimation animateIn='fadeInDownBig'>
        <h3>{props.title}</h3>
      </ScrollAnimation>
      <div className='years'>
        <span>Années d'expérience</span>
        <span>1 an</span>
        <span>2 ans</span>
      </div>
      <div>
        {props.languages.map(item => {
          let xpYears = 2
          let progressBar = (item.xp / xpYears) * 100 + '%'
          return (
            <ScrollAnimation animateIn='fadeInDownBig'>
              <div key={item.id} className='languagesList'>
                <li>{item.value} </li>
                <div
                  className='progressBar'
                  style={{ width: progressBar }}
                ></div>
              </div>
            </ScrollAnimation>
          )
        })}
      </div>
    </div>
  )
}

export default ProgressBar
