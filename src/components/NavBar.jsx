import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.authReducer.value);

  return (
    <nav className="flex w-full py-6 animationNav">
      <ul
        className="flex justify-evenly items-center w-[25%] cursor-pointer  "
        onClick={() => navigate("/")}
      >
        <li className="flex">
          <span className="Nunito text-3xl  font-black text-[#B76156] flex justify-center items-center ">
            {" "}
            <img src="./chef-hat.png" alt="" className="w-[40px] " />
            DISH
          </span>
          <span className="text-3xl font-bold flex">covery</span>
        </li>
      </ul>
      <ul className="flex justify-evenly items-center w-[50%] cursor-pointer">
        <li onClick={() => navigate("/")}>Home</li>
        <li>Recipe</li>
        <li onClick={() => navigate("/addrecipe")}>Add Recipe</li>
        <li>Notification</li>
        <li onClick={() => navigate("/profile")}>Profile</li>
        <li>About us</li>
      </ul>
      {isAuth ? (
        <div className="flex items-center w-[25%] justify-center"><CgProfile size={30}/></div>
      ) : (
        <ul className="flex w-[25%] justify-evenly items-center">
          <li>
            <button
              className=" w-[150px] bg-[#ebebeb] text-black py-2 shadow-xl font-bold rounded-md"
              onClick={() => navigate("/login")}
            >
              Log in
            </button>
          </li>
          <li>
            <button
              className=" w-[150px] bg-[#B76156] text-white font-bold py-2 shadow-xl rounded-md"
              onClick={() => navigate("/signup")}
            >
              Sign up
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}
