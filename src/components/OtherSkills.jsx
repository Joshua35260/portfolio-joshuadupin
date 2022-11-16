import React from 'react'
import { motion } from 'framer-motion'
import * as Icon from 'react-feather'

const OtherSkills = () => {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: false }}
      transition={{ duration: 1.5, delay: 0 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 }
      }}
      className='otherSkills'
    >
      <h2>Autres compétences</h2>
      <div className='list'>
        <ul>
          <li>
            <i>
              <Icon.CheckSquare color='green' size='24' />
            </i>
            Git/GitHub
          </li>

          <li>
            <i>
              <Icon.CheckSquare color='green' size='24' />
            </i>
            MySQL
          </li>

          <li>
            <i>
              <Icon.CheckSquare color='green' size='24' />
            </i>
            WordPress
          </li>

          <li>
            <i>
              <Icon.CheckSquare color='green' size='24' />
            </i>
            Méthodes agiles
          </li>

          <li>
            <i>
              <Icon.CheckSquare color='green' size='24' />
            </i>
            SEO
          </li>

          <li>
            <i>
              <Icon.CheckSquare color='green' size='24' />
            </i>
            Figma
          </li>

          <li>
            <i>
              <Icon.CheckSquare color='green' size='24' />
            </i>
            Sass
          </li>

          <li>
            <i>
              <Icon.CheckSquare color='green' size='24' />
            </i>
            Framer Motion
          </li>

          <li>
            <i>
              <Icon.CheckSquare color='green' size='24' />
            </i>
            Styled components
          </li>

          <li>
            <i>
              <Icon.CheckSquare color='green' size='24' />
            </i>
            Material UI
          </li>
        </ul>
      </div>
    </motion.div>
  )
}

export default OtherSkills
