import React from 'react'
import { motion } from "framer-motion"
function Heading(props) {
  console.log(props.text)
  return (
    <div   className="flex font-mono w-fit relative md:text-5xl text-3xl text-black z-20 mx-auto p-5">
       { props.text.split('').map((x)=>{
        if(x===' ')
        return <div>&nbsp;</div>
        else
         return <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>{x}</motion.div>
        })
      }
       
        {/* <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>E</motion.div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>L</motion.div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>C</motion.div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>O</motion.div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>M</motion.div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>E&nbsp;</motion.div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>T</motion.div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>O&nbsp;</motion.div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>P</motion.div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>O</motion.div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>S</motion.div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>T&nbsp;</motion.div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>A</motion.div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>P</motion.div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>P</motion.div> */}
    </div>
  )
}

export default Heading