import React from 'react'

export default function NavBar() {
  return (
    <nav className="flex w-full py-6">
      <ul className="flex justify-evenly items-center w-[25%]">
      <li className='flex'>
        
        <span className="Nunito text-3xl  font-black text-[#B76156] flex justify-center items-center " > <img src="./chef-hat.png" alt="" className='w-[40px] ' />DISH</span>
        <span className='text-3xl font-bold flex'>covery</span>
      </li>
      </ul>
    <ul className="flex justify-evenly items-center w-[50%]">
  
      <li>Home</li>
      <li>Recipe</li>
      <li>Add Recipe</li>
      <li>Notification</li>
      <li>Profile</li>
      <li>About us</li>
    </ul>
    <ul className="flex w-[25%] justify-evenly items-center">
      <li>
        <button className=' w-[150px] bg-white text-black py-2  font-bold rounded-md'>Log in</button>
      </li>
      <li>
        <button className=' w-[150px] bg-[#B76156] text-white font-bold py-2 rounded-md'>Sign up</button>
      </li>
    </ul>
  </nav>
  )
}
