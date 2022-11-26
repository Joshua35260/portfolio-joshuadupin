import React from 'react'
import { motion } from 'framer-motion'
import { CheckSquare } from 'react-feather';

const OtherSkills = () => {
  return (
    <motion.article
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
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
              <CheckSquare color='green' size='24' />
            </i>
            Git/GitHub
          </li>

          <li>
            <i>
              <CheckSquare color='green' size='24' />
            </i>
            MySQL
          </li>

          <li>
            <i>
              <CheckSquare color='green' size='24' />
            </i>
            WordPress
          </li>

          <li>
            <i>
              <CheckSquare color='green' size='24' />
            </i>
            Méthodes agiles
          </li>

          <li>
            <i>
              <CheckSquare color='green' size='24' />
            </i>
            SEO
          </li>

          <li>
            <i>
              <CheckSquare color='green' size='24' />
            </i>
            Figma
          </li>

          <li>
            <i>
              <CheckSquare color='green' size='24' />
            </i>
            Sass
          </li>

          <li>
            <i>
              <CheckSquare color='green' size='24' />
            </i>
            Framer Motion
          </li>

          <li>
            <i>
              <CheckSquare color='green' size='24' />
            </i>
            Styled components
          </li>

          <li>
            <i>
              <CheckSquare color='green' size='24' />
            </i>
            Material UI
          </li>
        </ul>
      </div>
    </motion.article>
  )
}

export default OtherSkills
