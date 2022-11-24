import Github from '../assets/img/github.png'
import LinkedIn from '../assets/img/linkedin.png'
import Instagram from '../assets/img/instagram.png'
import me from '../assets/img/me.png'
import Experience from './Experience'
import { motion } from 'framer-motion'
import CV from '../assets/CV.pdf'
const About = () => {
  return (
    <section className='about'>
         <motion.h1
          className='skills-h1'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0, type: 'spring' }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0,  }
          }}
        >À PROPOS</motion.h1>
      <div className='about-in'>
        {/* left name side */}
        <div className='about-left'>
          <div className='about-name'>
            <h2>DÉVELOPPEUR WEB</h2>
            <h3>Joshua DUPIN</h3>
            <p>Hello world !</p>
            <p>
              Développeur fullstack actuellement en stage, je recherche
              activement un poste ou une alternance d'un an au rythme de 2
              semaines en entreprise / 1 semaine en centre à partir de Mars
              2023.
            </p>
            <p>
              Polyvalent, déterminé et autodidacte, je suis une personne
              curieuse et passionnée. J'apprécie beaucoup le travail avec
              bienveillance, sérieux mais aussi avec humour !
            </p>
            <a href={CV} download>
              <button className='button s-button' onClick={CV}>
                Télécharger CV
              </button>
            </a>
            <div className="xp">
            <Experience />
            </div>
          </div>     
        </div>
  
        {/* right image side */}
        <div className='about-right'>

          <motion.img
            initial='hidden'
            animate='visible'
            viewport={{ once: false }}
            whileInView='visible'
            transition={{ duration: 2, delay: 0, type: 'ease' }}
            variants={{
              visible: { opacity: 1},
              hidden: { opacity: 0,}
            }}
            src={me}
            alt=''
            className='me'
          />
        </div>
      </div>
    </section>
  )
}

export default About
