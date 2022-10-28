import React, { useState } from 'react'
import ContactBar from '../components/ContactBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import AnimatedText from '../components/AnimatedText'

const Home = () => {
  const [replay, setReplay] = useState(true)
  // Quick and dirt for the example
  // Placeholder text data, as if from API

  const placeholderText = [
    { type: 'heading2', text: 'Joshua Dupin', size: '40px' },
    {
      type: 'heading1',
      text: 'Développeur Web FullStack'
    }
  ]

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025
      }
    }
  }

  return (
    <>
      <div className='home'>
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
      <Footer />
    </>
  )
}

export default Home
