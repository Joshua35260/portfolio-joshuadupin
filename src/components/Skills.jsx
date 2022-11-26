import Languages from './Languages'
import OtherSkills from './OtherSkills'
import { motion } from 'framer-motion'
import ImgNextGen from './ImgNextGen'
const Skills = () => {
  return (
    <>
      <section className='skills'>
      <div className="skills-imgc">
          <ImgNextGen
            srcWebp={require('../assets/img/webp/map.webp')}
            fallback={require('../assets/img/png/map.png')}
            alt='map monde'
            className='map'>
            </ImgNextGen>
            </div>
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
      </section>
    </>
  )
}

export default Skills
