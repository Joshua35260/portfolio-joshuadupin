import React, { useState } from 'react'
import ContactBar from '../components/ContactBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import AnimatedText from '../components/AnimatedText'
import homeBackground from '../assets/img/pfpaper1.png'
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
      type: 'h1',
      text: 'FullStack'
    }
  ]

  const container = {
    visible: {
      transition: {
        delay: 2,
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
      y: '40vh',
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

          <motion.div
            className='intro'
            initial='hidden'
            // animate="visible"
            animate={replay ? 'visible' : 'hidden'}
            variants={container}
          >
            <div className='intro-c'>
              {placeholderText.map((item, index) => {
                return <AnimatedText {...item} key={index} />
              })}
            </div>
          </motion.div>

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

      <Footer />
    </>
  )
}

export default Home
