import {useState,useEffect,useRef,useCallback} from 'react'
import PostCard from './PostCard.jsx'
import Heading from '../Auth/Heading'
import {motion} from 'framer-motion'
import Postmodal from './Postmodal.jsx'
import {AnimatePresence} from 'framer-motion'
//const arr = [1,1,1,1,1,1,1,1];

function Posts(props) {
  const [books,setBooks]=useState([]);
  const [isLoading,setLoading]=useState(true)
  const [isError,setError]=useState()
  const [more,setMore]=useState(true)
  const [page,setPage]=useState(0)
  const [card,setCard]=useState(null)
  const nodeRef=useRef()
  const pageRef=useRef(-1)
  const lastRef=useCallback((node)=>{
     if(isLoading)return

     if(nodeRef.current){
      nodeRef.current.disconnect()
     }
     nodeRef.current = new IntersectionObserver((entry)=>{
      if(entry[0].isIntersecting && more)
      {
        setPage((p)=>p+1)
       // pageRef.current=pageRef.current+1
      }
     })
     if(node){
      nodeRef.current.observe(node)
     }
  },[isLoading,more])

  useEffect(()=>{
    console.log(pageRef.current,page)
    if(pageRef.current<page){
    setLoading(true);
    fetch(`https://post-api-lime.vercel.app/posts?page=${page}`,{ //backend url localhost --  http://localhost:3002/post?page=${page}&limit=20 
    method:'GET',
    credentials:'include',
    // headers:{
    //   'app-id':'65e5a4030742028b2d8de16d'
    // }
    headers: {
      Authorization: `Bearer ${props.accessToken}`,    
      //'app-id':'65e5a4030742028b2d8de16d', 
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true,
      'Access-Control-Allow-Origin':'*'
      
    
    },
   
  })
    .then((res)=>res.json())
    .then((res)=>{
      pageRef.current = page
      console.log(res)
      setBooks((prev)=>[...prev,...res])
      setLoading(false)
      if(res.length===0)
      {setMore(false)}
    }).catch((e)=>{
      console.log("k")
      setError(e.message)
      if(e.message==='token not valid')
      props.setAuthenticated('');
      console.log(e)
    })
  }
  },[page])
  
  return (
    <div className='bg-blue-200 h-full overflow-hidden'>
   {props.emailMsg  && (
        <div className="flex items-center justify-center z-400 absolute w-full h-full bg-gray-500 bg-opacity-50">
        <div className=" w-fit rounded-xl shadow-xl p-5 bg-orange-500 text-center absolute text-white bg-opacity-75">
           <button onClick={()=>{props.setEmailMsg(false)}}className="absolute top-2 right-4 text-bold text-black text-lg">x</button>
           <p>Email has been sent </p>
           <p> to your account for verification</p>
          </div>
          </div>
      )}
      <AnimatePresence>
    {card!==null && <Postmodal card={card} setCard={setCard}/>}
    </AnimatePresence>
    {isError!==undefined && <div>{isError}</div>}
    {/* <button className="h-12 w-12" onClick={()=>{props.setAuthenticated('')}}> */}
    <motion.button  whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className="z-20 h-10 w-10 absolute top-2 left-10" onClick={()=>{props.setAuthenticated('')}}>
    <img className="h-full w-full" src="https://static-00.iconduck.com/assets.00/logout-1-icon-512x512-3o2onwj9.png"/>
    </motion.button>
    <Heading text="POSTS"/>
    
     
    {/* </button> */}
   {books.length>0 && <div className=" p-5 md:p-5 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
    {
     
      books.map((x,ind)=>{
           if(ind+1===books.length)
           {
            return(<motion.div onClick={(()=>{setCard(x)})} key={x.id} ref={lastRef}   whileTap={{ scale: 0.9 }} >
             <PostCard  data={x}/>
             </motion.div>)
           }
           else{
           return (
           <motion.div key={x.id} onClick={(()=>{setCard(x)})}  whileTap={{ scale: 0.9 }} >
            <PostCard data={x}/>
            </motion.div>)
           }
      })
     
    }
    </div>}
      {isError===undefined && isLoading && <div className="text-2xl">...Loading</div>}
    </div>
  )
}

export default Posts