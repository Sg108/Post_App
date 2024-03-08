import React from 'react'
import {motion} from 'framer-motion'
function Postmodal(props) {
    const{image,owner,text}=props.card
  return (
   
  <motion.div  onClick={()=>{props.setCard(null)}} initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}  exit={{ opacity: 0 }} className="z-600 fixed h-screen w-full flex items-center justify-center bg-gray-600 bg-opacity-50">
    <div  className="p-6 bg-white mx-auto rounded-xl shadow-xl ">
      <div className="flex gap-2 items-center mb-4">
      <img className=" md:h-12 md:w-12 h-10 w-10 mx-0  rounded-full" src={owner.picture} alt="img"/>
      <p className=" md:text-lg text-sm text-black font-semibold ">
        {owner.firstName} {owner.lastName}
      </p>
      </div>
      <div className='h-60 overflow-hidden rounded-xl'>
       <img className="h-full w-full mx-auto sm:mx-0  rounded-xl object-cover" src={image} alt="img"/>
       </div>
       <div className="h-12 text-center flex items-center sm:text-left mt-2">
       
      <p className=" text-md text-slate font-thin ">
      {text}
      </p>
     
      {/* <button className=" border-2 rounded-xl p-2 border-indigo-500">
         Message
      </button> */}
     
       </div>
  </div>
  </motion.div>

  )
}

export default Postmodal