import React, { useState } from 'react'
import ContactBar from '../components/ContactBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import AnimatedText from '../components/AnimatedText'
import homeBackground from '../assets/img/pfpaper1.jpg'

const Home = () => {
  const [replay, setReplay] = useState(true)
  // Quick and dirt for the example
  // Placeholder text data, as if from API

  const placeholderText = [
    { type: 'heading2', text: 'Joshua Dupin' },
    {
      type: 'heading1',
      text: 'Développeur Web'
    },
    {
      type: 'heading1',
      text: 'FullStack'
    }
  ]

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.03
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
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Home
