import React, { useEffect, useState, useRef } from "react";
import NavBar from "../components/NavBar";
import { FaBookmark } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import categories from "../constants/categories.json";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import axios from "axios";
import { motion, useInView } from "framer-motion";

export default function HomeImproved() {
  const [loader, setLoader] = useState(true);
  const [recipes, setRecipes] = useState([]);

  // Refs for scroll animations
  const shareRef = useRef(null);
  const trendingRef = useRef(null);
  const exploreRef = useRef(null);
  const newsletterRef = useRef(null);
  const categoriesRef = useRef(null);

  // useInView hooks
  const shareInView = useInView(shareRef, { once: true, margin: "-100px" });
  const trendingInView = useInView(trendingRef, { once: true, margin: "-100px" });
  const exploreInView = useInView(exploreRef, { once: true, margin: "-100px" });
  const newsletterInView = useInView(newsletterRef, { once: true, margin: "-100px" });
  const categoriesInView = useInView(categoriesRef, { once: true, margin: "-100px" });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const scrollVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const heroVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const getAllRecipes = async () => {
    try {
      const response = await axios.get(
        "https://dishcovery-api-idzo.onrender.com/api/v1/recipe/all",
        { withCredentials: true }
      );
      console.log(response.data);
      setRecipes(response.data.recipes);
      setLoader(false);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setLoader(false);
    }
  };

  useEffect(() => {
    getAllRecipes();
  }, []);


  const RecipeCard = ({ recipe, index }) => (
    <motion.div
      className="m-4 w-[400px] py-4 shadow-xl shadow-gray-300 flex flex-col justify-evenly items-center relative rounded-lg bg-white hover:shadow-2xl"
      variants={cardVariants}
      
      animate="visible"
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <motion.div
        className="p-3 shadow-xl shadow-gray-400 absolute top-6 right-6 rounded-sm bg-white cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaBookmark color="#b55d51" />
      </motion.div>
      <motion.img
        src={recipe.imgs}
        alt=""
        className="object-cover rounded-t-lg w-full h-[260px]"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
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
        <p className="font-semibold text-lg">
          {recipe.title.length > 45 ? recipe.title.slice(0, 42) + "..." : recipe.title}
        </p>
        <div className="flex justify-evenly items-center m-2">
          <img
            src="./aditi.png"
            alt=""
            className="w-[40px] h-[40px] rounded-full"
          />
          <p className="font-bold ml-2">{recipe.author}</p>
        </div>
      </div>
    </motion.div>
  );

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div className="Nunito text-md min-h-screen">
          <NavBar />

          {/* Hero Section with Background */}
          <div className="relative min-h-screen flex items-center">
            {/* Background */}
            <motion.img
              src="./bg.svg"
              className="absolute -z-30 top-0 right-0 w-[60%]"
              alt=""
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
            />

            {/* Hero Content */}
            <motion.div
              className="grid grid-cols-2 space-x-8 w-[80%] m-auto items-center"
              variants={heroVariants}
              
              animate="visible"
            >
              {/* Left Side - Text Content */}
              <div className="flex-1">
                <motion.h1
                  className="text-6xl font-extrabold mb-4"
                  variants={itemVariants}
                >
                  What's in <br /> Your <span className="text-[#B76156]">Pantry</span>?
                </motion.h1>
                <motion.p
                  className="text-lg mb-6"
                  variants={itemVariants}
                >
                  Unveil the magic within your pantry—enter the ingredients you hold,
                  and let Dishcovery weave them into delightful culinary tales. Share
                  your creations, savor the flavors of a thriving community, and let
                  every like and comment ignite your passion for food. At Dishcovery,
                  every dish begins with a spark of imagination.
                </motion.p>
                <motion.button
                  className="px-6 py-2 rounded-md bg-[#b55d51] font-bold text-white hover:bg-[#9a4a3e] transition-colors"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ask Recipe
                </motion.button>
              </div>

              {/* Right Side - Dish Image */}
              <div className="flex-1 flex justify-center items-center relative">
                <motion.img
                  src="./dish.png"
                  width={400}
                  className="z-10"
                  alt=""
                  variants={imageVariants}
                  
                  animate="visible"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Comment Section */}
                <motion.div
                  className="absolute -bottom-20 -right-10 bg-white rounded-lg z-20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <div className="w-[80px] h-[80px] flex justify-center items-center rounded-full shadow-inner ml-2 mb-[-55px]">
                    <img
                      src="./aditi.png"
                      alt=""
                      className="w-[60px] h-[60px] rounded-full"
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
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Share Section */}
          <motion.div
            ref={shareRef}
            className="flex w-[90%] m-auto justify-evenly items-center py-20"
            variants={scrollVariants}
            
            animate={shareInView ? "visible" : "hidden"}
          >
            <motion.img
              src="./share.jpeg"
              alt=""
              className="w-[300px] mx-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="flex flex-col w-[600px] justify-center items-center mx-4"
              variants={containerVariants}
              
              animate={shareInView ? "visible" : "hidden"}
            >
              <motion.span
                className="Meri text-2xl font-bold py-2 flex flex-col"
                variants={itemVariants}
              >
                Got a recipe everyone raves about?
                <br />
                <span className="Meri text-4xl text-[#B76156] font-extrabold py-4">
                  Share it on Dishcovery!
                </span>
              </motion.span>
              <motion.span
                className="Nunito text-xl m-2 py-4"
                variants={itemVariants}
              >
                Inspire foodies, get likes, and start a buzz around your culinary
                creations. From family treasures to bold experiments, every dish
                deserves a spotlight. Join the fun, share your flavor, and let's
                turn your kitchen magic into community love!
              </motion.span>
              <motion.button
                className="px-6 py-4 rounded-md bg-[#b55d51] font-bold text-white m-4 hover:bg-[#9a4a3e] transition-colors"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Create New Recipe
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Trending Section */}
          <motion.div
            ref={trendingRef}
            className="block mt-20"
            variants={scrollVariants}
            
            animate={trendingInView ? "visible" : "hidden"}
          >
            <motion.h1
              className="text-3xl font-bold py-4 ml-32"
              variants={scrollVariants}
              animate={trendingInView ? "visible" : "hidden"}
            >
              Trending Now
            </motion.h1>
            <motion.div
              className="flex w-[90%] m-auto flex-wrap justify-evenly items-center"
              variants={containerVariants}
              animate={trendingInView ? "visible" : "hidden"}
            >
              {recipes.map((recipe, index) => (
                <RecipeCard key={index} recipe={recipe} index={index} />
              ))}
            </motion.div>
          </motion.div>

          {/* Explore Recipe Section */}
          <motion.div
            ref={exploreRef}
            className="block mt-40"
            variants={scrollVariants}
            
            animate={exploreInView ? "visible" : "hidden"}
          >
            <motion.h1
              className="text-3xl font-bold py-4 ml-32"
              variants={scrollVariants}
              
              animate={exploreInView ? "visible" : "hidden"}
            >
              Explore Recipe
            </motion.h1>
            <motion.div
              className="flex w-[90%] m-auto flex-wrap justify-evenly items-center"
              variants={containerVariants}
              
              animate={exploreInView ? "visible" : "hidden"}
            >
              {recipes.length > 0 && recipes.map((recipe, index) => (
                <RecipeCard key={`explore-${index}`} recipe={recipe} index={index} />
              ))}
            </motion.div>
          </motion.div>

          {/* Newsletter Section */}
          <motion.div
            ref={newsletterRef}
            className="flex flex-col mt-[200px] justify-evenly items-center bg-[#fff0ed] w-full py-8"
            variants={scrollVariants}
            
            animate={newsletterInView ? "visible" : "hidden"}
          >
            <motion.p
              className="Meri text-[#b55d51] text-4xl font-bold py-2"
              variants={scrollVariants}
              
              animate={newsletterInView ? "visible" : "hidden"}
            >
              Let's stay in touch
            </motion.p>
            <br />
            <motion.p
              className="w-[600px] text-center"
              variants={scrollVariants}
              
              animate={newsletterInView ? "visible" : "hidden"}
              transition={{ delay: 0.2 }}
            >
              Join our newsletter so that we can reach out to you with our new
              recipes and connect to our community!
            </motion.p>
            <motion.span
              className="flex m-4"
              variants={scrollVariants}
              
              animate={newsletterInView ? "visible" : "hidden"}
              transition={{ delay: 0.4 }}
            >
              <input
                type="email"
                placeholder="Enter your Email"
                className="border font-bold px-5 border-[#b55d51] text-[#b55d51] focus-within:outline-none w-[500px] rounded-md"
              />
              <motion.button
                type="submit"
                className="rounded-md bg-[#b55d51] font-bold text-white p-4 mx-4 w-[200px] hover:bg-[#9a4a3e] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </motion.span>
          </motion.div>

          {/* Categories Section */}
          <motion.div
            ref={categoriesRef}
            className="block mb-16"
            variants={scrollVariants}
            
            animate={categoriesInView ? "visible" : "hidden"}
          >
            <motion.h1
              className="text-3xl font-bold ml-52 mt-24"
              variants={scrollVariants}
              
              animate={categoriesInView ? "visible" : "hidden"}
            >
              Categories
            </motion.h1>
            <motion.div
              className="flex flex-wrap justify-evenly items-center w-[80%] m-auto"
              variants={containerVariants}
              
              animate={categoriesInView ? "visible" : "hidden"}
            >
              {categories.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col justify-center items-center my-8 mx-16"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img
                    className="w-[160px] h-[160px] object-cover rounded-full"
                    src={item.img}
                    alt=""
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <h1 className="font-bold text-xl mt-3">{item.name}</h1>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <Footer />
        </div>
      )}
    </>
  );
}
