import React from 'react'
import NavBar from '../components/NavBar'
import { FaBookmark } from 'react-icons/fa'
import { IoShareSocial } from 'react-icons/io5'

export default function Recipe() {
  return (
    <div className='w-[80%] '>
        <NavBar/>

         <div className='w-[80%] m-auto'>
         <span className='text-3xl font-bold flex justify-between items-center '>
              <p className='w-[60%] '>Rustic Stone-Baked Margherita Pizza with Fresh Basil, Melted Mozzarella, and a Tangy San Marzano Tomato Sauce</p>
              <p className='flex items-center'> 
                
                
                
                  <button className="border border-1 bg-[#ffffff] border-[#B76156]  rounded-md p-2 m-4"><FaBookmark color='#B76156' /></button> <IoShareSocial color='#B76156' />
              </p>
              </span>
            <div className='w-[60%]'>
             
              <hr />
              <img src="./pizza.jpeg" alt="" />
            </div>
            <div className='w-[30%]'>
           
            </div>
         </div>

         {/* footer */}
      <div className="block w-full bg-gray-200 m-auto">
        <div className="w-[80%] text-md flex justify-evenly items-center p-8 m-auto ">
          <div className="w-[30%] ">
            <div className="flex items-center">
              <span className="Nunito text-3xl  font-black text-[#B76156] flex justify-center items-center ">
                <img src="./chef-hat.png" alt="" className="w-[40px] " />
                DISH
              </span>
              <span className="text-3xl font-bold flex">covery</span>
            </div>
            <p className="flex justify-evenly items-center w-[90%] py-8">
              {" "}
              Find recipes based on your ingredients, share your creations, and
              connect with a foodie community through likes and comments.
              Discover, create, and inspire!
            </p>
          </div>
          <div className="w-[40%] flex justify-evenly items-center ">
            <p className="flex ">
              <ul className="flex flex-col justify-evenly items-center m-2">
                <li className="font-bold">Quick Links</li>
                <li>Explore recipes</li>
                <li>Add Recipes</li>
              </ul>
              <ul className="flex flex-col justify-evenly items-center m-2">
                <li className="font-bold">Quick Links</li>
                <li> Profile</li>
                <li>About Us</li>
              </ul>
              <ul className="flex flex-col justify-evenly items-center m-2">
                <li className="font-bold">Legal</li>
                <li> Terms of use</li>
                <li>Privacy and Cookies</li>
              </ul>
            </p>
          </div>
          <div className="w-[30%] flex flex-col justify-evenly items-center">
            <p className="Meri text-[#b55d51] text-2xl font-bold flex justify-evenly items-center ">
              Newsletter
            </p>
            <br />
            <p className="w-[90%]">
              Join our newsletter so that we can reach out to you with our new
              recipes and connect to our community!
            </p>
            <span className="flex  m-4 ">
              <input
                type="email"
                placeholder="Enter your Email"
                className="border font-bold px-2 border-[#b55d51] text-[#b55d51] focus-within:outline-none w-[120%] rounded-md "
              />
              <button
                type="submit"
                className="rounded-md bg-[#b55d51] font-bold text-white p-2 mx-2 w-[40%]"
              >
                Subscribe
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
