import React from 'react'
import { motion } from "framer-motion"
function Heading(props) {
  //console.log(props.text)
  return (
    <div   className="flex font-mono w-fit relative md:text-5xl text-3xl text-black z-20 mx-auto pt-5 pb-5">
       { props.text.split('').map((x,i)=>{
        if(x===' ')
        return <div key={i}>&nbsp;</div>
        else
         return <motion.div key={i} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>{x}</motion.div>
        })
      }
    </div>
  )
}

export default Heading