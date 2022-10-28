import React, { useState } from 'react'
import ContactBar from '../components/ContactBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import AnimatedText from '../components/AnimatedText'
import homeBackground from '../assets/img/pfpaper3.jpg'
import * as Icon from 'react-feather'

const Home = () => {
  const [replay, setReplay] = useState(true)
  // Quick and dirt for the example
  // Placeholder text data, as if from API

  const placeholderText = [
    { type: 'h2', text: 'Joshua Dupin' },
    {
      type: 'h1',
      text: 'Développeur Web'
    },
    {
      type: 'h3',
      text: 'FullStack'
    }
  ]
  const line1 = 'Joshua Dupin'
  const line2 = 'Développeur Web'
  const line3 = 'Fullstack'

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08
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
    visible: {
      transition: {
        staggerChildren: 0.02
      }
    }
  }

  const arrowVariant = {
    hidden: {
      y: '0',
      opacity: 0
    },
    visible: {
      y: '30vh',
      opacity: 1,
      transition: {
        spring: 3,
        duration: 1
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
              className='intro'
              initial='hidden'
              animate='visible'
              variants={sentence}
            >
              {placeholderText.map((item, index) => {
                return <AnimatedText {...item} key={index} />
              })}
            </motion.div>

            <motion.h3
              className='intro'
              variants={sentence}
              initial='hidden'
              animate='visible'
            >
              {line1.split('').map((char, index) => {
                return (
                  <motion.span key={char + '-' + index} variants={letter}>
                    {char}
                  </motion.span>
                )
              })}
              <br />

              {line2.split('').map((char, index) => {
                return (
                  <motion.span key={char + '-' + index} variants={letter}>
                    {char}
                  </motion.span>
                )
              })}
              <br />
              {line3.split('').map((char, index) => {
                return (
                  <motion.span key={char + '-' + index} variants={letter}>
                    {char}
                  </motion.span>
                )
              })}
            </motion.h3>

            <motion.div
              className='intro'
              animate={replay ? 'visible' : 'hidden'}
              initial='hidden'
              variants={arrowVariant}
            >
              <span>
                <Icon.ChevronsDown color='white' size='128' />
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
