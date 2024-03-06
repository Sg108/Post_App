import {useState,useEffect,useRef,useCallback} from 'react'
import PostCard from './PostCard.jsx'
//const arr = [1,1,1,1,1,1,1,1];

function Posts() {
  const [books,setBooks]=useState([]);
  const [isLoading,setLoading]=useState(true)
  const [isError,setError]=useState()
  const [more,setMore]=useState(true)
  const [page,setPage]=useState(0)
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

   // console.log(pageRef.current,page)
    if(pageRef.current<page){
    setLoading(true);
    fetch(`http://localhost:3002/posts?page=${page}`,{
    method:'GET',
    credentials:'include' ,
  })
    .then((res)=>res.json())
    .then((res)=>{
      pageRef.current = page
      setBooks((prev)=>[...prev,...res])
      setLoading(false)
      if(res.length===0)
      {setMore(false)}
    }).catch((e)=>{
      setError(e.message)
    })
  }
  },[page])

  return (
    <>
  
    {isError!==undefined && <div>{isError}</div>}
    <div className="p-5 md:p-1 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2">
    {
     
      books.map((x,ind)=>{
           if(ind+1===books.length)
           {
            return(<div key={x.id} ref={lastRef} >
             <PostCard  data={x}/>
             </div>)
           }
           else{
           return (
           <div key={x.id} >
            <PostCard data={x}/>
            </div>)
           }
      })
     
    }
     </div>
      {isError===undefined && isLoading && <div>Loading</div>}
    {/* <PostCard />
    <PostCard />
    <PostCard/>
    <PostCard />
    <PostCard /> */}
    </>
  )
}

export default Posts