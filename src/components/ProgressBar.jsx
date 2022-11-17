import React from 'react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
const ProgressBar = props => {
  return (
    <div className={props.ClassName}>
      <h3>{props.title}</h3>
      <div className='years'>
        <span>Expérience</span>
        <span>1 an</span>
        <span>2 ans</span>
      </div>

      <div>
        {props.languages.map(item => {
          let xpYears = 2
          let progressBar = (item.xp / xpYears) * 100 + '%'
          return (
            <div key={item.id} className='languagesList'>
              <motion.li
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0 }
                }}
              >
                {item.value}
              </motion.li>
              <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0 }
                }}
                className='progressBar'
                style={{ width: progressBar }}
              ></motion.div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProgressBar
