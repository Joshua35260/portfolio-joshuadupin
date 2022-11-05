import { useAnimation, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import ProgressBar from './ProgressBar'

const testData = [
  { bgColor: 'green', completed: 70, content: 'React' },
  { bgColor: 'green', completed: 40, content: 'Javascript' },
  { bgColor: 'green', completed: 50, content: 'Node.JS' },
  { bgColor: 'green', completed: 50, content: 'Express' }
]

const Languages = () => {
  const [completed, setCompleted] = useState(0)

  useEffect(() => {
    setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000)
  }, [])
  return (
    <div className='languagesFrameworks'>
      {testData.map((item, idx) => (
        <ProgressBar
          key={idx}
          bgColor={item.bgColor}
          completed={item.completed}
          content={item.content}
          className='progressBar-animation'
        />
      ))}

      <div className='otherSkills'>
        <h3>Autres compétences</h3>
        <div className='list'>
          <ul>
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
            <li>
              <i className='fas fa-check-square'></i>
              SEO
            </li>
          </ul>
          <ul>
            <li>
              <i className='fas fa-check-square'></i>
              Figma
            </li>
            <li>
              <i className='fas fa-check-square'></i>
              Framer Motion
            </li>
            <li>
              <i className='fas fa-check-square'></i>
              Material UI
            </li>
            <li>
              <i className='fas fa-check-square'></i>
              Styled components
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Languages
