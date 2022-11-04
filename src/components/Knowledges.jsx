import React from 'react'
import Languages from './knowledges/Languages'
import OtherSkills from './knowledges/OtherSkills'

const Knowledges = () => {
  return (
    <div className='knowledges'>
      <div className='knowledgesContent'>
        <Languages />
        <OtherSkills />
      </div>
    </div>
  )
}

export default Knowledges
