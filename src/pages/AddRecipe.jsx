import React from "react";
import NavBar from "../components/NavBar";
import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { TbCameraPlus } from "react-icons/tb";

export default function AddRecipe() {
  return (
    <div className="Nunito">
      <NavBar />
      <div>
        <hr />
        <span className="flex justify-between items-center w-[85%] m-auto py-8">
          <p className="text-2xl font-bold  ">Create new recipes</p>
          <button className=" w-[100px] bg-[#B76156] text-white font-bold py-1 text-md shadow-xl rounded-md">
            Save
          </button>
        </span>
        <hr />

        <div className="w-[50%] m-auto py-8">
          <p className="font-bold text-lg flex flex-col mb-2">
            Recipe Title
            <input
              type="text"
              placeholder="Enter Recipe's Title"
              className="border font-bold px-5 border-[#bebebe] text-[#b55d51] focus-within:outline-[#b55d51] w-full rounded-md py-4 my-2 mb-8 "
            />
            Recipe Image:
            <div className="relative py-2">
              <img
                src="./salad.jpeg"
                alt=""
                className="w-full object-cover h-[65vh] "
              />
              <span className=" flex ">
                <button className="border border-1 bg-[#ffffff] border-[#B76156] text-[#B76156] text-sm rounded-md p-1 px-4 m-2 absolute top-[2%]">
                  Set as cover
                </button>
                <button className="border border-1 bg-[#ffffff] border-[#B76156] text-[#B76156] text-sm rounded-md p-1 px-4 m-2 absolute top-[2%] left-[16%]">
                  Change image
                </button>
                <button className="border border-1 bg-[#ffffff] border-[#B76156]  rounded-md p-2 m-2 absolute bottom-[2%] ">
                  <MdDelete color="#B76156" />
                </button>
              </span>
            </div>
            <p className="font-bold text-lg flex flex-col my-4">
              Recipe Description
              <input
                type="text"
                placeholder="Introduce your recipe"
                className="border font-bold px-5 border-[#bebebe] text-[#b55d51] focus-within:outline-[#b55d51] w-full rounded-md py-4  my-2 "
              />
            </p>
            <p className="font-bold text-lg flex flex-col my-4">
              Ingredients:
              <input
                type="text"
                placeholder="Add ingredients"
                className="border font-bold px-5 border-[#bebebe] text-[#b55d51] focus-within:outline-[#b55d51] w-full rounded-md py-4  mt-2 "
              />
              <input
                type="text"
                placeholder="Add ingredients"
                className="border font-bold px-5 border-[#bebebe] text-[#b55d51] focus-within:outline-[#b55d51] w-full rounded-md py-4  mt-2 "
              />
              <input
                type="text"
                placeholder="Add ingredients"
                className="border font-bold px-5 border-[#bebebe] text-[#b55d51] focus-within:outline-[#b55d51] w-full rounded-md py-4  mt-2 "
              />
            </p>
            <p className="border-none  text-[#b55d51] text-xl font-bold cursor-pointer flex  items-center m-1 mb-4">
              <FaPlus color="#b55d51" /> Add
            </p>
            Instructions:
            <p className="flex">
              <button className="border border-1 bg-[#ffffff] border-[#B76156]  rounded-md p-8 mt-4  ">
                <TbCameraPlus color="#b55d51" size={30} />
              </button>
              <p className="ml-4 flex justify-evenly items-center font-medium text-md">
                Prepare the dressing: In a small bowl, whisk together olive oil,
                lime (or lemon) juice, salt, and pepper.
              </p>
            </p>
            <p className="flex">
              <button className="border border-1 bg-[#ffffff] border-[#B76156]  rounded-md p-8 mt-4  ">
                <TbCameraPlus color="#b55d51" size={30} />
              </button>
              <p className="ml-4 flex justify-evenly items-center font-medium text-md">
                Assemble the salad: In a large bowl, combine the diced avocados,
                cherry tomatoes, cucumber, red onion, and cilantro.
              </p>
            </p>
            <p className="flex">
              <button className="border border-1 bg-[#ffffff] border-[#B76156]  rounded-md p-8 mt-4  ">
                <TbCameraPlus color="#b55d51" size={30} />
              </button>
              <p className="ml-4 flex justify-evenly items-center font-medium text-md">
                Toss everything together: Drizzle the dressing over the salad.
                Gently toss to combine, being careful not to mash the avocado.
              </p>
           
            </p>
            <input
                type="text"
                placeholder="write instructions"
                className="border font-bold px-5 border-[#bebebe] text-[#b55d51] focus-within:outline-[#b55d51] w-full rounded-md py-4  mt-2 "
              />
               <p className="border-none  text-[#b55d51] text-xl font-bold cursor-pointer flex  items-center m-1 mb-4">
              <FaPlus color="#b55d51" /> Add
            </p>

            Servings:
            <input
                type="number"
                placeholder="4"
                className="border font-bold px-5 border-[#bebebe] text-[#b55d51] focus-within:outline-[#b55d51] w-full rounded-md py-4  mt-2 "
               />
             <p className="text-sm text-gray-300 my-1">How many portion this recipe will serve?</p>
              <br />
              Cooking time:
              <p className="flex">
              <input type="number" 
              placeholder="Hours"
              className="border font-bold px-5 border-[#bebebe] text-[#b55d51] focus-within:outline-[#b55d51] w-full rounded-md py-4  mt-2 mr-2"/>
               <input type="number" 
              placeholder="Minutes"
              className="border font-bold px-5 border-[#bebebe] text-[#b55d51] focus-within:outline-[#b55d51] w-full rounded-md py-4  mt-2 "/>
              </p>
              <p className="text-sm text-gray-300 my-1">How long it take cook this recipe?</p>
              <br />
              Prep time:
              <p className="flex ">
              <input type="number" 
              placeholder="Hours"
              className="border font-bold px-5 border-[#bebebe] text-[#b55d51] focus-within:outline-[#b55d51] w-full rounded-md py-4  mt-2 mr-2"/>
               <input type="number" 
              placeholder="Minutes"
              className="border font-bold px-5 border-[#bebebe] text-[#b55d51] focus-within:outline-[#b55d51] w-full rounded-md py-4  mt-2 "/>
              </p>
              <p className="text-sm text-gray-300 my-1">How long it take to prepare this recipe?</p>
<br />


              Cuisine:
              <select name="" id="" className="border font-bold px-5 border-[#bebebe] text-[#b55d51] focus-within:outline-[#b55d51] w-full rounded-md py-4  my-2 ">
              <option value="">Other</option>
                <option value="">Chinese</option>
                <option value="">Indian</option>
                <option value="">Indo-Chinese</option>
                <option value="">Korean</option>
                <option value="">Thai</option>
                <option value="">Italian</option>
                <option value="">Greek</option>
                <option value="">Japanese</option>
                <option value="">French</option>
                <option value="">Spanish</option>
                <option value="">Mexican</option>
              </select>
             
          </p>
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
  );
}
