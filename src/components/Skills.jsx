import Languages from './Languages'
import OtherSkills from './OtherSkills'
import map from '../assets/img/map.webp'
import '../assets/scss/base/responsive.scss'
import { motion } from 'framer-motion'
const Skills = () => {
  return (
    <>
      <div className='skills'>
        <img src={map} alt='map monde' className='map'></img>
        <motion.h1
          className='skills-h1'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0, type: 'spring' }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 }
          }}
        >
          MES COMPÉTENCES
        </motion.h1>
        <div className='skills-in'>
          <Languages />
          <OtherSkills />
        </div>
      </div>
    </>
  )
}

export default Skills
