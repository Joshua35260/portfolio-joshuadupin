import React from 'react'
import ContactBar from '../components/ContactBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion, useScroll, useSpring } from 'framer-motion'
import homeBackground from '../assets/img/pfpaper11.webp'
import * as Icon from 'react-feather'
import Skills from '../components/Skills'
import ProjectList from '../components/ProjectList'
import Contact from '../components/Contact'

const Home = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const line1 = 'Joshua DUPIN'
  const line2 = 'DÉVELOPPEUR WEB'

  const arrowVariant = {
    hidden: {
      y: '60px',
      opacity: 0,
      rotate: 0
    },
    visible: {
      y: '0',
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: 5,
        type: 'ease',
        repeatType: 'reverse',
        repeat: 'Infinity'
      }
    }
  }
  const arrowContainer = {
    hidden: {
      y: '60vh',
      opacity: 1,
      rotate: 180
    },
    visible: {
      y: '0',
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 3,
        delay: 0,
        type: 'ease'
      }
    }
  }
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
      <div className='home'>
        <div className='home-background'>
          <img src={homeBackground} alt='' className='home-bg'></img>
        </div>
        <ContactBar />
        <Navbar />
        <div className='intro-c'>
          <motion.div
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
          </motion.div>

          <motion.div
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
          </motion.div>

          <div className='intro-3'>FULLSTACK</div>
          <motion.div
            className='intro-4'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            animate={{ rotate: 180 }}
            transition={{ duration: 1.5, delay: 3.5, type: 'ease' }}
            variants={{
              visible: { opacity: 1, y: 600 },
              hidden: { opacity: 0, y: 150 }
            }}
          >
            <motion.span
              className='arrow'
              transition={{
                duration: 1,
                delay: 3.5,
                repeat: 'Infinity',
                repeatType: 'reverse'
              }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 1, y: 40 }
              }}
            >
              <Icon.ChevronsUp color='white' size='64' />
            </motion.span>
          </motion.div>
        </div>
      </div>
      <Skills />
      <ProjectList />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
