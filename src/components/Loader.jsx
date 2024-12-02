import React, { useState } from 'react'

export default function Loader() {



  return (
   <div className='w-full h-screen flex justify-center items-center'>
    <video src="./loader.mp4" autoPlay muted loop className='w-[10%]' ></video>
   </div>

  )
}
