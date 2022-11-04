import React, { useEffect } from 'react'
import ContactBar from '../components/ContactBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion, useAnimation } from 'framer-motion'
import homeBackground from '../assets/img/pfpaper11.jpg'
import * as Icon from 'react-feather'
import Competences from '../components/Knowledges'

const Home = () => {
  const line1 = 'Joshua DUPIN'
  const line2 = 'DÉVELOPPEUR WEB'
  const line3 = 'FULLSTACK'

  const arrowVariant = {
    hidden: {
      y: '30vh',
      opacity: 0,
      rotate: 0
    },
    visible: {
      y: '24vh',
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: 2.5,
        type: 'ease',
        repeatType: 'reverse',
        repeat: 'Infinity'
      }
    }
  }
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const letter = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: 0
    }
  }

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.5
      }
    }
  }

  return (
    <>
      <div className='home'>
        <div className='home-background'>
          <img src={homeBackground} alt='' className='home-bg'></img>
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

            <motion.div
              className='intro-3'
              animate='visible'
              initial='hidden'
              variants={arrowVariant}
            >
              <span className='arrow'>
                <Icon.ChevronsDown color='white' size='64' />
              </span>
            </motion.div>

            <div className='intro-4'>FULLSTACK</div>
          </div>
        </div>
      </div>
      <Competences />
      <Footer />
    </>
  )
}

export default Home
