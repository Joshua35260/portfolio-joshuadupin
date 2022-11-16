import { useInView } from 'react-intersection-observer'
import Languages from './Languages'
import OtherSkills from './OtherSkills'
import map from '../assets/img/map.png'
import '../assets/scss/base/responsive.scss'

const Skills = () => {
  return (
    <>
      <div className='skills'>
        <img src={map} alt='map monde' className='map'></img>
        <h1 className='skills-h1'>MES COMPÉTENCES</h1>
        <div className='skills-in'>
          <Languages />
          <OtherSkills />
        </div>
      </div>
      
    </>
  )
}

export default Skills
