import * as Icon from 'react-feather'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Link } from 'react-scroll'
import ContactBar from '../components/ContactBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import homeBackground from '../assets/img/pfpaper11.webp'
import Skills from '../components/Skills'
import ProjectList from '../components/ProjectList'
import Contact from '../components/Contact'
import MobileNav from '../components/MobileNav'
import About from '../components/About'


const Home = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const line1 = 'Joshua DUPIN'
  const line2 = 'DÉVELOPPEUR WEB'

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      type: 'spring'
    }
  }

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1
      }
    }
  }

  return (
    <>
      <motion.div className='big-bar' style={{ scaleX }}></motion.div>

      <section className='home'>
        <div className='home-background'>
          <img src={homeBackground} alt='' className='home-bg'></img>
        </div>
        <ContactBar />
        <Navbar />
        <article className='intro-c'>
          <motion.h1
            className='intro-1'
            initial='hidden'
            animate='visible'
            variants={container}
          >
            {line1.split('').map((char, index) => {
              return (
                <motion.span key={char + '-' + index} variants={letter}>
                  {char}
                </motion.span>
              )
            })}
          </motion.h1>

          <motion.h2
            className='intro-2'
            variants={sentence}
            initial='hidden'
            animate='visible'
          >
            {line2.split('').map((char, index) => {
              return (
                <motion.span key={char + '-' + index} variants={letter}>
                  {char}
                </motion.span>
              )
            })}
          </motion.h2>

          <h4 className='intro-3'>FULLSTACK</h4>
          <motion.div
            className='intro-4'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            animate={{ rotate: 180 }}
            transition={{ duration: 2, delay: 0, type: 'spring' }}
            variants={{
              visible: { opacity: 1, y: 600 },
              hidden: { opacity: 0, y: 0 }
            }}
          >
            <motion.span
              className='arrow'
              transition={{
                duration: 1,
                delay: 3,
                repeat: 'Infinity',
                repeatType: 'reverse'
              }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 1, y: 40 }
              }}
            >
              <Link to='skills' spy={true} smooth={true}>
                <Icon.ChevronsUp color='white' size='64' />
              </Link>
            </motion.span>
          </motion.div>
        </article>
      </section>
      <Skills />
      <ProjectList />
      <About />
      <Contact />
      <Footer />
      <MobileNav />
    </>
  )
}

export default Home
