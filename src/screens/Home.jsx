import React from 'react'
import ContactBar from '../components/ContactBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import homeBackground from '../assets/img/pfpaper11.jpg'
import * as Icon from 'react-feather'

const Home = () => {
  const line1 = 'Joshua DUPIN'
  const line2 = 'DÉVELOPPEUR WEB'
  const line3 = 'FULLSTACK'

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.15
      }
    }
  }

  const letter = {
    hidden: { opacity: 0, y: 50 },
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
        delay: 0.5
        // staggerChildren: 0.08
      }
    }
  }
  const fullstack = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 3
        // staggerChildren: 0.08
      }
    }
  }
  const arrowVariant = {
    hidden: {
      y: '-5vh',
      opacity: 0
    },
    visible: {
      y: '16vh',
      opacity: 1,
      transition: {
        duration: 1,
        delay: 3.5
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
              variants={sentence}
              initial='hidden'
              animate='visible'
            >
              {line3.split('').map((char, index) => {
                return (
                  <motion.span key={char + '-' + index} variants={fullstack}>
                    {char}
                  </motion.span>
                )
              })}
            </motion.div>
            <motion.div
              className='intro-4'
              animate='visible'
              initial='hidden'
              variants={arrowVariant}
            >
              <span>
                <Icon.ChevronsDown color='white' size='64' />
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Home
