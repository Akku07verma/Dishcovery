import React from "react";
import NavBar from "../components/NavBar";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

export default function Profile() {
  return (
    <div>
      <NavBar />

      <div className="flex w-[80%] m-auto justify-evenly items-center my-16 Nunito outline outline-gray-300 rounded-xl shadow-xl p-8 relative">
        <div className="w-[40%]">
         <img src="./pizza.jpeg" alt=""   className="w-full object-cover h-[65vh]" />
         <input type="file"   className="border border-1 bg-[#ffffff] border-[#B76156] text-[#B76156] text-sm rounded-md p-1 px-4 m-2 absolute top-[2%]"
                  name="" id=""  />
        </div>
        <div className="flex flex-col w-[50%]   ">
          <p className="text-3xl font-bold py-4">
        
        Profile Setting
          </p>
          <span className=" flex flex-col ">
            <div className="relative">
              <FaRegUserCircle
                color="gray"
                className="absolute left-3 top-1/2 -translate-y-1/2"
              />
              <input
                type="text"
                placeholder=" Enter your Username"
                className="p-2 pl-10 w-full border-0 outline outline-1 outline-bottom-0 focus-within:outline-1 outline-gray-300 border-b-4 border-gray-300 focus-within:border-[#B76156] rounded-t-lg"
                
                
              />
            </div>

            <div className="relative">
              <MdOutlineMail
                color="gray"
                className="absolute left-3 top-1/2 -translate-y-1/2"
              />
              <input
                type="email"
                placeholder="Enter your Email"
                className="p-2  pl-10 w-full border-0 outline outline-1 outline-bottom-0 focus-within:outline-1 outline-gray-300 border-b-4 border-gray-300 focus-within:border-[#B76156]"
              />
            </div>

            <div className="relative">
              <RiLockPasswordLine
                color="gray"
                className="absolute left-3 top-1/2 -translate-y-1/2"
              />
              <input
                type="password"
                placeholder="Enter your Password"
                className="p-2 w-full pl-10 border-0 outline outline-1 outline-bottom-0 focus-within:outline-1 outline-gray-300 border-b-4 border-gray-300 focus-within:border-[#B76156] rounded-b-lg"
              />
            </div>
            <div className="relative">
              <RiLockPasswordLine
                color="gray"
                className="absolute left-3 top-1/2 -translate-y-1/2"
              />
              <input
                type="password"
                placeholder="Enter your Confirm Password"
                className="p-2 w-full pl-10 border-0 outline outline-1 outline-bottom-0 focus-within:outline-1 outline-gray-300 border-b-4 border-gray-300 focus-within:border-[#B76156] rounded-b-lg"
              />
            </div>
          </span>

          <button
            className="px-6 py-2 rounded-md bg-[#b55d51] font-bold text-white m-4 "
          >
            Save
          </button>
         
          <ul className="flex justify-end items-center w-[30%] absolute bottom-[5%] right-[2%]">
            <li className="flex">
              <span className="Nunito text-2xl  font-black text-[#B76156] flex justify-center items-center ">
                {" "}
                <img src="./chef-hat.png" alt="" className="w-[20px] " />
                DISH
              </span>
              <span className="text-2xl font-bold flex">covery</span>
            </li>
          </ul>
        </div>
      </div>

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
  );
}
