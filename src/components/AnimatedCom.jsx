import React from 'react'

import { motion } from "framer-motion";


const AnimatedCom = ({children}) => {
  return (
    <motion.div
    initial={{y: "100%", scale: 0}}
    animate={{y: "0", scale: 1, transition: {duration: 0.7}}}
    exit={{y: "100%", scale: 0, transition: {duration: 0.7}}}
    style={{overflow: "hidden"}}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedCom