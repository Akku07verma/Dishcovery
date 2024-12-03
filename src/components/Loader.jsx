import React, { useState } from 'react'

export default function Loader() {



  return (
   <div className='w-full h-screen flex justify-center items-center'>
    <div className='w-[220px] bg-white border-none p-0 m-0'>
      <video src="./loader_clipped.mp4" autoPlay muted loop className='w-full'  type="video/mp4" ></video>
      <h1 className='text-center font-bold mt-2'>Loading . . .</h1>
      </div>
   </div>

  )
}
