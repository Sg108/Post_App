import React from 'react'

function PostCard(props) {
   const{image,owner,text}=props.data
  return (
    <div className="p-6 bg-white bg-opacity-75 mx-auto rounded-xl shadow-xl ">
      <div className="flex gap-2 items-center mb-4">
      <img className=" md:h-12 md:w-12 h-10 w-10 mx-0  rounded-full" src={owner.picture} alt="img"/>
      <p className=" md:text-lg text-sm text-black font-semibold ">
        {owner.firstName} {owner.lastName}
      </p>
      </div>
      <div className='h-60 overflow-hidden rounded-xl'>
       <img loading="lazy" className="h-full w-full mx-auto sm:mx-0  rounded-xl object-cover" src={image} alt="img"/>
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
  )
}

export default PostCard