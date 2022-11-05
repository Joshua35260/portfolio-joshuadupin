import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import ProgressBar from './ProgressBar'
import Languages from './Languages'
import OtherSkills from './OtherSkills'

const Skills = () => {
  return (
    <div className='skills'>
      <Languages />
      <OtherSkills />
    </div>
  )
}

export default Skills
