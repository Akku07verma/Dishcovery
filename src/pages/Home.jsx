import React from "react";
import NavBar from "../components/NavBar";
// import StarRatings from './react-star-ratings';
import ReactStars from "react-rating-stars-component";



export default function Home() {
  return (
    <div className="Nunito text-md ">
      <NavBar />

      {/* bg add */}
      <img
        src="./bg.svg"
        className="absolute -z-20 top-0 right-0 w-[60%]"
        alt=""
      />

      {/* text area */}
      <div className="absolute top-[36%] left-[10%]">
        <h1 className="Meri text-6xl font-extrabold">
          What's in <br /> Your Pantry?
        </h1>
        <p className="w-[400px] mt-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, ut
          voluptatum blanditiis, magnam et voluptatibus aut cum a consequatur
          cumque ducimus esse voluptas fugiat consectetur laborum. Recusandae
          excepturi eos saepe!
        </p>
        <button className="px-6 py-2 rounded-md bg-[#b55d51] font-bold text-white m-3">
          Ask Recipe
        </button>
      </div>

      {/* dish */}
      <img
        src="./dish.png"
        width={400}
        className="absolute -z-10 top-[35%] right-[14%] "
        alt=""
      />

      {/* comment div */}
      <div className=" absolute z-10  top-[68%] right-[35%] ">
        <div className="w-[80px] h-[80px] flex justify-center items-center rounded-full  shadow-inner ml-2  mb-[-55px]">
        <img src="./aditi.png" alt="" className="w-[60px] h-[60px] rounded-full   " />
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
          <span >Wow, this recipe is a flavour explosion in my mouth! very delicious.</span>
        </div>
      </div>
    </div>
  );
}
