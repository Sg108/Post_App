import {useState} from 'react'
import {motion} from 'framer-motion'
import Heading from './Heading'
import Register from './Register'
//import Login from './Login'
function Layout(props) {
    const [reg,setReg] = useState(true)
   
  return (
    <div className='w-screen h-screen bg-blue-200 relative overflow-hidden'>
       <Heading/>
       <Register setAuthenticated={props.setAuthenticated}/>
       {/* {!reg && <Login/>} */}
      {/* <div className='  mx-auto w-fit mt-2'>
       <motion.button onClick={()=>{setReg(!reg)}} whileTap={{ scale: 0.8 }} className=' text-slate-600 text-[12px] '>
       <p className='underline underline-offset-1'>already registered,</p>
        <p className='underline underline-offset-1'>click here to login</p>
       
       </motion.button>
       </div>  */}
     <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}
     className="overflow-hidden rounded-full md:h-[40rem] md:w-[40rem]
      h-96 w-96 bg-blue-500 absolute  md:-right-50 md:-bottom-60  -right-60 -bottom-40">
     </motion.div>
     <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}
     className="overflow-hidden rounded-full md:h-[40rem] md:w-[40rem] 
     h-96 w-96 bg-blue-500 absolute  md:-left-50 md:-top-60 -left-60 -top-40  ">
    </motion.div> 
    </div>
  )
}

export default Layout