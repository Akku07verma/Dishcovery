import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { FaBookmark } from "react-icons/fa";
// import StarRatings from './react-star-ratings';
import ReactStars from "react-rating-stars-component";
import categories from "../constants/categories.json";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

export default function Home() {
  const [pos, setPos] = useState(0);
  const [loader, setLoader]=useState(true);


  useEffect(() => {
    const printPos = () => {
      console.log(window.scrollY);
      setPos(window.scrollY);
    };
    window.addEventListener("scroll", printPos);
    return () => {
      window.removeEventListener("scroll", printPos);
    };
  }, []);

  return (
    <>{
      loader?<Loader/>: 
        <div className="Nunito text-md h-[600vh]">
        <NavBar />
  
        {/* bg add */}
        <img
          src="./bg.svg"
          className="absolute -z-30 top-0 right-0 w-[60%]"
          alt=""
        />
  
        {/* text area */}
        <div className="absolute top-[30%] left-[8%]">
          <h1 className="Meri text-6xl font-extrabold mb-4 animationHeading">
            What's in <br /> Your <span className="text-[#B76156]">Pantry</span>?
          </h1>
          <p className="w-[400px]  flex justify-center m-2 animationParagraph">
            Unveil the magic within your pantry—enter the ingredients you hold,
            and let Dishcovery weave them into delightful culinary tales. Share
            your creations, savor the flavors of a thriving community, and let
            every like and comment ignite your passion for food. At Dishcovery,
            every dish begins with a spark of imagination.
          </p>
          <button className="px-6 py-2 rounded-md bg-[#b55d51] font-bold text-white m-4 animationbtn">
            Ask Recipe
          </button>
        </div>
  
        {/* dish */}
        <img
          src="./dish.png"
          width={400}
          className="absolute -z-20 top-[35%] right-[14%] animationDish "
          alt=""
        />
  
        {/* comment div */}
        <div className=" absolute -z-10  top-[68%] right-[35%] bg-white rounded-lg animationCmt">
          <div className="w-[80px] h-[80px] flex justify-center items-center rounded-full  shadow-inner ml-2  mb-[-55px]">
            <img
              src="./aditi.png"
              alt=""
              className="w-[60px] h-[60px] rounded-full   "
            />
          </div>
  
          <div className="w-[350px] shadow-xl p-4 flex flex-col justify-center items-center rounded-xl">
            <h1>Aditi Shahi</h1>
            <ReactStars
              count={5}
              value={4.5}
              edit={false}
              size={24}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
            <span>
              Wow, this recipe is a flavour explosion in my mouth! very delicious.
            </span>
          </div>
        </div>
  
        {/*  */}
        <div
          className={
            pos > 230
              ? "flex w-[90%] m-auto justify-evenly items-center opacity-0 animationDiv"
              : "flex w-[90%] m-auto justify-evenly items-center opacity-0"
          }
        >
          <img src="./share.jpeg" alt="" className=" w-[300px]  mx-4" />
          <div className="flex flex-col w-[600px]  w-[300px] justify-center items-center mx-4">
            <span className="Meri text-2xl font-bold py-2 flex flex-col">
              Got a recipe everyone raves about?
              <br />
              <span className="Meri text-4xl text-[#B76156] font-extrabold  py-4">
                Share it on Dishcovery!
              </span>{" "}
            </span>
            <span className="Nunito text-xl m-2 py-4">
              Inspire foodies, get likes, and start a buzz around your culinary
              creations. From family treasures to bold experiments, every dish
              deserves a spotlight. Join the fun, share your flavor, and let’s
              turn your kitchen magic into community love!"
            </span>
            <button className="px-6 py-4 rounded-md bg-[#b55d51] font-bold text-white m-4 ">
              Create New Recipe
            </button>
          </div>
        </div>
  
        {/* {trend} */}
  
        <div className={pos > 1000 ? " animationTrend" : " hidden"}>
          <h1 className="text-3xl font-bold py-4 ml-32"> Trending Now</h1>
          <div className="flex w-[90%] m-auto flex-wrap justify-evenly items-center">
            {[1, 2, 3, 4, 5, 6].map((i, id) => (
              <div
                key={id}
                className="m-4 w-[400px] py-4 shadow-xl shadow-gray-300 flex flex-col justify-evenly items-center relative rounded-lg"
              >
                <div className="p-3 shadow-xl shadow-gray-400 absolute top-6 right-6 rounded-sm bg-white">
                  <FaBookmark color="#b55d51" />
                </div>
                <img
                  src="./ramen.jpeg"
                  alt=""
                  className="object-cover rounded-t-lg  w-full h-[260px]"
                />
                <div className="flex flex-col justify-center items-start w-[90%]">
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
                  <p>
                    Korean Instant Ramen <br />
                    Kimchi Flavour
                  </p>
                  <div className="flex justify-evenly items-center m-2">
                    <img
                      src="./aditi.png"
                      alt=""
                      className="w-[40px] h-[40px] rounded-full  flex "
                    />
                    <p className="font-bold  ml-2">Aditi Shahi</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
  
        {/* {} */}
        <div className={pos > 2000 ? " animationTrend mt-40" : " hidden mt-40"}>
          <h1 className="text-3xl font-bold py-4 ml-32"> Explore Recipe</h1>
          <div className="flex w-[90%] m-auto flex-wrap justify-evenly items-center">
            {[1, 2, 3, 4, 5, 6].map((i, id) => (
              <div
                key={id}
                className="m-4 w-[400px] py-4 shadow-xl shadow-gray-300 flex flex-col justify-evenly items-center relative rounded-lg"
              >
                <div className="p-3 shadow-xl shadow-gray-400 absolute top-6 right-6 rounded-sm bg-white">
                  <FaBookmark color="#b55d51" />
                </div>
                <img
                  src="./ramen.jpeg"
                  alt=""
                  className="object-cover rounded-t-lg  w-full h-[260px]"
                />
                <div className="flex flex-col justify-center items-start w-[90%]">
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
                  <p>
                    Korean Instant Ramen <br />
                    Kimchi Flavour
                  </p>
                  <div className="flex justify-evenly items-center m-2">
                    <img
                      src="./aditi.png"
                      alt=""
                      className="w-[40px] h-[40px] rounded-full  flex "
                    />
                    <p className="font-bold  ml-2">Aditi Shahi</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
  
        {/* div  */}
        <div
          className={
            pos > 2800
              ? "flex flex-col mt-[1250px]  justify-evenly items-center bg-[#fff0ed] w-full py-8"
              : "flex flex-col hidden justify-evenly items-center bg-[#fff0ed] w-full py-8"
          }
        >
          <p className="Meri text-[#b55d51] text-4xl font-bold py-2 ">
            Let's stay in touch
          </p>
          <br />
          <p className="w-[600px]">
            Join our newsletter so that we can reach out to you with our new
            recipes and connect to our community!
          </p>
          <span className="flex m-4 ">
            <input
              type="email"
              placeholder="Enter your Email"
              className="border font-bold px-5 border-[#b55d51] text-[#b55d51] focus-within:outline-none w-[500px] rounded-md "
            />
            <button
              type="submit"
              className="rounded-md bg-[#b55d51] font-bold text-white p-4 mx-4 w-[200px]"
            >
              Subscribe
            </button>
          </span>
        </div>
  
        {/* cstegories */}
  
        <div className={pos > 3300 ? "block mb-16" : "hidden"}>
          <h1 className="text-3xl font-bold ml-52  mt-24">Categories</h1>
          <div className="flex flex-wrap justify-evenly items-center w-[80%] m-auto">
            {categories.map((item, id) => (
              <div
                key={id}
                className="flex flex-col justify-center items-center my-8 mx-16"
              >
                <img
                  className="w-[160px] h-[160px] object-cover rounded-full"
                  src={item.img}
                  alt=""
                />
                <h1 className="font-bold text-xl mt-3">{item.name}</h1>
              </div>
            ))}
          </div>
        </div>
  {/*  */}
  {/*  */}
  
        <Footer pos={pos}/>
      </div>
      
      
    }
    </>
   
  );
}
