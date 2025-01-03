import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { FiSearch } from "react-icons/fi";
import logo from "../assets/logo/logo.svg";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";
import  "../index.css"
import { IoSunnyOutline } from "react-icons/io5";
import { BsFillMoonFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../store/darkModeSlice";

const links = [
  { title: "Home", link: "/" },
  { title: "About", link: "about" },
  { title: "Contact us", link: "Contact" },
 
  
];

export default function Header() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const dispatch = useDispatch();
  const [isHumbergerOpen, setisHumbergerOpen] = useState(false);
  const isLogin = true;
  const navLinks =
    "capitalize S_Underline relative inline-block after:bg-[#db4444] hover:text-[#db4444] hover:after:left-0 after:-bottom-1 w-fit hover:after:w-[100%]";

  return (
    <>
      <div className={ ` transition-color duration-300 border-b-[1px]  ${darkMode ? "bg-slate-900 text-white" : ""}`}>
        <div className="h-24   margin justify-between relative flex max-w-full items-center max-mm:gap-2 max-ml:gap-2">
<Link to={'/'} className="max-xs:w-8 max-xs:h-8 max-mm:w-7 max-mm:h-7">
        <img src={logo} alt="" />
</Link>

        <div className=" bg-[#F5F5F5] max-ml:h-8 max-ml:w-48  rounded w-60 h-10  bg-center  max-mm:w-40 max-mm:px-1  max-mm:h-7 px-3 max-xs:w-32 max-xs:h-8">
          <input
          
            type="search"
            className="bg-transparent   w-full outline-none text-sm max-mm:text-[8px] max-ml:text-[10px] max-xs:text-[7px]  "
            placeholder="What are you looking for?"
            />
          <FiSearch className="text-3xl max-xs:text-2xl max-mm:text-2xl" />
        </div>

        <ul className={`transition-color duration-300 hidden md:flex gap-16  ${darkMode ? "text-white" : ""}`}>
          {links.map((item, i) => (
            <li onClick={()=>setisHumbergerOpen(false)} className={navLinks} key={i}>
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}

          {!isLogin ? (
            <li className={navLinks}>
              <Link to="/Login">Login</Link>
            </li>
          ) : null}
        </ul>

        <button
          onClick={() => setisHumbergerOpen(!isHumbergerOpen)}
          className="md:hidden text-4xl order-1 max-xs:text-2xl max-mm:text-[30px] "
          >
          {isHumbergerOpen ? <IoClose /> : <LuMenu />}
        </button>
        {isHumbergerOpen && (
          <ul className=" absolute top-24 w-[200px] md:hidden bg-gray-200 p-6 z-10 gap-5 flex flex-col  ">
            {links.map((item, i) => (
              <li onClick={()=>setisHumbergerOpen(false)} className={navLinks} key={i}>
                <Link to={item.link}>{item.title}</Link>
              </li>
            ))}
            {!isLogin ? (
              <li className={navLinks}>
                <Link to="/Login">Login</Link>
              </li>
            ) : null}
          </ul>
        )}
        <div className="bg-center text-2xl gap-6 max-ml:gap-3  max-xs:gap-3  max-xs:text-[20px] max-mm:text-[20px] max-mm:gap-3">
          <button onClick={()=>{

dispatch(toggleDarkMode())


          }} className= {`transition duration-300 ${darkMode ? "text-white" : ""}`}>
            {darkMode ? 
            <IoSunnyOutline/>
            :
          <BsFillMoonFill />
          }
          </button>
          {isLogin ? (
            <>
              <FaRegHeart />
              <Link to={'/AddToCart'}>
              <GrCart />
              </Link>
              
            </>
          ) : null}

          <Link to={'/profile'} className="bg-primary max-xs:w-6 max-mm:h-7 max-mm:w-7 max-xs:h-6 rounded-full w-8 h-8 bg-center overflow-hidden text-base text-white">
            {isLogin ? (

              <img
              src="https://avatars.githubusercontent.com/u/179931221?s=400&u=f4766fee283ab2f99aec0d2a67e3731ec09a2c88&v=4"
                alt=""
              />
            ) : (
              <FaRegUser />
            )}
          </Link>
        </div>
      </div>
            </div>
    </>
  );
}
