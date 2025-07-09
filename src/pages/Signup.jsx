import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [data, setData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function signup() {
    setLoading(true);
   if(data.password == data.confirmPassword) {
     axios.post(
      "https://dishcovery-api-idzo.onrender.com/api/v1/users/signup",
      { email: data.email, username: data.username, password: data.password },
      { withCredentials: true }
    )
      .then((res) => {
        console.log(res.data);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err.response);
      });
   }
   else {
    setLoading(false);
      alert("Passwords do not match");
   }
setLoading(false);
  }

  return (
    <div>
      <NavBar />
      <div className="flex w-[80%] m-auto justify-evenly items-center my-16 Nunito outline outline-gray-300 rounded-xl shadow-xl p-8 relative">
        <div className="w-[40%]">
          <img
            src="./login.jpeg"
            alt=""
            className="w-full object-cover h-[65vh]"
          />
        </div>
        <div className="flex flex-col w-[50%]   ">
          <p className="text-3xl font-bold py-4">Want to join our Family</p>
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
                value={data.username}
                disabled={loading}
                onChange={(e) => {
                  setData({
                    username: e.target.value,
                    email: data.email,
                    password: data.password,
                    confirmPassword: data.confirmPassword,
                  });
                }}
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
                value={data.email}
                disabled={loading}
                onChange={(e) => {
                  setData({
                    email: e.target.value,
                    username: data.username,
                    password: data.password,
                    confirmPassword: data.confirmPassword,
                  });
                }}
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
                className="p-2 w-full pl-10 border-0 outline outline-1 outline-bottom-0 focus-within:outline-1 outline-gray-300 border-b-4 border-gray-300 focus-within:border-[#B76156] "
                value={data.password}
                disabled={loading}
                onChange={(e) => {
                  setData({
                    password: e.target.value,
                    email: data.email,
                    username: data.username,
                    confirmPassword: data.confirmPassword,
                  });
                }}
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
                className="p-2 w-full pl-10 border-0 outline outline-1 outline-bottom-0 focus-within:outline-1 outline-gray-300 border-b-4 border-gray-300 focus-within:border-[#B76156] "
                value={data.confirmPassword}
                disabled={loading}
                onChange={(e) => {
                  setData({
                    confirmPassword: e.target.value,
                    email: data.email,
                    username: data.username,
                    password: data.password,
                  });
                }}
              />
            </div>
            <span className="text-gray-500 text-sm my-4 font-bold">
              <input type="checkbox" name="" id="check" className="check" />
              {"   "}I agree the{" "}
              <span className="underline">term and policies</span>
            </span>
          </span>
          <button
            className="px-6 py-2 rounded-md bg-[#b55d51] font-bold text-white m-4 "
            onClick={signup}
            disabled={loading}
          >
            Sign Up
          </button>
          <span>
            Already have an account?{" "}
            <a href="/login" className="text-[#b55d51] text-lg underline  ">
              Login
            </a>
          </span>
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

     <Footer/>
    </div>
  );
}
