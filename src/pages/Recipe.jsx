import React from "react";
import NavBar from "../components/NavBar";
import { FaBookmark, FaRegUserCircle } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";
import { MdOutlineInsertComment } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import ReactStars from "react-rating-stars-component";
import CheckBox from "../components/CheckBox";

export default function Recipe() {
  return (
    <div>
      <NavBar />

      <div className="w-[80%] m-auto">
        <span className="text-3xl w-full font-bold flex justify-between items-center ">
          <p className="w-[60%] ">
            Rustic Stone-Baked Margherita Pizza with Fresh Basil, Melted
            Mozzarella, and a Tangy San Marzano Tomato Sauce
          </p>{" "}
        </span>
        <span className="flex w-full justify-between items-center">
          <p className="flex justify-between w-[60%] items-center">
            <p className="flex items-center">
              <FaRegUserCircle color="#b55d51" className="mx-2" />
              Author name
            </p>
            <p className="flex items-center">
              <SlCalender color="#b55d51" className="mx-2" />
              Calender
            </p>
            <p className="flex items-center">
              <MdOutlineInsertComment color="#b55d51" className="mx-2" />
              Comment
            </p>
            <p className="flex items-center">
              <FaBookmark color="#b55d51" className="mx-2" />
              Saves
            </p>
            <p className="flex items-center">
              {" "}
              <ReactStars
                count={5}
                value={3.5}
                edit={false}
                size={24}
                isHalf={true}
                emptyIcon={<i color="#A5A5A5" className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#b55d51"
              />
            </p>
          </p>

          <p className="flex items-center w-[40%] justify-center">
            <button className="border border-1 bg-[#ffffff] border-[#B76156]  rounded-md p-2 m-4">
              <FaBookmark color="#B76156" />
            </button>{" "}
            <IoShareSocial color="#B76156" />
          </p>
        </span>
        <hr />
        <div className="w-[60%]">
          <img
            src="./pizza.jpeg"
            alt=""
            className=" w-full h-[60vh] object-cover p-4"
          />

          <div className="flex justify-evenly items-center mb-8 mt-4">
            <div className=" border-r-4 border-gray-300 pr-12 flex flex-col justify-center items-center">
              <p className="text-lg font-bold text-gray-400">Prep time:</p>
              <p className="text-xl font-bold">5min</p>
            </div>
            <div className=" border-r-4 border-gray-300 pr-16 flex flex-col justify-center items-center">
              <p className="text-lg font-bold text-gray-400  ">Cook time:</p>
              <p className="text-xl font-bold">5min</p>
            </div>
            <div className="  pr-12 flex flex-col justify-center items-center">
              <p className="text-lg font-bold text-gray-400  ">Serving:</p>
              <p className="text-xl font-bold">4</p>
            </div>
          </div>
          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, a
            reiciendis quisquam ullam similique maxime cum praesentium
            architecto perferendis dolorum officia consectetur minus recusandae,
            sunt nesciunt ad, incidunt dignissimos at!
          </p>

          <h1 className="text-3xl font-bold my-2">Ingredients:</h1>
          <div className="flex flex-col">
            <CheckBox title="Pizza Base" />
            <CheckBox title="Pizza Base" />
            <CheckBox title="Pizza Base" />
            <CheckBox title="Pizza Base" />
          </div>

          <h1 className="text-3xl font-bold my-2">Instructions:</h1>
          <div className="flex flex-col">
            <CheckBox title="Pehle Blinkit karo saman lao" />
            <CheckBox title="Fir khana banana start kro" />
            <CheckBox title="Last mai kuch ni banega tumse" />
            <CheckBox title="Zomato kro tum" />
          </div>
        </div>
        <div className="w-[30%]"></div>
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
  );
}
